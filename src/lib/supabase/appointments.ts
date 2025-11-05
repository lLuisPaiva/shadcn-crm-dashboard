import { getSupabaseClient } from "./client";
import { z } from "zod";

// Zod schema for appointment validation
export const AppointmentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  appointmentDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  appointmentTime: z.string().regex(/^\d{2}:\d{2}$/, "Time must be in HH:MM format"),
});

export type AppointmentData = z.infer<typeof AppointmentSchema>;

export interface AppointmentInsert {
  name: string;
  email: string;
  appointment_date: string;
  appointment_time: string;
  status?: string;
  notes?: string | null;
}

export interface Appointment {
  id: string;
  name: string;
  email: string;
  appointment_date: string;
  appointment_time: string;
  status: string;
  google_meet_link?: string | null;
  notes?: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * Get available time slots for a given date
 * @param date - Date in YYYY-MM-DD format
 * @returns Promise with available time slots
 */
export async function getAvailableSlots(date: string): Promise<{
  success: boolean;
  slots?: string[];
  error?: string;
}> {
  try {
    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      // Return all slots as available if Supabase is not configured
      // This allows the app to work in development without env vars
      const allSlots: string[] = [];
      for (let hour = 9; hour < 18; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
          allSlots.push(timeString);
        }
      }
      return {
        success: true,
        slots: allSlots,
      };
    }

    const supabase = getSupabaseClient();

    // Get all appointments for the date
    const { data, error } = await supabase
      .from("appointments")
      .select("appointment_time, status")
      .eq("appointment_date", date)
      .in("status", ["pending", "confirmed"]);

    if (error) {
      console.error("Error fetching appointments:", error);
      return {
        success: false,
        error: error.message || "Failed to fetch available slots",
      };
    }

    // Extract booked times
    const bookedTimes = (data || []).map((apt) => apt.appointment_time.substring(0, 5)); // HH:MM format

    // Generate all possible slots (9:00 to 17:30, 30 min intervals)
    const allSlots: string[] = [];
    for (let hour = 9; hour < 18; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
        allSlots.push(timeString);
      }
    }

    // Filter out booked slots
    const availableSlots = allSlots.filter((slot) => !bookedTimes.includes(slot));

    return {
      success: true,
      slots: availableSlots,
    };
  } catch (error) {
    console.error("Unexpected error fetching slots:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}

/**
 * Submit an appointment request to Supabase
 * @param data - Appointment data from the form
 * @returns Promise with success status and optional error message
 */
export async function submitAppointment(data: AppointmentData): Promise<{
  success: boolean;
  error?: string;
  id?: string;
}> {
  try {
    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return {
        success: false,
        error: "Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.",
      };
    }

    // Validate data with Zod
    const validatedData = AppointmentSchema.parse(data);

    // Transform to database format
    // Ensure time is in HH:MM:SS format (PostgreSQL time type expects this)
    const timeFormatted = validatedData.appointmentTime.includes(':') 
      ? validatedData.appointmentTime.length === 5 
        ? `${validatedData.appointmentTime}:00` // Add seconds if missing
        : validatedData.appointmentTime
      : validatedData.appointmentTime;
    
    const insertData: AppointmentInsert = {
      name: validatedData.name,
      email: validatedData.email,
      appointment_date: validatedData.appointmentDate,
      appointment_time: timeFormatted,
      status: "pending",
    };

    // Get Supabase client - will throw if not configured
    let supabase;
    try {
      supabase = getSupabaseClient();
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to initialize Supabase client",
      };
    }

    // Check if slot is still available
    const slotsResult = await getAvailableSlots(validatedData.appointmentDate);
    if (!slotsResult.success || !slotsResult.slots?.includes(validatedData.appointmentTime)) {
      return {
        success: false,
        error: "This time slot is no longer available. Please select another time.",
      };
    }

    // Insert into Supabase
    const { data: insertedData, error } = await supabase
      .from("appointments")
      .insert(insertData)
      .select("id")
      .single();

    if (error) {
      // Log full error details for debugging
      console.error("Error submitting appointment:", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
        fullError: error,
      });
      
      // Provide more detailed error message
      let errorMessage = "Failed to submit appointment";
      
      if (error.message) {
        errorMessage = error.message;
      } else if (error.code) {
        // Handle specific error codes
        if (error.code === "42501") {
          errorMessage = "Permission denied. Please contact support if this issue persists.";
        } else if (error.code === "23505") {
          errorMessage = "This time slot is already booked. Please select another time.";
        } else if (error.code === "23503") {
          errorMessage = "Invalid data provided. Please check your information and try again.";
        } else if (error.code === "23514") {
          errorMessage = "Invalid data format. Please check your information and try again.";
        } else {
          errorMessage = `Database error (${error.code}): ${error.details || error.hint || "Unknown error"}`;
        }
      } else if (error.details) {
        errorMessage = error.details;
      } else if (error.hint) {
        errorMessage = error.hint;
      }
      
      return {
        success: false,
        error: errorMessage,
      };
    }

    if (!insertedData || !insertedData.id) {
      return {
        success: false,
        error: "Appointment was created but no ID was returned. Please verify the appointment was saved.",
      };
    }

    return {
      success: true,
      id: insertedData?.id,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors.map((e) => e.message).join(", "),
      };
    }

    // Log the full error for debugging
    console.error("Unexpected error submitting appointment:", error);
    
    // Provide a more detailed error message
    let errorMessage = "An unexpected error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "object" && error !== null) {
      // Try to extract meaningful information from the error object
      const errorObj = error as Record<string, unknown>;
      if (errorObj.message && typeof errorObj.message === "string") {
        errorMessage = errorObj.message;
      } else if (errorObj.toString && typeof errorObj.toString === "function") {
        errorMessage = errorObj.toString();
      }
    }
    
    return {
      success: false,
      error: errorMessage,
    };
  }
}

/**
 * Get all appointments (for admin/dashboard)
 * @param date - Optional date filter (YYYY-MM-DD)
 * @returns Promise with appointments list
 */
export async function getAppointments(date?: string): Promise<{
  success: boolean;
  appointments?: Appointment[];
  error?: string;
}> {
  try {
    const supabase = getSupabaseClient();

    let query = supabase
      .from("appointments")
      .select("*")
      .order("appointment_date", { ascending: true })
      .order("appointment_time", { ascending: true });

    if (date) {
      query = query.eq("appointment_date", date);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching appointments:", error);
      return {
        success: false,
        error: error.message || "Failed to fetch appointments",
      };
    }

    return {
      success: true,
      appointments: data || [],
    };
  } catch (error) {
    console.error("Unexpected error fetching appointments:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}


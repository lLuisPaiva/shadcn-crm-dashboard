import { getSupabaseClient } from "./client";
import { z } from "zod";

// Zod schema for quote validation
export const QuoteSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contact: z.string().min(1, "Contact information is required"),
  integrationType: z.string().optional(),
  systemsCount: z.string().optional(),
  usersCount: z.string().optional(),
  specificNeeds: z.string().optional(),
  timeline: z.string().optional(),
});

export type QuoteData = z.infer<typeof QuoteSchema>;

export interface QuoteInsert {
  company_name: string;
  contact: string;
  integration_type?: string | null;
  systems_count?: string | null;
  users_count?: string | null;
  specific_needs?: string | null;
  timeline?: string | null;
}

/**
 * Submit a quote request to Supabase
 * @param data - Quote data from the form
 * @returns Promise with success status and optional error message
 */
export async function submitQuote(data: QuoteData): Promise<{
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
    const validatedData = QuoteSchema.parse(data);

    // Transform to database format
    const insertData: QuoteInsert = {
      company_name: validatedData.companyName,
      contact: validatedData.contact,
      integration_type: validatedData.integrationType || null,
      systems_count: validatedData.systemsCount || null,
      users_count: validatedData.usersCount || null,
      specific_needs: validatedData.specificNeeds || null,
      timeline: validatedData.timeline || null,
    };

    // Get Supabase client (will throw if not configured)
    const supabase = getSupabaseClient();

    // Insert into Supabase
    const { data: insertedData, error } = await supabase
      .from("quotes")
      .insert(insertData)
      .select("id")
      .single();

    if (error) {
      console.error("Error submitting quote:", error);
      return {
        success: false,
        error: error.message || "Failed to submit quote",
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

    console.error("Unexpected error submitting quote:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}


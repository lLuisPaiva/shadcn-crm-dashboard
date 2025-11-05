"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calendar, Clock, Video, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/context";
import { getAvailableSlots } from "@/lib/supabase/appointments";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface ScheduleCalendarProps {
  onSlotSelect: (date: string, time: string) => void;
  selectedDate?: string;
  selectedTime?: string;
  onTimeSlotsReady?: () => void;
}

// Generate all possible time slots (9 AM to 6 PM, 30 min intervals)
function generateAllTimeSlots(): string[] {
  const slots: string[] = [];
  for (let hour = 9; hour < 18; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      slots.push(timeString);
    }
  }
  return slots;
}

// Get calendar weeks (next 2-3 weeks) organized as a calendar grid
function getCalendarWeeks(isPT: boolean): Array<Array<{ date: Date; label: string; weekday: string; isAvailable: boolean; isToday: boolean } | null>> {
  const weeks: Array<Array<{ date: Date; label: string; weekday: string; isAvailable: boolean; isToday: boolean } | null>> = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const dayNames = isPT 
    ? ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = isPT
    ? ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Get the first day of the first week (Sunday)
  const startDate = new Date(today);
  const dayOfWeek = startDate.getDay(); // 0 = Sunday, 6 = Saturday
  startDate.setDate(startDate.getDate() - dayOfWeek); // Go back to Sunday
  
  // Generate 3 weeks (21 days)
  for (let week = 0; week < 3; week++) {
    const weekDays: Array<{ date: Date; label: string; weekday: string; isAvailable: boolean; isToday: boolean } | null> = [];
    
    for (let day = 0; day < 7; day++) {
      const date = new Date(startDate);
      const daysToAdd = (week * 7) + day;
      date.setDate(startDate.getDate() + daysToAdd);
      
      const dateStr = date.toISOString().split("T")[0];
      const todayStr = today.toISOString().split("T")[0];
      const isToday = dateStr === todayStr;
      
      // Only weekdays (Monday-Friday) are available
      const isWeekday = date.getDay() >= 1 && date.getDay() <= 5;
      // Only future dates or today
      const isFutureOrToday = date >= today;
      const isAvailable = isWeekday && isFutureOrToday;
      
      weekDays.push({
        date,
        label: `${date.getDate()} ${monthNames[date.getMonth()]}`,
        weekday: dayNames[date.getDay()],
        isAvailable,
        isToday,
      });
    }
    
    weeks.push(weekDays);
  }
  
  return weeks;
}

export function ScheduleCalendar({ onSlotSelect, selectedDate, selectedTime, onTimeSlotsReady }: ScheduleCalendarProps) {
  const { language } = useLanguage();
  const isPT = language === "pt";
  
  const [selectedDay, setSelectedDay] = useState<string | undefined>(selectedDate);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const timeSlotsRef = useRef<HTMLDivElement>(null);
  const weeks = getCalendarWeeks(isPT);
  const allTimeSlots = generateAllTimeSlots();
  
  const weekdayHeaders = isPT 
    ? ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Fetch available slots when a date is selected
  useEffect(() => {
    if (selectedDay) {
      fetchAvailableSlots(selectedDay);
    } else {
      setAvailableSlots([]);
    }
  }, [selectedDay]);

  // Auto-scroll to time slots when they are loaded
  useEffect(() => {
    if (!loadingSlots && selectedDay && availableSlots.length > 0) {
      // Small delay to ensure DOM is updated, then notify parent to scroll
      setTimeout(() => {
        if (onTimeSlotsReady) {
          onTimeSlotsReady();
        } else if (timeSlotsRef.current) {
          // Fallback: try scrollIntoView if no callback provided
          timeSlotsRef.current.scrollIntoView({ 
            behavior: "smooth", 
            block: "start",
            inline: "nearest"
          });
        }
      }, 150);
    }
  }, [loadingSlots, selectedDay, availableSlots.length, onTimeSlotsReady]);

  const fetchAvailableSlots = async (date: string) => {
    setLoadingSlots(true);
    try {
      const result = await getAvailableSlots(date);
      if (result.success && result.slots) {
        setAvailableSlots(result.slots);
      } else {
        // If error, show all slots as available (fallback)
        setAvailableSlots(allTimeSlots);
      }
    } catch (error) {
      console.error("Error fetching slots:", error);
      // Fallback: show all slots as available
      setAvailableSlots(allTimeSlots);
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleDaySelect = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0];
    setSelectedDay(dateStr);
    // Don't call onSlotSelect when just changing date - wait for time selection
  };

  const handleTimeSelect = (time: string) => {
    if (selectedDay) {
      onSlotSelect(selectedDay, time);
    }
  };

  // Create time slots with availability info
  const timeSlots: TimeSlot[] = allTimeSlots.map((time) => ({
    time,
    available: availableSlots.includes(time),
  }));

  return (
    <div className="space-y-6">
      {/* Calendar Section */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <Calendar className="text-primary h-5 w-5" />
          <h3 className="text-lg font-semibold">
            {isPT ? "Selecione uma data" : "Select a date"}
          </h3>
        </div>
        
        {/* Calendar Grid */}
        <div className="rounded-lg border">
          {/* Weekday Headers */}
          <div className="grid grid-cols-7 border-b">
            {weekdayHeaders.map((day, index) => {
              const isWeekend = index === 0 || index === 6; // Sunday or Saturday
              return (
                <div
                  key={day}
                  className={cn(
                    "border-r p-2 text-center text-sm font-semibold last:border-r-0",
                    isWeekend && "bg-muted/50 text-muted-foreground"
                  )}
                >
                  {day}
                </div>
              );
            })}
          </div>
          
          {/* Calendar Weeks */}
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 border-b last:border-b-0">
              {week.map((day, dayIndex) => {
                if (!day) return null;
                
                const dateStr = day.date.toISOString().split("T")[0];
                const isSelected = selectedDay === dateStr;
                const isWeekend = dayIndex === 0 || dayIndex === 6;
                
                return (
                  <div
                    key={dateStr}
                    className={cn(
                      "border-r p-1 last:border-r-0",
                      isWeekend && "bg-muted/30"
                    )}
                  >
                    <Button
                      variant={isSelected ? "default" : "outline"}
                      disabled={!day.isAvailable}
                      className={cn(
                        "h-auto w-full flex-col gap-1 py-2 text-xs",
                        !day.isAvailable && "opacity-50 cursor-not-allowed",
                        day.isToday && !isSelected && !isWeekend && "border-primary/50 bg-primary/5",
                        isWeekend && "bg-muted/50 text-muted-foreground"
                      )}
                      onClick={() => day.isAvailable && handleDaySelect(day.date)}
                    >
                      <span className="text-[10px] font-medium opacity-70">{day.weekday}</span>
                      <span className="text-sm font-semibold">{day.date.getDate()}</span>
                    </Button>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Time Slots Section */}
      {selectedDay && (
        <div ref={timeSlotsRef}>
          <div className="mb-4 flex items-center gap-2">
            <Clock className="text-primary h-5 w-5" />
            <h3 className="text-lg font-semibold">
              {isPT ? "Selecione um horário" : "Select a time"}
            </h3>
          </div>
          {loadingSlots ? (
            <div className="flex items-center justify-center gap-2 py-8">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm text-muted-foreground">
                {isPT ? "A verificar disponibilidade..." : "Checking availability..."}
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime === slot.time;
                return (
                  <Button
                    key={slot.time}
                    variant={isSelected ? "default" : "outline"}
                    size="sm"
                    disabled={!slot.available}
                    className={cn(
                      !slot.available && "opacity-50 cursor-not-allowed"
                    )}
                    onClick={() => handleTimeSelect(slot.time)}
                  >
                    {slot.time}
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Google Meet Info */}
      {selectedDay && selectedTime && (
        <div className="border-primary/20 bg-primary/5 rounded-lg border p-4">
          <div className="flex items-start gap-3">
            <Video className="text-primary mt-0.5 h-5 w-5 shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium">
                {isPT 
                  ? "A reunião será realizada via Google Meet"
                  : "The meeting will be held via Google Meet"}
              </p>
              <p className="text-muted-foreground mt-1 text-xs">
                {isPT
                  ? "O link do Google Meet será enviado por email após a confirmação."
                  : "The Google Meet link will be sent by email after confirmation."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseInstance: SupabaseClient | null = null;

/**
 * Get or create Supabase client instance
 * Uses lazy initialization to avoid errors when env vars are not set
 */
export function getSupabaseClient(): SupabaseClient {
  if (supabaseInstance) {
    return supabaseInstance;
  }

  // Get and trim environment variables to handle any whitespace issues
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!supabaseUrl || !supabaseAnonKey) {
    // Throw error in runtime if not configured
    // This allows the app to build but will fail when actually used
    throw new Error(
      "Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables."
    );
  }

  // Validate URL format
  try {
    const url = new URL(supabaseUrl);
    if (!url.protocol.startsWith("http")) {
      throw new Error(`Invalid Supabase URL protocol: ${url.protocol}. Must be http:// or https://`);
    }
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        `Invalid Supabase URL format: "${supabaseUrl}". Must be a valid HTTP or HTTPS URL.`
      );
    }
    throw error;
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
}


import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log(
	"Service Role Key:",
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "Available" : "Not Available",
);

if (!supabaseUrl || !supabaseServiceRoleKey) {
	throw new Error("Missing Supabase URL or Key in environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

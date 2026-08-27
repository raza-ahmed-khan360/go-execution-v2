import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Make sure to set these in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Only initialize if we have the keys (prevents build errors if empty)
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export async function POST(request: Request) {
  try {
    if (!supabase) {
      return NextResponse.json({ error: "Supabase not configured." }, { status: 500 });
    }

    const body = await request.json();
    const { name, role, quote, metric, metricLabel } = body;

    if (!name || !role || !quote) {
      return NextResponse.json({ error: "Name, role, and quote are required." }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("testimonials")
      .insert([
        {
          name,
          role,
          quote,
          metric: metric || null,
          metric_label: metricLabel || null,
          approved: false // Requires admin approval to show on homepage
        }
      ]);

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Review API Error:", error);
    return NextResponse.json({ error: error.message || "Server Error" }, { status: 500 });
  }
}

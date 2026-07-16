"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function submitQuoteRequest(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !phone) {
    redirect("/?status=missing#quote");
  }

  const supabase = createClient();
  const { error } = await supabase.from("quote_requests").insert({
    name,
    phone,
    email: email || null,
    address: address || null,
    service: service || null,
    message: message || null,
  });

  if (error) {
    console.error("Quote request failed:", error.message);
    redirect("/?status=error#quote");
  }

  redirect("/?status=success#quote");
}

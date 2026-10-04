import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  organisation: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(6).max(40),
  eventType: z.string().trim().max(80).optional().default(""),
  eventDate: z.string().trim().max(40).optional().default(""),
  delegates: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => LeadSchema.parse(data))
  .handler(async ({ data }) => {
    const endpoint = process.env["GOOGLE_SHEETS_WEBHOOK_URL"];
    if (!endpoint) {
      return {
        ok: false as const,
        error: "The enquiry sheet is not connected yet. Please call or WhatsApp us instead.",
      };
    }

    const payload = {
      timestamp: new Date().toISOString(),
      ...data,
      source: "eventtribe-landing",
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return { ok: false as const, error: "We could not save your enquiry. Please try again." };
    }

    return { ok: true as const };
  });

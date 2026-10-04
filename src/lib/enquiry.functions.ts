import { createServerFn } from '@tanstack/react-start';
import { getRequestHeader } from '@tanstack/react-start/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(6).max(40),
  eventType: z.string().trim().min(1).max(100),
  eventDate: z.string().trim().max(100),
  venueCity: z.string().trim().max(200),
  attendees: z.string().trim().max(40),
  services: z.array(z.string().max(60)).max(8),
  budget: z.string().trim().max(100),
  message: z.string().trim().max(3000),
  website: z.string().max(200),
});

const attempts = new Map<string, number[]>();
export const submitEnquiry = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => schema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true as const };
    const ip = getRequestHeader('cf-connecting-ip') || getRequestHeader('x-forwarded-for')?.split(',')[0] || 'unknown';
    const now = Date.now();
    const recent = (attempts.get(ip) || []).filter(t => now - t < 60 * 60 * 1000);
    if (recent.length >= 5) return { ok: false as const, error: 'Too many enquiries. Please call or WhatsApp us.' };
    attempts.set(ip, [...recent, now]);
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { error } = await supabaseAdmin.from('enquiries').insert({
      name: data.name, email: data.email, phone: data.phone, event_type: data.eventType,
      event_date: data.eventDate || null, venue_city: data.venueCity || null,
      attendees: data.attendees || null, services: data.services,
      budget: data.budget || null, message: data.message || null,
    });
    if (error) {
      console.error('Enquiry storage failed:', error.message);
      return { ok: false as const, error: 'Your enquiry could not be saved. Please call or WhatsApp us.' };
    }
    return { ok: true as const };
  });

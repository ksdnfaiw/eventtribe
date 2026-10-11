declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    lintrk?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  } else {
    window.dataLayer.push(["event", name, params]);
  }

  // Also bridge to Meta Pixel custom event if present
  if (typeof window.fbq === "function") {
    try {
      window.fbq("trackCustom", name, params);
    } catch {
      // ignore
    }
  }

  // Log in development for testing
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event] ${name}:`, params);
  }
}

export function trackWhatsAppClick(location: string) {
  trackEvent("whatsapp_click", { location, timestamp: new Date().toISOString() });
}

export function trackRiderGuideDownload(source: string, extra?: Record<string, unknown>) {
  trackEvent("rider_guide_download", { source, ...extra, timestamp: new Date().toISOString() });
}

export function trackLeadFormSubmit(formName: string, extra?: Record<string, unknown>) {
  trackEvent("lead_form_submit", { form_name: formName, ...extra, timestamp: new Date().toISOString() });
}

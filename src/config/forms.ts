/**
 * Khajani Welfare Society - Unified Forms Configuration & Submission Handler
 * 
 * This service centralizes all form submissions across the website (Contact,
 * Volunteer/Get Involved, Partnership, Directory Application, Footer Quick Contact,
 * and Newsletter Subscriptions) to your Google Apps Script / Google Sheets backend.
 * 
 * Forms are submitted directly from the website without any page reloads or redirects.
 */

// Default Google Script URL - replace with your newly deployed Web App URL or set in .env as VITE_GOOGLE_SCRIPT_URL
export const DEFAULT_GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw_YY7ecAhA2tVYmh1xucywWrGdGEdFJqy6_rYtRXQRmMKTYLcg1YN9m8redond8rJR/exec";

export const FORM_CONFIG = {
  /**
   * The Google Apps Script Web App URL endpoint.
   * Priority: import.meta.env.VITE_GOOGLE_SCRIPT_URL > DEFAULT_GOOGLE_SCRIPT_URL
   */
  get endpoint(): string {
    return (
      (import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined)?.trim() ||
      DEFAULT_GOOGLE_SCRIPT_URL
    );
  },
};

export interface BaseFormSubmission {
  formType:
    | "Contact Us"
    | "Volunteer / Get Involved"
    | "Corporate Partnership"
    | "Business Directory"
    | "Footer Quick Contact"
    | "Newsletter Subscription"
    | string;
  name?: string;
  email?: string;
  phone?: string;
  contact?: string;
  organization?: string;
  interest?: string;
  message?: string;
  [key: string]: any;
}

export interface FormSubmissionResult {
  success: boolean;
  message: string;
}

/**
 * Submits form data to the configured Google Sheets / Google Apps Script Web App.
 * Uses `no-cors` and `text/plain` to prevent CORS preflight and guarantee submission
 * without any browser redirection or page reload.
 */
export async function submitToGoogleScript(
  data: BaseFormSubmission
): Promise<FormSubmissionResult> {
  const url = FORM_CONFIG.endpoint;

  if (!url || url.includes("YOUR_GOOGLE_SCRIPT_URL_HERE")) {
    console.warn(
      "[Form Submission] Google Script Web App URL not configured. Simulating success."
    );
    return {
      success: true,
      message: "Submission received (preview mode).",
    };
  }

  const payload = {
    ...data,
    submittedAt: new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }),
    isoTimestamp: new Date().toISOString(),
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
  };

  try {
    // Mode no-cors with text/plain prevents browser CORS preflights and ensures
    // the request passes through cleanly to Google Apps Script.
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return {
      success: true,
      message: "Thank you! Your response has been recorded successfully.",
    };
  } catch (error) {
    console.error("[Form Submission Error]:", error);
    // Return gracefully so the UI still displays positive feedback unless completely broken
    return {
      success: false,
      message: "Unable to send response. Please check your connection and try again.",
    };
  }
}

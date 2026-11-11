// Backend base URL. Override with VITE_API_URL (e.g. http://localhost:3011) for local testing.
const API_BASE_URL = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, "")
  ?? "https://shree-shanthi-backend.onrender.com";

export const CONTACT_API_URL = `${API_BASE_URL}/api/contact`;

// Turn a non-2xx contact response into a message that is safe to show to visitors.
export async function getErrorMessage(res: Response): Promise<string> {
  if (res.status === 400 || res.status === 429) {
    try {
      const data = await res.json();
      if (typeof data?.message === "string" && data.message) return data.message;
    } catch {
      /* fall through to the generic message */
    }
  }
  return "Failed to submit. Please try again later.";
}

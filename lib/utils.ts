export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPhone(phone: string) {
  return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
}

export function createWhatsAppHref(message: string) {
  return `https://wa.me/919810842481?text=${encodeURIComponent(message)}`;
}

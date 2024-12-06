import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateTimeString: string) {
  // Parse the ISO date string into a Date object
  const date = dateTimeString && parseISO(dateTimeString);

  if (!date) {
    return dateTimeString;
  }

  // Format the date using the French locale
  return format(date, "EEEE, d MMMM yyyy 'à' HH:mm", { locale: fr });
}

export const formatShortDate = (dateTimeString: string) => {
  const date = dateTimeString && parseISO(dateTimeString);

  if (!date) {
    return dateTimeString;
  }

  return format(date, "dd/MM/yyyy", { locale: fr });
};

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export function generateUniqueTicketNumber(): string {
  // Parse the date string into a Date object
  const date = new Date();

  // Format the date in the desired format
  const formattedDate = format(date, "yyyy-MM-dd");

  // Generate 12 random digits
  const randomDigits = Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * 10)
  ).join("");

  // Combine all parts to form the ticket number
  return `rntc/reservation/${randomDigits}`;
}

export const extractIdOnYoutubeUrl = (url: string) => {
  // Extract the video ID from the YouTube URL: youtube.com/v=VIDEO_ID and youtu.be/VIDEO_ID
  const videoId = url.split("v=")[1] || url.split("youtu.be/")[1];
  return videoId;
};

export function cleanPhoneNumber(numero: string): string {
  // Vérifie si le numéro commence par '0'
  if (numero.startsWith("0")) {
    return numero.slice(1);
  }
  // Vérifie si le numéro commence par '+243'
  else if (numero.startsWith("+243")) {
    return numero.slice(4);
  }
  // Vérifie si le numéro commence par '243'
  else if (numero.startsWith("243")) {
    return numero.slice(3);
  }
  // Si aucun des cas ne correspond, retourne le numéro tel quel
  return numero;
}

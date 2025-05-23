export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function slugify(text: string): string {
  return text
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing spaces
    .replace(/[^\w\s-]/g, "") // Remove any non-word characters except spaces and dashes
    .replace(/\s+/g, "-") // Replace one or more spaces with a single dash
    .replace(/-+/g, "-") // Replace multiple consecutive dashes with a single dash
    .replace(/^-+/, "") // Remove any leading dashes
    .replace(/-+$/, "");
}
export function deslugify(slug: any) {
  return slug.replace(/-/g, " "); // Replace all '-' with spaces
}

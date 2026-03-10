type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]
  | Record<string, unknown>;

function toVal(val: ClassValue): string {
  if (!val) return "";
  if (typeof val === "string") return val;
  if (typeof val === "number") return String(val);
  if (Array.isArray(val)) return val.map(toVal).filter(Boolean).join(" ");
  if (typeof val === "object") {
    return Object.entries(val)
      .filter(([, v]) => Boolean(v))
      .map(([k]) => k)
      .join(" ");
  }
  return "";
}

export function cn(...classes: ClassValue[]) {
  return classes.map(toVal).filter(Boolean).join(" ");
}

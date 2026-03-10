import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  /**
   * When true, uses the lighter amber palette for dark backgrounds.
   * When false, uses the default darker amber palette.
   */
  light?: boolean;
};

/**
 * Shared section label pill used across marketing surfaces.
 * Keeps typography and spacing consistent while allowing light/dark variants.
 */
export function SectionLabel({ children, light = false }: SectionLabelProps) {
  const baseClasses =
    "inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em]";
  const colorClasses = light ? "text-amber-300" : "text-amber-700";
  const barColorClasses = light ? "bg-amber-400/50" : "bg-amber-500/50";

  return (
    <span className={`${baseClasses} ${colorClasses}`}>
      <span aria-hidden className={`inline-block h-px w-6 ${barColorClasses}`} />
      {children}
    </span>
  );
}


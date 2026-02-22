/**
 * Site footer. Add links and copyright here during design phase.
 */
export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-foreground/70">
        © {new Date().getFullYear()} Xencus. All rights reserved.
      </div>
    </footer>
  );
}

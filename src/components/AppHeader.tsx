import { Bell, Phone, Plus } from "lucide-react";

export function AppHeader({
  title = "Lona",
  showLogo = true,
  showPhone = true,
}: {
  title?: string;
  showLogo?: boolean;
  showPhone?: boolean;
}) {
  return (
    <header className="flex items-center justify-between px-4 pt-3 pb-2">
      {showLogo ? (
        <h1 className="text-3xl text-primary" style={{ fontFamily: "var(--font-display)" }}>
          {title}
        </h1>
      ) : (
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          {title} <span className="h-2 w-2 rounded-full bg-primary inline-block" />
        </h1>
      )}
      <div className="flex items-center gap-4 text-foreground">
        <Bell className="h-5 w-5" />
        {showPhone && <Phone className="h-5 w-5" />}
        <Plus className="h-6 w-6" />
      </div>
    </header>
  );
}

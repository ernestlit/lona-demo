import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col max-w-[480px] mx-auto">
      <main className="flex-1 pb-2">{children}</main>
      <BottomNav />
    </div>
  );
}

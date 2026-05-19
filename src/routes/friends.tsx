import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AppHeader } from "@/components/AppHeader";
import { stories } from "@/lib/mock-data";
import { UserPlus } from "lucide-react";

export const Route = createFileRoute("/friends")({
  component: Friends,
  head: () => ({ meta: [{ title: "Lona — Friends" }] }),
});

function Friends() {
  return (
    <AppShell>
      <AppHeader title="Friends" showLogo={false} showPhone={false} />
      <div className="px-4 space-y-3">
        {stories.map((s) => (
          <div key={s.username} className="flex items-center gap-3 py-2">
            <img src={s.avatar} alt="" className="h-12 w-12 rounded-full bg-muted" />
            <div className="flex-1">
              <div className="font-semibold">{s.username}</div>
              <div className="text-xs text-muted-foreground">Suggested for you</div>
            </div>
            <button className="flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-sm">
              <UserPlus className="h-4 w-4" /> Follow
            </button>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AppHeader } from "@/components/AppHeader";
import { Settings } from "lucide-react";

export const Route = createFileRoute("/profile")({
  component: Profile,
  head: () => ({ meta: [{ title: "Lona — Profile" }] }),
});

function Profile() {
  return (
    <AppShell>
      <AppHeader title="Profile" showLogo={false} showPhone={false} />
      <div className="flex flex-col items-center px-4 pt-4">
        <img
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=me"
          alt=""
          className="h-24 w-24 rounded-full bg-muted ring-2 ring-primary/40"
        />
        <h2 className="mt-3 text-xl font-semibold">Your Name</h2>
        <p className="text-sm text-muted-foreground">@username</p>
        <p className="mt-3 text-sm text-center text-foreground/80 max-w-xs">
          Living out loud on Lona. Sharing moments, finding people.
        </p>
        <div className="mt-4 flex gap-6 text-sm">
          <div className="text-center"><div className="font-semibold text-base">128</div><div className="text-muted-foreground">Posts</div></div>
          <div className="text-center"><div className="font-semibold text-base">2.4k</div><div className="text-muted-foreground">Followers</div></div>
          <div className="text-center"><div className="font-semibold text-base">312</div><div className="text-muted-foreground">Following</div></div>
        </div>
        <div className="mt-5 flex gap-2 w-full">
          <button className="flex-1 rounded-full bg-muted py-2 text-sm font-medium">Edit profile</button>
          <button className="flex-1 rounded-full bg-muted py-2 text-sm font-medium">Share profile</button>
          <button className="rounded-full bg-muted h-9 w-9 flex items-center justify-center">
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-0.5 mt-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <img
            key={i}
            src={`https://picsum.photos/seed/lona${i}/300/300`}
            alt=""
            className="aspect-square object-cover"
          />
        ))}
      </div>
    </AppShell>
  );
}

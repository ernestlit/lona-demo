import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AppHeader } from "@/components/AppHeader";
import { stories } from "@/lib/mock-data";

export const Route = createFileRoute("/inbox")({
  component: Inbox,
  head: () => ({ meta: [{ title: "Lona — Inbox" }] }),
});

const messages = [
  "Sent you a photo",
  "Liked your post",
  "Started following you",
  "Replied to your comment",
  "Mentioned you in a thread",
  "Sent you a voice note",
  "Reacted ❤️ to your reply",
  "Shared a reel with you",
];

function Inbox() {
  return (
    <AppShell>
      <AppHeader title="Inbox" showLogo={false} showPhone={false} />
      <div className="px-4 space-y-1">
        {stories.map((s, i) => (
          <div key={s.username} className="flex items-center gap-3 py-3 border-b border-border/50">
            <img src={s.avatar} alt="" className="h-12 w-12 rounded-full bg-muted" />
            <div className="flex-1 min-w-0">
              <div className="font-semibold truncate">{s.username}</div>
              <div className="text-sm text-muted-foreground truncate">{messages[i % messages.length]}</div>
            </div>
            <div className="text-xs text-muted-foreground">{i + 1}h</div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

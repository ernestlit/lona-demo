import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AppHeader } from "@/components/AppHeader";
import { FeedTabs } from "@/components/FeedTabs";
import { PostCard } from "@/components/PostCard";
import { explorePosts } from "@/lib/mock-data";

export const Route = createFileRoute("/explore")({
  component: Explore,
  head: () => ({ meta: [{ title: "Lona — Explore" }] }),
});

function Explore() {
  return (
    <AppShell>
      <AppHeader title="Explore" showLogo={false} showPhone={false} />
      <FeedTabs tabs={["Popular", "Live", "Reels"]} defaultIndex={0} />
      <div>
        {explorePosts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </AppShell>
  );
}

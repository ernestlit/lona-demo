import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { AppHeader } from "@/components/AppHeader";
import { StoryRail } from "@/components/StoryRail";
import { SearchBar } from "@/components/SearchBar";
import { FeedTabs } from "@/components/FeedTabs";
import { PostCard } from "@/components/PostCard";
import { posts } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [{ title: "Lona — Home" }] }),
});

function Index() {
  return (
    <AppShell>
      <AppHeader />
      <StoryRail />
      <SearchBar />
      <FeedTabs tabs={["Following", "For You"]} defaultIndex={1} />
      <div>
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </AppShell>
  );
}

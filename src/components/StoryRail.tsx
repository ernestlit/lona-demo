import { stories } from "@/lib/mock-data";

export function StoryRail() {
  return (
    <div className="flex gap-4 overflow-x-auto no-scrollbar px-4 py-3">
      {stories.map((s) => (
        <div key={s.username} className="flex flex-col items-center min-w-[60px]">
          <div className="h-14 w-14 rounded-full bg-muted overflow-hidden ring-1 ring-border">
            <img src={s.avatar} alt={s.username} className="h-full w-full object-cover" />
          </div>
          <span className="mt-1 text-xs text-foreground/90 truncate max-w-[60px]">
            {s.username}
          </span>
        </div>
      ))}
    </div>
  );
}

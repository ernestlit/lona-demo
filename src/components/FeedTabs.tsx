import { useState } from "react";

export function FeedTabs({ tabs, defaultIndex = 1 }: { tabs: string[]; defaultIndex?: number }) {
  const [active, setActive] = useState(defaultIndex);
  return (
    <div className="flex items-center gap-2 px-4 pt-2 pb-3">
      {tabs.map((t, i) => (
        <button
          key={t}
          onClick={() => setActive(i)}
          className="flex items-center gap-2 rounded-full bg-muted/60 pl-1.5 pr-4 py-1.5"
        >
          <span
            className={`h-3 w-3 rounded-full ${active === i ? "bg-primary" : "bg-muted-foreground/40"}`}
          />
          <span className="text-sm text-foreground">{t}</span>
        </button>
      ))}
    </div>
  );
}

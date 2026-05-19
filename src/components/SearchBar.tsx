import { Play, Plus, ShoppingCart } from "lucide-react";

export function SearchBar({ rightIcon = "plus" }: { rightIcon?: "plus" | "cart" }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2">
      <div className="flex-1 flex items-center gap-3 rounded-full bg-muted/60 px-4 py-2.5">
        <span className="h-4 w-4 rounded-full border-2 border-primary inline-block" />
        <span className="text-muted-foreground text-sm">Ask or Search anything</span>
      </div>
      <button className="h-10 w-10 rounded-full bg-muted/60 flex items-center justify-center">
        <Play className="h-4 w-4 text-primary fill-primary" />
      </button>
      <button className="h-10 w-10 rounded-full bg-muted/60 flex items-center justify-center">
        {rightIcon === "plus" ? (
          <Plus className="h-5 w-5 text-primary" />
        ) : (
          <ShoppingCart className="h-5 w-5 text-primary" />
        )}
      </button>
    </div>
  );
}

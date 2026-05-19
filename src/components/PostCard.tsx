import { BadgeCheck, Globe2, Lock, MoreHorizontal, ThumbsUp, MessageCircle, BarChart2, VolumeX } from "lucide-react";
import type { Post } from "@/lib/mock-data";

function Tag({ label, emoji }: { label: string; emoji?: string }) {
  return (
    <span className="inline-flex items-center gap-1 italic text-xs bg-muted/70 text-foreground/90 rounded-full px-2.5 py-1">
      {emoji && <span className="not-italic">{emoji}</span>}
      {label}
    </span>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="pt-4">
      {/* Header */}
      <div className="flex items-start gap-3 px-4">
        <div className="h-10 w-10 rounded-full bg-muted overflow-hidden shrink-0">
          <img
            src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${post.author}`}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[15px]">{post.author}</span>
            {post.verified && <BadgeCheck className="h-4 w-4 text-emerald-500 fill-emerald-500/20" />}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>{post.date}</span>
            <span>·</span>
            {post.privacy === "public" ? <Globe2 className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
            {post.username && (
              <>
                <span>·</span>
                <span>{post.username}</span>
              </>
            )}
          </div>
        </div>
        <button className="text-muted-foreground p-1">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Body: tags + content */}
      <div className="flex gap-3 px-4 mt-3">
        <div className="flex flex-col items-center gap-2 min-w-[60px]">
          {post.tags.map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              <Tag label={t.label} emoji={t.emoji} />
            </div>
          ))}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[15px] text-foreground/95 mb-3">{post.text}</p>
          {post.media && (
            <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[3/4]">
              <img
                src={post.media.src}
                alt=""
                className="h-full w-full object-cover"
              />
              {post.media.type === "video" && (
                <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/60 flex items-center justify-center">
                  <VolumeX className="h-4 w-4 text-white" />
                </button>
              )}
              {post.media.duration && (
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium drop-shadow">
                  {post.media.duration} | {post.media.credit}
                </div>
              )}
              {!post.media.duration && post.media.credit && (
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium drop-shadow">
                  {post.media.credit}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 mt-3">
        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
          {post.showAddComment ? (
            <span>Add a comment</span>
          ) : post.likedBy ? (
            <>
              <ThumbsUp className="h-3.5 w-3.5 text-primary fill-primary" />
              <span>· {post.likedBy}, + {post.likedByCount} more</span>
            </>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1.5">
            <ThumbsUp className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm">{post.likes}</span>
          </button>
          <button className="flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1.5">
            <MessageCircle className="h-4 w-4 text-primary fill-primary/30" />
            <span className="text-sm">{post.comments}</span>
          </button>
          <button className="flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1.5">
            <BarChart2 className="h-4 w-4 text-primary" />
            <span className="text-sm">{post.votes}</span>
          </button>
        </div>
      </div>
      <div className="mt-4 h-px bg-border/60" />
    </article>
  );
}

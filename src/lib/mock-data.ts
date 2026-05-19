export type Story = {
  username: string;
  avatar: string;
};

export type Post = {
  id: string;
  author: string;
  verified?: boolean;
  privacy: "public" | "private";
  date: string;
  username?: string;
  tags: { label: string; emoji?: string }[];
  text: string;
  media?: { type: "image" | "video"; src: string; duration?: string; credit?: string };
  likes: number;
  comments: number;
  votes: number;
  likedBy?: string;
  likedByCount?: number;
  showAddComment?: boolean;
  song?: string;
};

const avatar = (seed: string) => `https://api.dicebear.com/9.x/avataaars/svg?seed=${seed}`;

export const stories: Story[] = [
  { username: "lauraha", avatar: avatar("laura") },
  { username: "kthomas", avatar: avatar("kthomas") },
  { username: "ijordan", avatar: avatar("ijordan") },
  { username: "maddoxc", avatar: avatar("maddox") },
  { username: "lawrenc", avatar: avatar("lawrenc") },
  { username: "edwards", avatar: avatar("edwards") },
  { username: "jennife", avatar: avatar("jennife") },
  { username: "bwest", avatar: avatar("bwest") },
];

export const posts: Post[] = [
  {
    id: "1",
    author: "Hannah Parsons",
    verified: true,
    privacy: "public",
    date: "01 May 2025",
    username: "@username",
    tags: [{ label: "model" }, { label: "people" }, { label: "evidence" }],
    text: "Watch social sure get. Even thought mate…",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=900&q=80",
      credit: "@laurahardy",
    },
    likes: 1,
    comments: 4,
    votes: 0,
    showAddComment: true,
  },
  {
    id: "2",
    author: "Melvin Davis",
    privacy: "public",
    date: "Invalid date",
    username: "@username",
    tags: [
      { label: "owner", emoji: "🍀" },
      { label: "simple" },
    ],
    text: "However key maintain him also friend com…",
    media: {
      type: "video",
      src: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=900&q=80",
      duration: "00:32",
      credit: "stewartelizabeth",
    },
    likes: 3,
    comments: 1,
    votes: 0,
    likedBy: "@tylerve",
    likedByCount: 4,
  },
  {
    id: "3",
    author: "Betty Park",
    privacy: "private",
    date: "Invalid date",
    tags: [
      { label: "less", emoji: "💡" },
      { label: "catch", emoji: "🚀" },
      { label: "word", emoji: "😂" },
      { label: "though", emoji: "🙂" },
    ],
    text: "While two much way raise. Rate a admini…",
    media: {
      type: "video",
      src: "https://images.unsplash.com/photo-1571266028243-d220c6a06d2e?w=900&q=80",
      duration: "00:32",
      credit: "crystal82",
    },
    likes: 5,
    comments: 4,
    votes: 0,
    likedBy: "@tylerve",
    likedByCount: 4,
  },
  {
    id: "4",
    author: "Lawrence Molina",
    privacy: "private",
    date: "Invalid date",
    tags: [
      { label: "again", emoji: "🍀" },
      { label: "ready", emoji: "😋" },
      { label: "than", emoji: "👍" },
      { label: "expert" },
      { label: "natural", emoji: "❤️" },
    ],
    text: "Certain gun place and sell order esta…",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&q=80",
      credit: "wguerrero",
    },
    likes: 7,
    comments: 5,
    votes: 0,
    likedBy: "@tylerve",
    likedByCount: 4,
  },
  {
    id: "5",
    author: "Steven Brown",
    verified: true,
    privacy: "private",
    date: "Invalid date",
    tags: [
      { label: "marriage" },
      { label: "soon" },
      { label: "law" },
      { label: "degree" },
      { label: "company" },
    ],
    text: "Growth third painting. Bar young level sta…",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=900&q=80",
      credit: "erinsmith",
    },
    likes: 5,
    comments: 3,
    votes: 0,
    showAddComment: true,
  },
];

export const explorePosts: Post[] = [
  {
    id: "e1",
    author: "Timothy Butler",
    privacy: "public",
    date: "01 May 2025",
    username: "@username",
    tags: [{ label: "their" }],
    text: "Head modern father authority forward. Bl…",
    media: {
      type: "video",
      src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80",
      duration: "00:32",
      credit: "@tinamorales",
    },
    likes: 2,
    comments: 4,
    votes: 0,
    showAddComment: true,
  },
  {
    id: "e2",
    author: "Mark Crosby",
    verified: true,
    privacy: "public",
    date: "02 May 2025",
    username: "@username",
    tags: [{ label: "doctor" }, { label: "support" }],
    text: "Building still owner anything writer. Drop …",
    likes: 0,
    comments: 0,
    votes: 0,
  },
];

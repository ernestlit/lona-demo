import { Link, useLocation } from "@tanstack/react-router";
import { Home, Users, Mail, Globe, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/friends", label: "Friends", icon: Users },
  { to: "/inbox", label: "Inbox", icon: Mail },
  { to: "/explore", label: "Explore", icon: Globe },
  { to: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav className="sticky bottom-0 z-30 bg-background border-t border-border">
      <ul className="flex items-center justify-around px-2 py-3">
        {items.map((it, i) => {
          const active = pathname === it.to;
          const Icon = it.icon;
          return (
            <li key={it.to} className="flex items-center">
              <Link to={it.to} className="flex items-center gap-2">
                <Icon className={`h-6 w-6 ${active ? "text-primary" : "text-muted-foreground"}`} />
                {active && <span className="text-primary font-medium">{it.label}</span>}
              </Link>
              {i === 0 && <span className="mx-3 h-5 w-px bg-border" />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

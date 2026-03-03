import Link from "next/link";
import { LayoutDashboard, FolderKanban, CheckSquare, Users, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { logout } from "@/actions/auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const links = [
    { href: "/", label: "דאשבורד", icon: LayoutDashboard },
    { href: "/projects", label: "פרויקטים", icon: FolderKanban },
    { href: "/tasks", label: "משימות", icon: CheckSquare },
    { href: "/resources", label: "משאבים", icon: Users },
    { href: "/settings", label: "הגדרות", icon: Settings },
];

export function Sidebar({ className }: { className?: string }) {
    return (
        <aside className={cn("w-64 bg-card border-e border-border h-full flex flex-col shadow-sm", className)}>
            <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3">
                    <Avatar className="h-11 w-11 border-2 border-primary/10 flex-shrink-0">
                        <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="משתמש" />
                        <AvatarFallback>מש</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col whitespace-nowrap overflow-hidden">
                        <span className="text-sm font-bold text-foreground truncate">מנהל בנייה</span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">אדמין ראשי</span>
                    </div>
                </div>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-1">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer",
                            link.href === "/"
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                    >
                        <link.icon className="w-5 h-5" />
                        {link.label}
                    </Link>
                ))}
            </nav>
            <div className="p-4 mt-auto border-t border-border flex flex-col gap-4">
                <form action={logout}>
                    <button type="submit" className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium transition-colors text-destructive hover:bg-destructive/10">
                        <LogOut className="w-5 h-5" />
                        יציאה מהמערכת
                    </button>
                </form>
                <p className="text-xs text-center text-muted-foreground">
                    גרסה 1.0.0
                </p>
            </div>
        </aside>
    );
}

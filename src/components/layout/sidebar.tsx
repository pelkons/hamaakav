import Link from "next/link";
import { LayoutDashboard, FolderKanban, CheckSquare, Users, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

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
            <div className="p-6 flex items-center justify-center">
                <Link href="/" className="block w-full">
                    <Logo className="h-8 w-auto text-muted-foreground" />
                </Link>
            </div>
            <nav className="flex-1 px-4 py-2 space-y-1">
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
            <div className="p-4 mt-auto border-t border-border">
                <p className="text-xs text-center text-muted-foreground">
                    גרסה 1.0.0
                </p>
            </div>
        </aside>
    );
}

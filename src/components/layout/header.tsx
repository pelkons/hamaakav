"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <header className="h-20 bg-card border-b border-border shadow-sm flex items-center justify-between px-8 sticky top-0 z-10 rounded-b-xl">
            {/* Right Side: Search & Actions (In RTL: Right is Start) */}
            <div className="flex items-center gap-4 flex-1 max-w-2xl">
                <div className="relative w-full max-w-md">
                    <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="חיפוש חופשי..."
                        className="w-full ps-10 rounded-xl bg-muted/50 border-none h-11 focus-visible:ring-1"
                    />
                </div>

                <div className="flex items-center gap-2 border-s border-border ps-4">
                    <Button variant="ghost" size="icon" className="rounded-full relative">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-1 end-1 h-2 w-2 rounded-full bg-destructive" />
                        <span className="sr-only">התראות</span>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-5 w-5 dark:hidden" />
                        <Moon className="h-5 w-5 hidden dark:block" />
                        <span className="sr-only">החלף נושא</span>
                    </Button>
                </div>
            </div>

            {/* Left Side: Logo (In RTL: Left is End) */}
            <div className="flex items-center">
                <Logo className="h-8 w-auto text-muted-foreground flex-shrink-0" />
            </div>
        </header>
    );
}

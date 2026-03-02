"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export function NewProjectDialog() {
    const [open, setOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would handle form submission here
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(Object.fromEntries(formData.entries()));
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="rounded-xl flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    פרויקט חדש
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>פרויקט חדש</DialogTitle>
                    <DialogDescription>
                        הזן את פרטי הפרויקט החדש. לחץ על שמירה כדי ליצור.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                            שם הפרויקט
                        </label>
                        <Input id="name" name="name" required placeholder="הזן שם פרויקט..." />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="units" className="text-sm font-medium">
                            מספר יח&quot;ד
                        </label>
                        <Input id="units" name="units" type="number" required placeholder="0" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="block" className="text-sm font-medium">
                                גוש
                            </label>
                            <Input id="block" name="block" required placeholder="לדוג' 1234" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="parcel" className="text-sm font-medium">
                                חלקה
                            </label>
                            <Input id="parcel" name="parcel" required placeholder="לדוג' 56" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lot" className="text-sm font-medium">
                                מגרש
                            </label>
                            <Input id="lot" name="lot" required placeholder="לדוג' 7" />
                        </div>
                    </div>
                    <DialogFooter className="pt-4">
                        <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                            ביטול
                        </Button>
                        <Button type="submit">שמירה</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

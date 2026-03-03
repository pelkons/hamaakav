"use client";

import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { signInWithPassword } from "@/actions/auth";

const formSchema = z.object({
    email: z.string().email({ message: "נא להזין כתובת אימייל חוקית" }),
    password: z.string().min(1, { message: "נא להזין סיסמה" }),
});

export function LoginForm() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [globalError, setGlobalError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setGlobalError(null);

        startTransition(async () => {
            // Create FormData from values to pass to server action
            const formData = new FormData();
            formData.append("email", values.email);
            formData.append("password", values.password);

            const result = await signInWithPassword(formData);

            if (result?.error) {
                setGlobalError(result.error);
            } else if (result?.success) {
                // Redirect to dashboard on successful login
                router.push("/dashboard");
                router.refresh();
            }
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" dir="rtl">
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-start block">אימייל</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isPending}
                                        type="email"
                                        placeholder="user@example.com"
                                        className="text-start"
                                        dir="ltr"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-start" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-start block">סיסמה</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isPending}
                                        type="password"
                                        placeholder="הזן את סיסמתך"
                                        className="text-start"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-start" />
                            </FormItem>
                        )}
                    />
                </div>

                {globalError && (
                    <div className="p-3 bg-destructive/15 border border-destructive/30 rounded-md text-destructive text-sm text-start font-medium">
                        {globalError}
                    </div>
                )}

                <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full rounded-xl"
                >
                    {isPending ? (
                        <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                    ) : null}
                    התחברות
                </Button>
            </form>
        </Form>
    );
}

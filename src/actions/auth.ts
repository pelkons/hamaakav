"use server";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email({ message: "כתובת אימייל לא תקינה" }),
    password: z.string().min(1, { message: "סיסמה נדרשת" }),
});

export async function signInWithPassword(formData: FormData) {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    const parsed = loginSchema.safeParse({ email, password });

    if (!parsed.success) {
        return { error: parsed.error.issues[0].message };
    }

    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email: parsed.data.email,
        password: parsed.data.password,
    });

    if (error) {
        // Standardize error message for Hebrew users
        let errorMessage = "שגיאה בהתחברות. אנא נסה שנית.";
        if (error.message.includes("Invalid login credentials")) {
            errorMessage = "פרטי ההתחברות שגויים. אנא בדוק את האימייל והסיסמה.";
        } else if (error.message.includes("Email not confirmed")) {
            errorMessage = "יש לאמת את כתובת האימייל לפני ההתחברות.";
        }

        return { error: errorMessage };
    }

    // Return success to the client, which will redirect
    return { success: true };
}

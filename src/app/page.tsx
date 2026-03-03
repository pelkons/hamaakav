import { LoginForm } from "@/components/auth/LoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/layout/logo";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 p-4">
            <div className="w-full max-w-sm flex items-center justify-center mb-8">
                <Logo className="w-64 h-auto" />
            </div>

            <Card className="w-full max-w-sm shadow-lg border-0">
                <CardHeader className="space-y-2 text-center pb-6">
                    <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
                        ברוכים הבאים
                    </CardTitle>
                    <CardDescription>
                        הזן את פרטי ההתחברות שלך למערכת HAMAAKAV
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>

            <p className="mt-8 text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} HAMAAKAV. כל הזכויות שמורות.
            </p>
        </div>
    );
}

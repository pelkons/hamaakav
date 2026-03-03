import { ArrowRight, Building2, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const resolvedParams = await params;
    const projectId = resolvedParams.id;

    // Note: in a real implementation we would fetch the project here
    // For the initial layout, I am rendering a strong static skeleton

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Header Section */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild className="rounded-full">
                    <Link href="/dashboard">
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </Button>
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">
                            פרויקט {projectId}
                        </h1>
                        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-200">
                            פעיל
                        </Badge>
                    </div>
                    <p className="text-muted-foreground mt-1 flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        גוש 1234, חלקה 56, מגרש 78
                    </p>
                </div>
            </div>

            {/* Overview Stats */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="rounded-xl border-border/50 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">סה״כ יחידות דיור</CardTitle>
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">150</div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Area */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Placeholder for future detailed widgets */}
                <Card className="col-span-2 rounded-xl border-border/50 shadow-sm">
                    <CardHeader>
                        <CardTitle>התקדמות הפרויקט</CardTitle>
                        <CardDescription>פירוט שלבי הבנייה המרכזיים</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] flex items-center justify-center border-t border-border/50 bg-muted/20">
                        <p className="text-muted-foreground">אזור פירוט משימות וגאנט יופיע כאן</p>
                    </CardContent>
                </Card>

                {/* Placeholder for team/budget */}
                <Card className="col-span-1 rounded-xl border-border/50 shadow-sm">
                    <CardHeader>
                        <CardTitle>מידע נוסף</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="flex justify-between py-2 border-b border-border/50">
                            <span className="text-muted-foreground">מנהל פרויקט</span>
                            <span className="font-medium">לא הוגדר</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border/50">
                            <span className="text-muted-foreground">תאריך התחלה</span>
                            <span className="font-medium">01/01/2026</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

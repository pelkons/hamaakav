"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, AlertCircle, DollarSign } from "lucide-react";

export function KPICards() {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-xl shadow-sm border-0 bg-gradient-to-br from-card to-card hover:shadow-md transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        סה&quot;כ פרויקטים
                    </CardTitle>
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <TrendingUp className="h-4 w-4" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold">128</div>
                    <p className="text-xs text-muted-foreground mt-1 text-emerald-600 flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        +12% חודש אחרון
                    </p>
                </CardContent>
            </Card>

            <Card className="rounded-xl shadow-sm border-0 border-s-4 border-destructive bg-gradient-to-br from-card to-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-destructive">
                        פרויקטים בעיכוב
                    </CardTitle>
                    <div className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                        <AlertCircle className="h-4 w-4" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-destructive">14</div>
                    <p className="text-xs text-muted-foreground mt-1 text-destructive/80">
                        נדרשת התערבות מיידית
                    </p>
                </CardContent>
            </Card>

            <Card className="rounded-xl shadow-sm border-0 bg-gradient-to-br from-card to-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        תקציב מנוצל לשנה זו
                    </CardTitle>
                    <div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                        <DollarSign className="h-4 w-4" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold">68%</div>
                    <Progress value={68} className="h-2 mt-3 bg-muted w-full [&>div]:bg-emerald-500" />
                </CardContent>
            </Card>
        </div>
    );
}

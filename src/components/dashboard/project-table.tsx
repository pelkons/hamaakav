"use client";

import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

export function ProjectTable() {
    const { data: projects, isLoading, error } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            return data;
        },
    });

    return (
        <Card className="rounded-xl shadow-sm border-0 mt-8">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="text-xl">פרויקטים פעילים</CardTitle>
                        <CardDescription>
                            מעקב אחר סטטוס פרויקטים והתקדמות כללית
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <div className="flex justify-center items-center py-10">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                ) : error ? (
                    <div className="text-center text-destructive py-10">
                        שגיאה בטעינת הנתונים.
                    </div>
                ) : (!projects || projects.length === 0) ? (
                    <div className="text-center text-muted-foreground py-10">
                        אין פרויקטים להצגה. לחץ על &quot;פרויקט חדש&quot; כדי להתחיל.
                    </div>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow className="border-border">
                                <TableHead className="w-[250px] text-right">שם הפרויקט</TableHead>
                                <TableHead className="text-right">מנהל פרויקט</TableHead>
                                <TableHead className="text-right">סטטוס</TableHead>
                                <TableHead className="text-right">יח&quot;ד</TableHead>
                                <TableHead className="text-right w-[200px]">התקדמות</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projects.map((project) => (
                                <TableRow key={project.id} className="border-border/50 hover:bg-muted/50 transition-colors">
                                    <TableCell className="font-medium">{project.name}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={project.manager_avatar || `https://i.pravatar.cc/150?u=${project.id}`} alt={project.manager_name || 'מנהל'} />
                                                <AvatarFallback>{(project.manager_name || 'מנהל').charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="text-sm">{project.manager_name || 'לא הוגדר'}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="outline"
                                            className={
                                                project.status === "פעיל" ? "bg-emerald-500/10 text-emerald-600 border-emerald-200" :
                                                    project.status === "מעוכב" ? "bg-destructive/10 text-destructive border-destructive/20" :
                                                        "bg-amber-500/10 text-amber-600 border-amber-200"
                                            }
                                        >
                                            {project.status || 'חדש'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-sm text-muted-foreground">
                                        {project.units}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Progress value={project.progress || 0} className="h-2 flex-1" />
                                            <span className="text-sm font-medium w-9 tabular-nums">
                                                {project.progress || 0}%
                                            </span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
        </Card>
    );
}

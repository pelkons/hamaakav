"use client";

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
import { mockProjects } from "@/lib/mock-data";

export function ProjectTable() {
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
                <Table>
                    <TableHeader>
                        <TableRow className="border-border">
                            <TableHead className="w-[250px] text-right">שם הפרויקט</TableHead>
                            <TableHead className="text-right">מנהל פרויקט</TableHead>
                            <TableHead className="text-right">סטטוס</TableHead>
                            <TableHead className="text-right">תאריכים</TableHead>
                            <TableHead className="text-right w-[200px]">התקדמות</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockProjects.map((project) => (
                            <TableRow key={project.id} className="border-border/50 hover:bg-muted/50 transition-colors">
                                <TableCell className="font-medium">{project.name}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={project.manager.avatar} alt={project.manager.name} />
                                            <AvatarFallback>{project.manager.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <span className="text-sm">{project.manager.name}</span>
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
                                        {project.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-sm text-muted-foreground">
                                    {project.startDate} - {project.endDate}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Progress value={project.progress} className="h-2 flex-1" />
                                        <span className="text-sm font-medium w-9 tabular-nums">
                                            {project.progress}%
                                        </span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

import { KPICards } from "@/components/dashboard/kpi-cards";
import { ProjectTable } from "@/components/dashboard/project-table";
import { NewProjectDialog } from "@/components/dashboard/new-project-dialog";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            סקירת פרויקטים
          </h1>
          <p className="text-muted-foreground mt-2">
            מעקב בזמן אמת אחר תקציבים, לוחות זמנים והתקדמות בכל הפרויקטים הפעילים.
          </p>
        </div>
        <NewProjectDialog />
      </div>

      <KPICards />
      <ProjectTable />
    </div>
  );
}

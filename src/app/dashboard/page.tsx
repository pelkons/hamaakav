import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { KPICards } from "@/components/dashboard/kpi-cards";
import { ProjectTable } from "@/components/dashboard/project-table";
import { NewProjectDialog } from "@/components/dashboard/new-project-dialog";

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">
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
        </main>
      </div>
    </div>
  );
}

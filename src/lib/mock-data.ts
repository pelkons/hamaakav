export interface Project {
    id: string;
    name: string;
    manager: {
        name: string;
        avatar: string;
    };
    status: "פעיל" | "מעוכב" | "מתוכנן";
    startDate: string;
    endDate: string;
    progress: number;
    budgetUtilized: number; // percentage
}

export const mockProjects: Project[] = [
    {
        id: "p1",
        name: "מגדל משרדים - תל אביב",
        manager: { name: "דוד כהן", avatar: "https://i.pravatar.cc/150?u=1" },
        status: "פעיל",
        startDate: "01/01/2026",
        endDate: "31/12/2027",
        progress: 45,
        budgetUtilized: 50,
    },
    {
        id: "p2",
        name: "שכונת מגורים - ראשון לציון",
        manager: { name: "שרה לוי", avatar: "https://i.pravatar.cc/150?u=2" },
        status: "מעוכב",
        startDate: "15/06/2025",
        endDate: "30/08/2026",
        progress: 72,
        budgetUtilized: 85,
    },
    {
        id: "p3",
        name: "מרכז מסחרי - חיפה",
        manager: { name: "ירון אברהם", avatar: "https://i.pravatar.cc/150?u=3" },
        status: "מתוכנן",
        startDate: "01/05/2026",
        endDate: "01/10/2028",
        progress: 0,
        budgetUtilized: 5,
    },
    {
        id: "p4",
        name: "גשר להולכי רגל - נתניה",
        manager: { name: "רחל ישראלי", avatar: "https://i.pravatar.cc/150?u=4" },
        status: "פעיל",
        startDate: "10/02/2026",
        endDate: "20/12/2026",
        progress: 15,
        budgetUtilized: 20,
    },
    {
        id: "p5",
        name: "בית חולים תוספת אגף - ירושלים",
        manager: { name: "יוסי אזולאי", avatar: "https://i.pravatar.cc/150?u=5" },
        status: "פעיל",
        startDate: "01/11/2025",
        endDate: "01/11/2028",
        progress: 30,
        budgetUtilized: 28,
    },
];

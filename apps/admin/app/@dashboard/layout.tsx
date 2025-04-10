"use client";
import "../globals.css";
import "@repo/ui/globals.css";
import { SidebarProvider, SidebarTrigger } from "@repo/ui/components/sidebar"
import { AppSidebar } from "../../components/app-sidebar";
import { ThemeToggle } from "@repo/ui/components/theme-btn";



export default function RootLayout({

  children,
}: {

  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="p-2 pt-4 flex justify-between items-center flex-col ">
        <SidebarTrigger className="rounded-full" />
        <ThemeToggle />
      </div>
      <div className="flex h-screen w-screen items-center justify-center p-2 ">

        {children}
      </div>
    </SidebarProvider>
  );
}

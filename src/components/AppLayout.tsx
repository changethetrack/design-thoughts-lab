
import React from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

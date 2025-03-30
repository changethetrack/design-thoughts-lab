
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BrainCircuit,
  HomeIcon,
  Lightbulb,
  LineChart,
  Menu,
  PanelLeft,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}

const SidebarItem = ({ icon: Icon, children, href, isActive }: SidebarItemProps) => {
  return (
    <Link to={href}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-2 px-2 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50",
          isActive && "bg-sidebar-accent text-sidebar-foreground"
        )}
      >
        <Icon size={18} />
        <span>{children}</span>
      </Button>
    </Link>
  );
};

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar">
      <SidebarHeader className="px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-sidebar-foreground">
          <BrainCircuit size={24} />
          <span className="font-semibold">DesignThinkAI</span>
        </Link>
        <SidebarTrigger>
          <Button variant="ghost" size="icon" className="text-sidebar-foreground">
            <Menu size={18} />
          </Button>
        </SidebarTrigger>
      </SidebarHeader>
      
      <SidebarContent className="px-2 py-2">
        <div className="space-y-1">
          <SidebarItem 
            icon={HomeIcon} 
            href="/" 
            isActive={location.pathname === "/"}
          >
            Dashboard
          </SidebarItem>
          <SidebarItem 
            icon={Users} 
            href="/archetypes" 
            isActive={location.pathname === "/archetypes"}
          >
            Behavioral Archetypes
          </SidebarItem>
          <SidebarItem 
            icon={Lightbulb} 
            href="/hmw" 
            isActive={location.pathname === "/hmw"}
          >
            How Might We
          </SidebarItem>
        </div>
        
        <Separator className="my-4 bg-sidebar-border" />
        
        <div className="space-y-1">
          <SidebarItem 
            icon={LineChart} 
            href="/insights" 
            isActive={location.pathname === "/insights"}
          >
            Insights
          </SidebarItem>
          <SidebarItem 
            icon={PanelLeft} 
            href="/templates" 
            isActive={location.pathname === "/templates"}
          >
            Templates
          </SidebarItem>
        </div>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-2 text-xs text-sidebar-foreground/70">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span>AI Ready</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

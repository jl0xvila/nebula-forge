"use client";

import * as React from "react";
import { Command, Settings, CircleHelp, Gauge, Folder } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { NavSecondary } from "@/components/nav-secondary";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Gauge,
    },
    //   {
    //     title: "Lifecycle",
    //     url: "#",
    //     icon: IconListDetails,
    //   },
    //   {
    //     title: "Analytics",
    //     url: "#",
    //     icon: IconChartBar,
    //   },
    {
      title: "Projects",
      url: "/projects",
      icon: Folder,
    },
    //   {
    //     title: "Team",
    //     url: "#",
    //     icon: IconUsers,
    //   },
  ],
  //   navClouds: [
  //     {
  //       title: "Capture",
  //       icon: IconCamera,
  //       isActive: true,
  //       url: "#",
  //       items: [
  //         {
  //           title: "Active Proposals",
  //           url: "#",
  //         },
  //         {
  //           title: "Archived",
  //           url: "#",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Proposal",
  //       icon: IconFileDescription,
  //       url: "#",
  //       items: [
  //         {
  //           title: "Active Proposals",
  //           url: "#",
  //         },
  //         {
  //           title: "Archived",
  //           url: "#",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Prompts",
  //       icon: IconFileAi,
  //       url: "#",
  //       items: [
  //         {
  //           title: "Active Proposals",
  //           url: "#",
  //         },
  //         {
  //           title: "Archived",
  //           url: "#",
  //         },
  //       ],
  //     },
  //   ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: CircleHelp,
    },
  ],
  //   documents: [
  //     {
  //       name: "Data Library",
  //       url: "#",
  //       icon: IconDatabase,
  //     },
  //     {
  //       name: "Reports",
  //       url: "#",
  //       icon: IconReport,
  //     },
  //     {
  //       name: "Word Assistant",
  //       url: "#",
  //       icon: IconFileWord,
  //     },
  //   ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Command className="!size-5" />
                <span className="text-base font-semibold">Nebula Forge</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

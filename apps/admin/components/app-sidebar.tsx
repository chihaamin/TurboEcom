"use client";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@repo/ui/components/sidebar";
import { ScrollArea } from "@repo/ui/components/scroll-area";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@repo/ui/components/accordion";
import { Button } from "@repo/ui/components/button";
import sidebarItems from "./sidebar-items"; // Adjust import path as needed
import { useRouter, usePathname } from "next/navigation";

export function AppSidebar() {
    const router = useRouter();
    const handleButtonClick = (path: string) => { router.push(path); };
    const path = usePathname();

    return (
        <Sidebar className="border-none p-2 pl-0">
            <SidebarHeader>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 capitalize">
                    {path === "/" ? "overview" : path.split("/").slice(2).join(" / ").replace(/-/g, " ")}
                </h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <ScrollArea>
                        <Accordion type="single" collapsible className="w-full">
                            <Button variant="ghost" className="text-left w-full " onClick={() => handleButtonClick("/")}>
                                Overview
                            </Button>

                            {sidebarItems.map((item) => (
                                <AccordionItem
                                    key={item.Menu}
                                    value={item.Menu.toLowerCase().replace(/\s+/g, '-')}
                                >
                                    <AccordionTrigger >{item.Menu}</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex flex-col">
                                            {item.SubMenu.map((subItem) => (
                                                <Button
                                                    key={subItem.name}
                                                    variant="ghost"
                                                    className="w-full justify-start gap-2 text-left"
                                                    onClick={() => handleButtonClick(`/${item.Menu.toLowerCase().replace(/\s+/g, '-')}/${subItem.name.toLowerCase().replace(/\s+/g, '-')}`)}
                                                >
                                                    {subItem.icon}
                                                    {subItem.name}
                                                </Button>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </ScrollArea>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                Profile
            </SidebarFooter>
        </Sidebar>
    );
}
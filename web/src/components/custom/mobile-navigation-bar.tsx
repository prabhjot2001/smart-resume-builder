import React from "react";
import { navigationLinks } from "@/data/navigation-links";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "./theme-toggle";

const MobileNavigationBar = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mb-4 border-b pb-2">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Begin by creating or uploading your resume.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-2">
            {navigationLinks.map((link, idx) => (
              <Button key={idx} variant={link.variant}>
                <Link href={link.url}>{link.label}</Link>
              </Button>
            ))}
            <div className="flex items-center justify-between">
              <p>Change apperance</p>
              <ThemeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigationBar;

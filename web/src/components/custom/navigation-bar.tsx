"use client";
import React, { useState } from "react";
import Logo from "./primary-logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import MobileNavigationBar from "./mobile-navigation-bar";
import { navigationLinks } from "@/data/navigation-links";
type Props = {};

const NavigationBar = (props: Props) => {
  return (
    <nav
      style={{ padding: "var(--padding-primary)" }}
      className="z-50 container sticky top-0 bg-background/50 backdrop-blur-md shadow-sm flex items-center justify-between "
    >
      <Logo />
      {/* This navigation is for medium to larger screens */}
      <div className="hidden md:flex items-center gap-2">
        <div className="flex items-center gap-2">
          {navigationLinks.map((link, idx) => (
            <Button key={idx} variant={link.variant}>
              <Link href={link.url}>{link.label}</Link>
            </Button>
          ))}
        </div>
        <ThemeToggle />
      </div>

      {/* mobile menu */}
      <MobileNavigationBar />
    </nav>
  );
};

export default NavigationBar;

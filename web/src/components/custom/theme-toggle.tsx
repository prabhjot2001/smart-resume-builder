"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const handleThemeChange = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className="flex items-center space-x-2">
      {/* <Switch checked={isDarkMode} onCheckedChange={handleThemeChange} /> */}

      <Button
        onClick={handleThemeChange}
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
    </div>
  );
}

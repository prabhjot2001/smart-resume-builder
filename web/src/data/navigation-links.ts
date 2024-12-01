type NavbarLinks = NavLink[];
type NavLink = {
  label: string;
  url: string;
  variant:
    | "link"
    | "secondary"
    | "default"
    | "destructive"
    | "outline"
    | "ghost"
    | null
    | undefined;
};

export const navigationLinks: NavbarLinks = [
  {
    label: "Parser",
    url: "resume-parser",
    variant: "outline",
  },
  {
    label: "Build Resume",
    url: "resume-builder",
    variant: "default",
  },
];

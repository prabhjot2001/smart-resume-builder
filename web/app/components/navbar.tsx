"use client";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return <header aria-label="site header" className={cx(`flex h`)}>

  </header>;
};

export default Navbar;

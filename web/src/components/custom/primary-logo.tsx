import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image src={"/images/logo.svg"} alt="logo" height={28} width={28} />
      <h1 className="font-medium">Resume.dev</h1>
    </Link>
  );
};

export default Logo;

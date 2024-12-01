import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <h1 className="font-extrabold bg-gradient-to-r from-violet-600 to-primary text-transparent bg-clip-text  md:text-lg lg:text-xl xl:text-2xl">
        Smart Resume Builder
      </h1>
    </Link>
  );
};

export default Logo;

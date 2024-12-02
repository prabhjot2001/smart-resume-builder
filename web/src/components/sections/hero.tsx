import React from "react";
import FlexboxSpacer from "@/components/layout/flexbox-spacer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg-justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
          The professional resume builder
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">
          <span className="font-medium text-primary">
            Only 2% of resumes win.
          </span>{" "}
          Yours will be one of them. Let&apos;s build you a resume that works.
        </p>
        <Button
          asChild
          variant={"default"}
          size={"lg"}
          className=" mt-6 lg:mt-8 p-6"
        >
          <Link href={"/resume-builder"}>
            <p className="font-medium lg:font-bold text-lg">Create My Resume</p>
          </Link>
        </Button>
        <div className="mt-6 lg:flex gap-4 text-lg text-muted-foreground">
          <p>
            Boost Your Chances! Upload Your Resume & Get Your ATS Score{" "}
            <Link
              href={"/resume-parser"}
              className="text-primary hover:underline"
            >
              Check Here
            </Link>
          </p>
        </div>

        <div className="text-muted-foreground mt-6">
          <p>No Hidden Fees</p>
          <p>Download for Free in PDF or Word Format</p>
        </div>
      </div>

      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="flex justify-center items-center lg:grow lg:block mt-6 relative h-full">
        <img
          src="/images/demo.webp"
          alt="Hero Image"
          className="w-[500px] h-auto"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-30 rounded-lg"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-secondary-foreground">
            Make Your Resume Stand Out!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;

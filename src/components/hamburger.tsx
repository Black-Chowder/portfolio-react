"use client"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

function Hamburger() {
    const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger className="inline md:hidden sticky top-0 items-center w-full shadow-md backdrop-blur-lg" >
            <HamburgerMenuIcon className="w-10 h-10 m-1" />
        </SheetTrigger>
        <SheetContent side="left">
            <SheetHeader>
                <div className="flex flex-row">
                    <Link onClick={() => setSheetOpen(false)} href="/">
                        <Image
                        src="/react-logo.png"
                        alt="logo"
                        width="40"
                        height="40"
                        priority
                        />
                    </Link>
                    <div className="flex flex-grow flex-row-reverse justify-start mr-10">
                        <ThemeToggle/>
                    </div>
                </div>
            </SheetHeader>
            <Link onClick={() => setSheetOpen(false)} href="/aboutme" className="flex w-full justify-between items-center flex-row transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              <p className="text-xl font-medium px-3 py-1 whitespace-nowrap">
                About Me
              </p>
            </Link>
            <Link onClick={() => setSheetOpen(false)} href="/resume" className="flex w-full justify-between items-center flex-row transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              <p className="text-xl font-medium px-3 py-1">
                Resume
              </p>
            </Link>
            <Link onClick={() => setSheetOpen(false)} href="/experience" className="flex w-full justify-between items-center flex-row transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              <p className="text-xl font-medium px-3 py-1">
                Experience
              </p>
            </Link>
            <Link onClick={() => setSheetOpen(false)} href="/projects" className="flex w-full justify-between items-center flex-row transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              <p className="text-xl font-medium px-3 py-1">
                Projects
              </p>
            </Link>
        </SheetContent>
    </Sheet>
  )
}

export default Hamburger;
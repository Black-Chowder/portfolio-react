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
import { Dispatch, SetStateAction, useState } from "react";
import { NavData } from "@/lib/types";
import { navData } from "@/lib/data";

function NavLink({
    data,
    setSheetOpen
} : {
    data: NavData,
    setSheetOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <Link onClick={() => setSheetOpen(false)} href={data.ext} className="flex w-full justify-between items-center flex-row outline outline-1 rounded-xl my-6 disabled:pointer-events-none disabled:opacity-50">
            <p className="text-xl font-medium px-3 py-1">
                {data.name}
            </p>
        </Link>
    )
}

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
            { navData.map((data, i) => <NavLink key={i} data={data} setSheetOpen={setSheetOpen} />)}
        </SheetContent>
    </Sheet>
  )
}

export default Hamburger;
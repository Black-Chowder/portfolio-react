"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { NavData } from "@/lib/types";
import { navData } from "@/lib/data";

function NavLink({
  data,
} : {
  data: NavData,
}) {
  return (
    <NavigationMenuItem>
      <Link href={data.ext} className="flex w-full justify-between items-center flex-row transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50">
        <p className="text-xl font-medium px-3 py-1 whitespace-nowrap">
          {data.name}
        </p>
      </Link>
    </NavigationMenuItem>
  )
}

function Header() {
  return (
    <div className="hidden md:flex sticky top-0 items-center p-3 w-full shadow-md backdrop-blur-lg z-20" >
      <Link href="/">
        <Image
          src="/react-logo.png"
          alt="logo"
          width="50"
          height="50"
          priority
        />
      </Link>
      <div className="w-16"></div> {/* padding between image and headers */}
      <NavigationMenu>
        <NavigationMenuList>
          { navData.map((data, i) => <NavLink key={i} data={data} />)}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-grow flex-row-reverse justify-start mr-10">
        <ThemeToggle/>
      </div>
    </div>
  )
}

export default Header;
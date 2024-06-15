"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

function Header() {
  return (
    <div className="hidden md:flex sticky top-0 items-center p-3 w-full shadow-md backdrop-blur-lg" >
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
          <NavigationMenuItem>
            <Link href="/aboutme" className="flex w-full justify-between items-center flex-row transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              <p className="text-xl font-medium px-3 py-1 whitespace-nowrap">
                About Me
              </p>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/resume" className="flex w-full justify-between items-center flex-row transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              <p className="text-xl font-medium px-3 py-1">
                Resume
              </p>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/experience" className="flex w-full justify-between items-center flex-row transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              <p className="text-xl font-medium px-3 py-1">
                Experience
              </p>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/projects" className="flex w-full justify-between items-center flex-row transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              <p className="text-xl font-medium px-3 py-1">
                Projects
              </p>
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl bg-transparent">
              <Link href="/experience">
                Experience
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 items-stretch">
                { jobsList }
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl bg-transparent">
              <Link href="/projects">
                Projects
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 items-stretch">
                { projectsList }
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-grow flex-row-reverse justify-start mr-10">
        <ThemeToggle/>
      </div>
    </div>
  )
}

export default Header
"use client"

import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import Image from "next/image";

const linkStyle = `flex w-full py-2 px-3 justify-between items-center flex-row transition ease-out delay-150 hover:bg-accent`

function Header() {
  return (
    <div className="absolute top-0 left-0 flex items-center p-3 w-full shadow-md">
      <Image
        src="/react-logo.png"
        alt="logo"
        width="50"
        height="50"
        priority
      />
      <div className="w-4"></div> {/* padding between image and headers */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/resume" className="flex w-full justify-between items-center flex-row transition ease-in delay-150 hover:bg-accent">
              <p className="text-xl font-medium px-3 py-1">
                Resume
              </p>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl">
              <Link href="/experience">
                Experience
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 items-stretch">
                <li>
                  <Link href="/experience#idtech" className={linkStyle}>
                    <p>
                      iD Tech Teacher
                    </p>
                    <p className="right-0">5/23 - 8/23</p>
                  </Link>
                </li>
                <li>
                  <Link href="/experience#uc3m" className={linkStyle}>
                    <p>
                      UC3M Lab Assistant
                    </p>
                    <p className="right-0">6/23 - 8/23</p>
                  </Link>
                </li>
                <li>
                  <Link href="/experience#delineo" className={linkStyle}>
                    <p>
                      "Delineo" Pandemic Research
                    </p>
                    <p className="right-0">1/23 - 5/23</p>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl">
              <Link href="/projects">
                Projects
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 items-stretch">
                <li>
                  <Link href="/projects#cppgameengine" className={linkStyle}>
                    <NavigationMenuLink>
                      C++ Game Engine
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/projects#manhattanmap" className={linkStyle}>
                    <NavigationMenuLink>
                      Manhattan Map Project
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/projects#portfoliosite" className={linkStyle}>
                    <NavigationMenuLink>
                      Portfolio (this website!)
                    </NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Header
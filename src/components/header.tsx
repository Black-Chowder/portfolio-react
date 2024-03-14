"use client"

import * as React from "react"

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
import { jobs, projects } from "@/lib/data";

const linkStyle = `flex w-full py-2 px-3 justify-between items-center flex-row transition ease-out hover:bg-accent`

function Header() {

  const formatDate = (date: Date) => { // formats MM/YY
    const month = date.getMonth() + 1;
    const year = date.getFullYear() % 100;
    return `${month}/${year}`
  }

  const jobsList = jobs
		.toSorted((a, b) => b.start_date.getTime() - a.start_date.getTime())
		.map(job => 
			<li key={job.slug}>
        <Link href={`/experience#${job.slug}`} className={linkStyle}>
          <p>
            { job.title }
          </p>
          <p className="right-0">{ formatDate(job.start_date) } - { formatDate(job.end_date) }</p>
        </Link>
      </li>
		);

  const projectsList = projects
    .map(project =>
      <li key={project.slug}>
        <Link href={`/projects#${project.slug}`} className={linkStyle}>
          <p>
            {project.title}
          </p>
        </Link>
      </li>
    );

  return (
    <div className="sticky top-0 flex items-center p-3 w-full shadow-md backdrop-blur-lg">
      <Link href="/">
        <Image
          src="/react-logo.png"
          alt="logo"
          width="50"
          height="50"
          priority
        />
      </Link>
      <div className="w-4"></div> {/* padding between image and headers */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/resume" className="flex w-full justify-between items-center flex-row transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              <p className="text-xl font-medium px-3 py-1">
                Resume
              </p>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
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
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-grow flex-row-reverse justify-start">
        <ThemeToggle/>
      </div>
    </div>
  )
}

export default Header
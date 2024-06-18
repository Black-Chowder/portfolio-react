import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ProjectTag } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProjectTagBorderColor(tag: ProjectTag) {
	switch (tag) {
		case "Game":
			return "border-[darkorange]";
		case "3D Design":
			return "border-[grey]";
		case "Website":
			return "border-[dodgerblue]";
		case "Coding":
			return "border-[limegreen]";
		case "Group":
			return "border-[mediumslateblue]";
		case "Solo":
			return "border-[crimson]";
		case "Class":
			return "border-[saddlebrown]";
		case "WIP":
			return "border-[khaki]";
	}
}
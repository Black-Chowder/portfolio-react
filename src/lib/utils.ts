import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ProjectTag } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProjectTagColor(tag: ProjectTag) {
	switch (tag) {
		case "Game":
			return "darkorange";
		case "3D Design":
			return "grey";
		case "Website":
			return "dodgerblue";
		case "Coding":
			return "limegreen";
		case "Group":
			return "mediumslateblue";
		case "Solo":
			return "crimson";
		case "Class":
			return "saddlebrown";
		case "In Progress":
			return "khaki";
	}
}
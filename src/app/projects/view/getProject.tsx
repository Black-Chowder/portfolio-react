import CppGameEngine from "@/app/projects/view/_project-components/cppgameengine";

export function getProjectNodes(slug: string) {
	switch (slug) {
		case "cppgameengine":
			return <CppGameEngine />;
	}

	return undefined;
}
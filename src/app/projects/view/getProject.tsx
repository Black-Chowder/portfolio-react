//import CppGameEngine from "@/app/projects/view/_project-components/cppgameengine";
import DbfPlane from "./_project-components/dbfplane";
import ContextSteering2D from "./_project-components/contextsteering2D";
import SuperhotSnake from "./_project-components/superhotsnake";

export function getProjectNodes(slug: string) {
	switch (slug) {
		case "contextsteering2d":
			return <ContextSteering2D />;
		case "dbfplane":
			return <DbfPlane />;
		case "superhotsnake":
			return <SuperhotSnake />;
	}

	return undefined;
}
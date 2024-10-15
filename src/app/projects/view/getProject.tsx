//import CppGameEngine from "@/app/projects/view/_project-components/cppgameengine";
import DbfPlane from "./_project-components/dbfplane";
import ContextSteering2D from "./_project-components/contextsteering2D";

export function getProjectNodes(slug: string) {
	switch (slug) {
		case "contextsteering2d":
			return <ContextSteering2D />;
		case "dbfplane":
			return <DbfPlane />;
	}

	return undefined;
}
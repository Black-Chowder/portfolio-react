import CppGameEngine from "@/app/projects/view/_project-components/cppgameengine";
import DbfPlane from "./_project-components/dbfplane";

export function getProjectNodes(slug: string) {
	switch (slug) {
		case "cppgameengine":
			return <CppGameEngine />;
		case "dbfplane":
			return <DbfPlane />;
	}

	return undefined;
}
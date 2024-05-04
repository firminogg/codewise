import { CircleChevronRight } from "lucide-react";
import Link from "next/link";

export default function CursosCategorias() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Link
        className="group grid h-auto w-full justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
        href="/cursos/programacao"
      >
        <div className="text-base font-semibold flex items-center text-center gap-1">
          # Programação
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 flex text-center items-center gap-1">
          Cursos no Total:
        </span>
        <div className="text-sm text-gray-500 dark:text-gray-400 flex text-center items-center gap-1 font-bold">
          <CircleChevronRight className="h-4 w-4" /> Ver cursos
        </div>
      </Link>

      <Link
        className="group grid h-auto w-full justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
        href="/cursos/design"
      >
        <div className="text-base font-semibold flex items-center text-center gap-1">
          # Design
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 flex text-center items-center gap-1">
          Cursos no Total:
        </span>
        <div className="text-sm text-gray-500 dark:text-gray-400 flex text-center items-center gap-1 font-bold">
          <CircleChevronRight className="h-4 w-4" /> Ver cursos
        </div>
      </Link>
    </div>
  );
}

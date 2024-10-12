import Link from "next/link";

export default function CursosCategorias() {
  return (
    <div className="sm:grid-cols-2 md:grid-cols-3 g:grid-cols-4">
      <Link
        className="group grid h-auto w-full justify-end gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-190 dark:hover:text-gray-190 dark:focus:text-gray-900"
        href="/cursos/programacao"
      >
        <div className="text-base font-semibold flex items-center text-center gap-1">
          programming
        </div>
      </Link>

      <Link
        className="group grid h-auto w-full justify-end gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-190 dark:hover:text-gray-190 dark:focus:text-gray-900"
        href="/cursos/design"
      >
        <div className="text-base font-semibold flex items-center text-center gap-1">
          image design
        </div>
      </Link>

      <Link
        className="group grid h-auto w-full justify-end gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-190 dark:hover:text-gray-190 dark:focus:text-gray-900"
        href="/cursos/marketing"
      >
        <div className="text-base font-semibold flex items-center text-center gap-1">
          digital marketing
        </div>
      </Link>

      <Link
        className="group grid h-auto w-full justify-end gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-190 dark:hover:text-gray-190 dark:focus:text-gray-900"
        href="/cursos/marketing"
      >
        <div className="text-base font-semibold flex items-center text-center gap-1">
          video editing
        </div>
      </Link>

      <Link
        className="group grid h-auto w-full justify-end gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-190 dark:hover:text-gray-190 dark:focus:text-gray-900"
        href="/cursos/marketing"
      >
        <div className="text-base font-semibold flex items-center text-center gap-1">
          investments and bets
        </div>
      </Link>
    </div>
  );
}

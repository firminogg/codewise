import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Avatar, AvatarImage } from "./ui/avatar";
import { getSession } from "next-auth/react";
import {
  FileTextIcon,
  SettingsIcon,
  UsersIcon,
  AlbumIcon,
} from "lucide-react";

export default async function SidebarAdmin() {
  const session = await getSession();

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <span className="">Painel de Admin</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/admin/dashboard"
              >
                <FileTextIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/admin/cursos"
              >
                <AlbumIcon className="h-4 w-4" />
                Cursos
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/admin/config"
              >
                <SettingsIcon className="h-4 w-4" />
                Configurações
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

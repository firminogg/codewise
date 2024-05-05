import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { HomeIcon, WalletIcon, UsersIcon, TagIcon } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="flex">
      <aside className="sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4">
        <div className="flex items-center mb-4 space-x-1">
          <h1 className="text-lg font-medium">Painel de Admin</h1>
        </div>
        <nav className="space-y-2">
          <div className="flex flex-col gap-3">
            <Link href="/admin/dashboard">
              <Button
                className="w-full flex items-center space-x-2 bg-gray-200 py-2 px-2 rounded-lg text-gray-800"
                variant="outline"
              >
                <HomeIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Dashboard</span>
              </Button>
            </Link>

            <Link href="/admin/cursos">
              <Button
                className="w-full flex items-center space-x-2 hover:bg-gray-200 py-2 px-2 rounded-lg text-gray-500"
                variant="outline"
              >
                <WalletIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Cursos</span>
              </Button>
            </Link>

            <Link href="/admin/contas">
              <Button
                className="w-full flex items-center space-x-2 hover:bg-gray-200 py-2 px-2 rounded-lg text-gray-500"
                variant="outline"
              >
                <UsersIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Contas</span>
              </Button>
            </Link>
          </div>
        </nav>
      </aside>
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-medium">Dashboard</h1>
        </div>
      </main>
    </div>
  );
}

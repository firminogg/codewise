import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  ActivityIcon,
  BarChartIcon,
  SettingsIcon,
  UserPlusIcon,
  UsersIcon,
  BookDown,
} from "lucide-react";
import CardUsers from "@/components/CardUsers";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <nav className="hidden flex-col gap-6 border-r px-4 py-6 md:flex md:w-64 lg:w-72">
          <Link
            className="flex items-center gap-2 text-lg font-medium"
            href="/admin/dashboard"
          >
            <UsersIcon className="h-5 w-5" />
            Usuários
          </Link>
          <Link
            className="flex items-center gap-2 text-lg font-medium"
            href="/admin/configs"
          >
            <SettingsIcon className="h-5 w-5" />
            Configurações
          </Link>
          <Link
            className="flex items-center gap-2 text-lg font-medium"
            href="/admin/cursos"
          >
            <BarChartIcon className="h-5 w-5" />
            Cursos
          </Link>
        </nav>
        <main className="flex-1 p-4 md:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Usuários Cadastrados
                </CardTitle>
                <UsersIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,345</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +5.2% do que o mês anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Usuários Ativos
                </CardTitle>
                <ActivityIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,765</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +3.1% do que o mês anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Novos Registros
                </CardTitle>
                <UserPlusIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +8.9% do que o mês anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Cursos Adicionados
                </CardTitle>
                <BookDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +10.5% do que o mês anterior
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <CardUsers />
          </div>
        </main>
      </div>
    </div>
  );
}

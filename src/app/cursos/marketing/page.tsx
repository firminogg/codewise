import CardCurso from "@/components/CursoCard";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Marketing() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-medium">image design courses</h1>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              placeholder="search for courses"
              type="search"
            />
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <CardCurso
            titulo="TikTok para Ecommerce – Ana Clara, Fábio Ludke"
            lancamento="2024"
            duracao="5h 12min"
            certificado="no"
            autor="hash"
            escola="ecommercenapratica.com"
            link="https://t.me/+TgX92R6ZoC9jMTA5"
          ></CardCurso>
        </div>
      </main>
    </>
  );
}

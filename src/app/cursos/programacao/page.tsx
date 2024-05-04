import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SearchIcon } from "lucide-react";

export default function HtmlCss() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-medium"># Programação</h1>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              placeholder="Pesquisar"
              type="search"
            />
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  Origamid HTML e CSS
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  📅| Lançamento: 2021
                  <br />
                  💾| Tamanho: 4.7 gb
                  <br />
                  🕒| Duração: 18h
                  <br />
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm">Assistir Curso</Button>
                <Button size="sm" variant="outline">
                  Adicionar aos Favoritos
                </Button>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Adicionado por <span className="italic">André Firmino</span>{" "}
                  {currentDate}
                </span>
              </div>
            </div>
          </div>

          <div className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  UpInside PHP
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  📅| Lançamento: 2024
                  <br />
                  💾| Tamanho: 23.7 gb
                  <br />
                  🕒| Duração: 55h
                  <br />
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm">Assistir Curso</Button>
                <Button size="sm" variant="outline">
                  Adicionar aos Favoritos
                </Button>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Adicionado por <span className="italic">André Firmino</span>{" "}
                  {currentDate}
                </span>
              </div>
            </div>
          </div>

          <div className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  CodeStart
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  📅| Lançamento: 2023
                  <br />
                  💾| Tamanho: 12.2 gb
                  <br />
                  🕒| Duração: 35h
                  <br />
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm">Assistir Curso</Button>
                <Button size="sm" variant="outline">
                  Adicionar aos Favoritos
                </Button>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Adicionado por <span className="italic">André Firmino</span>{" "}
                  {currentDate}
                </span>
              </div>
            </div>
          </div>

          <div className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  Django Master
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  📅| Lançamento: 2023
                  <br />
                  💾| Tamanho: 14.4 gb
                  <br />
                  🕒| Duração: 33h
                  <br />
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm">Assistir Curso</Button>
                <Button size="sm" variant="outline">
                  Adicionar aos Favoritos
                </Button>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Adicionado por <span className="italic">André Firmino</span>{" "}
                  {currentDate}
                </span>
              </div>
            </div>
          </div>

          <div className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:border-gray-300 dark:border-red-800 dark:bg-gray-950 dark:hover:border-red-500">
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  BackFront Academy
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  📅| Lançamento: 2023
                  <br />
                  💾| Tamanho: 35.7 gb
                  <br />
                  🕒| Duração: 132h
                  <br />
                  👋🏼| O mais escolhido!
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm">Assistir Curso</Button>
                <Button size="sm" variant="outline">
                  Adicionar aos Favoritos
                </Button>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Adicionado por <span className="italic">André Firmino</span>{" "}
                  {currentDate}
                </span>
              </div>
            </div>
          </div>

          <div className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  CodeBoost
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  📅| Lançamento: 2023
                  <br />
                  💾| Tamanho: 20.6 gb
                  <br />
                  🕒| Duração: 82h
                  <br />
                </p>
              </div>
              <div className="flex gap-2">
                <Button size="sm">Assistir Curso</Button>
                <Button size="sm" variant="outline">
                  Adicionar aos Favoritos
                </Button>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Adicionado por <span className="italic">André Firmino</span>{" "}
                  {currentDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div>
        <Separator />
      </div>

      <div className="flex items-center justify-center py-12">
        <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" />
            </div>
            <p className="text-sm">bash</p>
          </div>
          <div className="mt-4">
            <p className="text-green-400">$ npm install conhecimento</p>
            <p className="text-white">+ conhecimento@latest</p>
            <p className="text-green-400">$ npm start studing</p>
          </div>
        </aside>
      </div>

      <div>
        <Separator />
      </div>
    </>
  );
}

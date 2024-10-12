import CardCurso from "@/components/CursoCard";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function HtmlCss() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-medium">coding courses</h1>
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
            titulo="Evento PHP – Rafael Lunardelli, Mayk Brito, Diego Fernandes"
            lancamento="2024"
            tamanho="empty"
            duracao="6h 10min"
            certificado="no"
            autor="hash"
            escola="Rocketseat"
            link="https://t.me/+DfxXA_Fs3CNiYjdh"
          ></CardCurso>

          <CardCurso
            titulo="HTML e CSS para Iniciantes - Origamid"
            lancamento="2023"
            tamanho="5.6 gb"
            duracao="23h 30min"
            certificado="no"
            autor="hash"
            escola="Origamid"
            link="https://t.me/+YdBz6IrG_do1YzIx"
          ></CardCurso>

          <CardCurso
            titulo="Formação em Full-Stack – Mayk Brito, Rodrigo Gonçalves"
            lancamento="2024"
            tamanho="empty"
            duracao="64h 16min"
            certificado="no"
            autor="hash"
            escola="Rocketseat"
            link="https://t.me/+sEsn_z1de7M0MzEx"
          ></CardCurso>

          <CardCurso
            titulo="Formação DevOps – Daniel Rodrigues"
            lancamento="2024"
            tamanho="empty"
            duracao="19h 37min"
            certificado="no"
            autor="hash"
            escola="Rocketseat"
            link="https://t.me/+OJ4t2KRZEMA5OTUx"
          ></CardCurso>

          <CardCurso
            titulo="JavaScript Completo ES6 - Origamid"
            lancamento="2024"
            tamanho="3.5 gb"
            duracao="36h 59min"
            certificado="no"
            autor="hash"
            escola="Origamid"
            link="https://t.me/+lebykYBjLwJmMmEx"
          ></CardCurso>
        </div>
      </main>
    </>
  );
}

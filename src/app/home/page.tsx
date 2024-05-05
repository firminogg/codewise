import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { AppWindow, BanIcon, CircleUser } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import HeaderPage from "@/components/HeaderPage";
import CursosCategorias from "@/components/CursosCategorias";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession();
  console.log(session);

  if (!session) {
    redirect("/");
  }
  return (
    <div>
      <HeaderPage />
      {/* Primeira parte */}
      <div className="w-full mt-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Explore o mundo da programação com a{" "}
              <p className="text-[#8B5CF6] underline">CodeWise!</p>
            </h1>
            <p className="mt-6 text-lg">
              Descubra o mundo da programação com a CodeWise! Oferecemos cursos
              totalmente gratuitos, aula por aula buscando sempre a melhor
              qualidade. O nosso único porém, é que não conseguimos ter
              certificado.
            </p>
            <div className="mt-10">
              <Link
                className="inline-flex items-center rounded-md bg-[#8B5CF6] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2"
                href="/login"
              >
                Vamos começar!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Separator className="my-12" />
      </div>

      {/* Segunda parte */}
      <div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6] text-white">
                <AppWindow className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Programção para Web
              </h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                Você vai aprender todos os conceitos de programção para se
                tornar um programador web.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6] text-white">
                <BanIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Você não paga nada!
              </h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                Nós hospedamos os nossos cursos em um lugar e você consegue
                assistir por aqui, totalmente de graça.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6] text-white">
                <CircleUser className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Você querendo ou não
              </h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                Conclua os cursos, assista todas as aulas de onde estiver,
                logado ou não :D
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Separator className="my-12" />
      </div>

      {/* Quarta parte */}
      <div>
        <section className="w-full">
          <div className="container grid gap-8 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
              Categorias de Cursos
            </h2>
            <CursosCategorias />
          </div>
        </section>
      </div>

      <div>
        <Separator className="my-12" />
      </div>

      {/* Quinta parte */}
      <div className="flex justify-center items-center">
        <Card className="w-full max-w-sm">
          <CardContent className="flex flex-col items-center gap-4 p-6">
            <Avatar className="w-20 h-20">
              <AvatarImage
                alt="User Avatar"
                src="https://yt3.googleusercontent.com/rC3lrbN7fPgNsb_xaQTBtSnxxjC8ICKs3RGfR2rG3m-eKPHR38tbYHG5hGBJnjB3yS_BULBAUA=s160-c-k-c0x00ffffff-no-rj"
              />
            </Avatar>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">André Firmino</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Projeto desenvolvido para CodeWise
              </p>
              <p>
                Totalmente feito por estudo e sem nenhum tipo de intuito de
                venda.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Separator className="my-12" />
      </div>

      {/* Rodapé */}
      <div className="flex justify-center items-center mb-12">
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} CodeWise. Todos os direitos reservados.
            Desenvolvido por André
          </p>
        </div>
      </div>
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card";
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
              explore the world of programming with{" "}
              <p className="text-[#8B5CF6] underline">codewise</p>
            </h1>
            <p className="mt-6 text-lg">
              discover the world of programming with CodeWise! We offer
              completely free courses, class by class, always seeking the best
              quality. Our only drawback is that we cannot obtain a certificate.
            </p>
            <div className="mt-10">
              <Link
                className="inline-flex items-center rounded-md bg-[#8B5CF6] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2"
                href="/login"
              >
                hey, are we going?
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
                web programming
              </h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                You will learn all the programming concepts to become a web
                developer.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6] text-white">
                <BanIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                you don't pay anything!
              </h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                We host our courses in one place and you can watch them here,
                completely free of charge.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6] text-white">
                <CircleUser className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                whether you like it or not
              </h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                complete the courses, watch all the lessons from wherever you
                are, logged in or not :D
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
              course Categories
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxnCn7xfCrZk7RffFeYkQzlUj86Wfld347Vw&s"
              />
            </Avatar>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold">andré firmino (hash#)</h3>
              <p>Completely made by study and with no intention of selling.</p>
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
            © {new Date().getFullYear()} CodeWise. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

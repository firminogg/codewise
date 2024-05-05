import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Avatar, AvatarImage } from "./ui/avatar";
import { getServerSession } from "next-auth";

export default async function HeaderPage() {
  const session = await getServerSession();
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b">
      <div className="flex gap-3">
        <Link className="flex items-center gap-2 text-center" href="#">
          <span className="font-bold">{session.user?.name ?? ""}</span>
          <Avatar className="border dark:border-white">
            <AvatarImage src={session.user?.image ?? ""}></AvatarImage>
          </Avatar>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-4">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Início
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Sobre
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Planos
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Cursos
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}

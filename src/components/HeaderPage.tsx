import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function HeaderPage() {
  const session = await getServerSession();
  return (
    <header className="flex items-center justify-center h-16 px-4 md:px-6 border-b mb-8">
      <nav className="hidden md:flex items-center gap-4">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 hover:font-bold"
          href="/home"
        >
          home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 hover:font-bold"
          href="/"
        >
          courses
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 hover:font-bold"
          href="#"
        >
          donate
        </Link>
      </nav>
    </header>
  );
}

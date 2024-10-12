import { Separator } from "@/components/ui/separator";
import HeaderPage from "@/components/HeaderPage";
import CursosCategorias from "@/components/CursosCategorias";

export default async function CoursePage() {
  return (
    <div>
      <HeaderPage />
      <div>
        <section className="w-full">
          <div className="container grid gap-8 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-end">
              course categories
            </h2>
            <div>
              <CursosCategorias />
            </div>
          </div>
        </section>
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

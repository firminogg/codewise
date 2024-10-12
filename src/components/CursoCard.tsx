import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";

export default function CardCurso({
  titulo,
  lancamento,
  duracao,
  autor,
  escola,
  certificado,
  link,
}) {
  return (
    <div className="shadow-inner shadow-lg shadow-blue-500/50 group relative border rounded-lg p-6 shadow-sm text-sm font-medium transition-colors">
      <div className="flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-semibold">
            {titulo}
            <Separator className="my-2" />
          </h3>
          <p className="text-sm ">
            📅| Release: {lancamento}
            <br />
            🕒| Duration: {duracao}
            <br />
            🏫| Platform: {escola}
          </p>
          <p className="mt-5 text-sm ">
            📖| Certificate: {certificado}
            <br />
            📚| Added by: {autor}
          </p>
          <div className="flex pt-5">
            <Button>
              <Link href={link}>watching course</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

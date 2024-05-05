import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function CardCurso({ titulo, lancamento, tamanho, duracao, autor }) {
  return (
    <div className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
      <div className="flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            {titulo.toUpperCase()}
            <Separator className="my-2"/>
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            📅| Lançamento: {lancamento}	
            <br />
            💾| Tamanho: {tamanho}
            <br />
            🕒| Duração: {duracao}
            <br />
            📚| Adicionado por: Admin
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="sm">Assistir Curso</Button>
          <Button size="sm" variant="outline">
            Adicionar aos Favoritos
          </Button>
        </div>
      </div>
    </div>
  );
}

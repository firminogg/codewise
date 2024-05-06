import { Link, UserPlusIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./ui/table";
import { useEffect, useState } from "react";

export default function CardCurso() {
  const [cursos, setCursos] = useState<any[]>([]);
  const updateCursos = () => {
    const cursosLocalStorage = JSON.parse(localStorage.getItem("cursos")) || [];
    setCursos(cursosLocalStorage);
  };

  useEffect(() => {
    updateCursos();
  });

  return (
    <div className="mt-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Cursos Adicionados
          </CardTitle>
          <UserPlusIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Categoria</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cursos && cursos.map((curso) => (
                <TableRow key={curso.id}>
                  <TableCell>{curso.id}</TableCell>
                  <TableCell>{curso.nome}</TableCell>
                  <TableCell>{curso.categoria}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

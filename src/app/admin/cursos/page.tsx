"use client";

import AddCurso from "@/components/AddCurso";
import RemoveCurso from "@/components/RemoveCurso";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { HomeIcon, WalletIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CursoPage() {
  const [cursos, setCursos] = useState([]);
  const updateCursos = () => {
    const cursosLocalStorage = JSON.parse(localStorage.getItem("cursos")) || [];
    setCursos(cursosLocalStorage);
  };
  useEffect(() => {
    updateCursos();
  }, []);

  return (
    <div className="flex">
      <aside className="sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4">
        <div className="flex items-center mb-4 space-x-1">
          <h1 className="text-lg font-medium">Painel de Admin</h1>
        </div>
        <nav className="space-y-2">
          <div className="flex flex-col gap-3">
            <Link href="/admin/dashboard">
              <Button
                className="w-full flex items-center space-x-2 hover:bg-gray-200 py-2 px-2 rounded-lg text-gray-500"
                variant="outline"
              >
                <HomeIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Dashboard</span>
              </Button>
            </Link>

            <Link href="/admin/cursos">
              <Button
                className="w-full flex items-center space-x-2 hover:bg-gray-200 py-2 px-2 rounded-lg text-gray-500"
                variant="outline"
              >
                <WalletIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Cursos</span>
              </Button>
            </Link>

            <Link href="/admin/contas">
              <Button
                className="w-full flex items-center space-x-2 hover:bg-gray-200 py-2 px-2 rounded-lg text-gray-500"
                variant="outline"
              >
                <UsersIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Contas</span>
              </Button>
            </Link>
          </div>
        </nav>
      </aside>
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-medium">Cursos Adicionados</h1>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Autor</TableHead>
              <TableHead>Duração</TableHead>
              <TableHead>Tamanho</TableHead>
              <TableHead>Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cursos.map((curso) => (
              <TableRow key={curso.id}>
                <TableCell>{curso.id}</TableCell>
                <TableCell>{curso.nome}</TableCell>
                <TableCell>{curso.categoria}</TableCell>
                <TableCell>{curso.autor}</TableCell>
                <TableCell>{curso.duracao}</TableCell>
                <TableCell>{curso.tamanho}</TableCell>
                <TableCell>
                  <Link href={`${curso.link}`} target="_blank">
                    Ver Link
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="my-4"></div>

        <div className="flex flex-col justify-start my-4">
          <h1 className="text-lg font-medium">Funções</h1>
          <div className="flex gap-3">
            <AddCurso />
            <RemoveCurso />
          </div>
        </div>
      </main>
    </div>
  );
}

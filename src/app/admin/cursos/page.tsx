"use client";

import AddCurso from "@/components/AddCurso";
import CardCurso from "@/components/CardCurso";
import EditarCurso from "@/components/EditarCurso";
import RemoveCurso from "@/components/RemoveCurso";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { SettingsIcon, Inbox, BookDown } from "lucide-react";
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
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <nav className="hidden flex-col gap-3 border-r px-4 py-6 md:flex md:w-64 lg:w-72">
          <Link
            className="flex items-center text-lg font-medium"
            href="/admin/"
          >
            <div className="flex w-full">
              <Button
                variant="outline"
                className="w-full flex justify-start gap-3"
              >
                Dashboard
                <Inbox className="h-5 w-5" />
              </Button>
            </div>
          </Link>

          <Link
            className="flex items-center gap-2 text-lg font-medium"
            href="/admin/cursos"
          >
            <div className="flex w-full">
              <Button
                variant="outline"
                className="w-full flex justify-start gap-3"
              >
                Cursos
                <SettingsIcon className="h-5 w-5" />
              </Button>
            </div>
          </Link>
        </nav>
        <main className="flex-1 p-4 md:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Categorias de Cursos
                </CardTitle>
                <BookDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  #Programação #Design #Modelagem 3D
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <CardCurso />
            <div className="flex gap-4">
              <AddCurso />
              <RemoveCurso />
              <EditarCurso />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

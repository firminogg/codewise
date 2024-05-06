"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

export default function EditarCurso() {
  const [cursoId, setCursoId] = useState("");

  const handleRemove = (event) => {
    event.preventDefault();

    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    cursos = cursos.filter((curso) => curso.id !== cursoId);

    localStorage.setItem("cursos", JSON.stringify(cursos));

    setCursoId("");
  };

  return (
    <div className="flex gap-3 my-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Editar Curso</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleRemove} autoComplete="off">
            <AlertDialogHeader>
              <AlertDialogTitle>Editar um Curso</AlertDialogTitle>
            </AlertDialogHeader>
            <div className="grid gap-4 py-2">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cursoId">ID do Curso</Label>
                <Input
                  id="cursoId"
                  className="col-span-3"
                  value={cursoId}
                  placeholder="Digite o ID"
                  onChange={(e) => setCursoId(e.target.value)}
                  type="number"
                  min="1"
                />
              </div>
            </div>
            <AlertDialogFooter>
              <div className="flex gap-2 mt-4">
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Editar</AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

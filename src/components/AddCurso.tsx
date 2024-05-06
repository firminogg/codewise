"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

export default function AddCurso() {
  const [cursoId, setCursoId] = useState("");
  const [cursoNome, setCursoNome] = useState("");
  const [cursoCategoria, setCursoCategoria] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoCurso = {
      id: cursoId,
      nome: cursoNome,
      categoria: cursoCategoria,
    };

    const cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    cursos.push(novoCurso);
    setCursoId("");
    setCursoNome("");
    setCursoCategoria("");

    localStorage.setItem("cursos", JSON.stringify(cursos));
  };

  return (
    <div className="flex gap-3 my-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Adicionar Curso</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit} autoComplete="off">
            <AlertDialogHeader>
              <AlertDialogTitle>Adicionar Curso na Plataforma</AlertDialogTitle>
            </AlertDialogHeader>
            <div className="grid gap-4 py-2">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cursoId">ID</Label>
                <Input
                  id="cursoId"
                  className="col-span-3"
                  value={cursoId}
                  placeholder="Digite o ID"
                  onChange={(e) => setCursoId(e.target.value)}
                  type="number"
                  min="1"
                />

                <Label htmlFor="cursoNome">Nome do Curso</Label>
                <Input
                  id="cursoNome"
                  className="col-span-3"
                  value={cursoNome}
                  placeholder="Digite o Nome do Curso"
                  onChange={(e) => setCursoNome(e.target.value)}
                  type="text"
                  minLength={3}
                />

                <Label htmlFor="cursoCategoria">Categoria do Curso</Label>
                <Input
                  id="cursoCategoria"
                  className="col-span-3"
                  value={cursoCategoria}
                  placeholder="#Programação"
                  onChange={(e) => setCursoCategoria(e.target.value)}
                  type="text"
                  minLength={3}
                />
              </div>
            </div>
            <AlertDialogFooter>
              <div className="flex gap-2 mt-4">
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Adicionar</AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

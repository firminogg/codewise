"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

export default function RemoveCurso() {
  const [cursoId, setCursoId] = useState("");

  const handleRemove = (event) => {
    event.preventDefault();

    // Recupera a lista de cursos do localStorage
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    // Filtra a lista de cursos, deixando de fora o curso com o ID fornecido
    cursos = cursos.filter((curso) => curso.id !== cursoId);

    // Armazena a lista atualizada no localStorage
    localStorage.setItem("cursos", JSON.stringify(cursos));

    setCursoId(""); // Limpa o campo de ID para a próxima remoção
  };

  return (
    <div className="flex gap-3 my-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Remover Curso</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleRemove}>
            <DialogHeader>
              <DialogTitle>Remover Curso da Plataforma</DialogTitle>
            </DialogHeader>
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
            <DialogFooter>
              <Button variant="outline" type="reset">
                Cancelar
              </Button>
              <Button type="submit" onClick={handleRemove}>
                Remover Curso
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

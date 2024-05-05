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

export default function AddCurso() {
  const [cursoId, setCursoId] = useState("");
  const [cursoNome, setCursoNome] = useState("");
  const [cursoCategoria, setCursoCategoria] = useState("");
  const [cursoAutor, setCursoAutor] = useState("");
  const [cursoDuracao, setCursoDuracao] = useState("");
  const [cursoTamanho, setCursoTamanho] = useState("");
  const [cursoLink, setCursoLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoCurso = {
      id: cursoId,
      nome: cursoNome,
      categoria: cursoCategoria,
      autor: cursoAutor,
      duracao: cursoDuracao,
      tamanho: cursoTamanho,
      link: cursoLink,
    };

    // Recupera a lista de cursos do localStorage
    const cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    // Adiciona o novo curso à lista
    cursos.push(novoCurso);

    // Armazena a lista atualizada no localStorage
    localStorage.setItem("cursos", JSON.stringify(cursos));
  };

  return (
    <div className="flex gap-3 my-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Adicionar Curso</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Adicionar Curso na Plataforma</DialogTitle>
            </DialogHeader>
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

                <Label htmlFor="cursoAutor">Quem adicionou o curso?</Label>
                <Input
                  id="cursoAutor"
                  className="col-span-3"
                  value={cursoAutor}
                  placeholder="Nome do Autor"
                  onChange={(e) => setCursoAutor(e.target.value)}
                  type="text"
                  minLength={4}
                />

                <Label htmlFor="cursoDuracao">Duração do Curso</Label>
                <Input
                  id="cursoDuracao"
                  className="col-span-3"
                  value={cursoDuracao}
                  placeholder="Duração em Horas"
                  onChange={(e) => setCursoDuracao(e.target.value)}
                  type="number"
                  min="1"
                />

                <Label htmlFor="cursoNome">Tamanho do Curso</Label>
                <Input
                  id="cursoTamanho"
                  className="col-span-3"
                  value={cursoTamanho}
                  placeholder="Tamanho do Curso em GB"
                  onChange={(e) => setCursoTamanho(e.target.value)}
                  type="number"
                  min="1"
                />

                <Label htmlFor="cursoLink">Link do Curso</Label>
                <Input
                  id="cursoLink"
                  className="col-span-3"
                  value={cursoLink}
                  placeholder="Link do Curso"
                  onChange={(e) => setCursoLink(e.target.value)}
                  type="url"
                />
              </div>
            </div>
            <DialogFooter>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" type="reset">
                  Cancelar
                </Button>
                <Button type="submit" onClick={handleSubmit}>
                  Criar Curso
                </Button>
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

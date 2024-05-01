"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SyntheticEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.log(result);
      return;
    }

    router.replace("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex-1">
        <Card className="mx-auto max-w-sm flex-1">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Entrar</CardTitle>
            <CardDescription>
              Insira seu email e senha para entrar na <strong>CodeWise!</strong>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    placeholder="email@exemplo.com.br"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    placeholder="********"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button className="w-full" type="submit">
                  Entrar
                </Button>
              </form>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-muted-foreground">
              Não possui uma conta?{" "}
              <a className="text-black hover:underline" href="#">
                Crie uma agora!
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

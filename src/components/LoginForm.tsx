"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "./ui/card";
import ButtonLogin from "./ButtonLogin";

export default function LoginFormClient() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex-1">
        <Card className="mx-auto max-w-sm flex-1">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">
              Entrar com GitHub
            </CardTitle>
            <CardDescription>
              Abaixo você irá ser redirecionado para o <strong>GitHub</strong>{" "}
              para realizar o login em nossa plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ButtonLogin />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Não possui uma conta?{" "}
              <a
                href="https://github.com/signup?source=login"
                className="underline underline-offset-4 hover:text-primary"
              >
                Crie uma conta
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

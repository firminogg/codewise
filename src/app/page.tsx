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

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex-1">
        <Card className="mx-auto max-w-sm flex-1">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Entrar</CardTitle>
            <CardDescription>
              Insira seu e-mail abaixo para fazer login na sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  placeholder="mail@example.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <Label htmlFor="password">Senha</Label>
                <Input id="password" required type="password" />
              </div>
              <Button className="w-full">Entrar</Button>
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


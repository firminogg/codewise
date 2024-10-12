"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ButtonLogin from "./ButtonLogin";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

export default function LoginFormClient() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button className="w-full" type="submit">
            Sign In
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button
            className="w-full bg-black text-white hover:bg-gray-200 hover:text-black"
            onClick={() => signIn("github", { callbackUrl: "/home" })}
          >
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 hidden sm:inline-block">
              Dont have an account?
            </span>
            <a
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign up
            </a>
          </div>
          <a
            href="#"
            className="text-sm underline underline-offset-4 hover:text-primary"
          >
            Forgot password?
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}

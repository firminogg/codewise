'use client'

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function ButtonLogin() {
  return (
    <div>
      <Button onClick={() => signIn("github", { callbackUrl: "/home" })}>
        <GitHubLogoIcon className="mr-2 h-4 w-4" /> Entrar com GitHub
      </Button>
    </div>
  );
}

"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function ButtonLogin() {
  return (
    <div>
      <Button onClick={() => signIn("github", { callbackUrl: "/home" })}>
        <GitHubLogoIcon className="mr-2 h-6 w-6" />
        <p className="font-bold text-lg">Log In with GitHub</p>
      </Button>
    </div>
  );
}

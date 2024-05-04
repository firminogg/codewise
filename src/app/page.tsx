import LoginFormClient from "@/components/LoginForm";
import HomePage from "./home/page";

import { getSession } from "next-auth/react";

export default async function Home() {
  const session = await getSession();

  if(!session) {
    return <LoginFormClient />
  }
}

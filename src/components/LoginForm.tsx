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

export default function LoginFormClient() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex-1">
        <Card className="mx-auto max-w-sm flex-1">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">
              log in to GitHub to access the platform
            </CardTitle>
            {/* <CardDescription>
              below you will be redirected to the <strong>GitHub</strong> to log
              in to our platform
            </CardDescription> */}
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ButtonLogin />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Not an account?{" "}
              <a
                href="https://github.com/signup?source=login"
                className="underline underline-offset-4 hover:text-primary"
              >
                create an account
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

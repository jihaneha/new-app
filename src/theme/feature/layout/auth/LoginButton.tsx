"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <Button size="sm">
      <LogIn className="mr-2 h-4 w-4" />
    </Button>
  );
};

"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useUser from "@/hooks/useUser";
import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import SignUpForm from "@/components/auth/SignUpForm";
import { Button } from "../ui/button";
import UserButton from "../user/UserButton";

export default function AuthButton() {
  const { user } = useUser();

  if (user) {
    return <UserButton user={user} />;
  }

  return <NotLoggedInButton />;
}

enum AuthTypes {
  LOGIN = "login",
  SIGNUP = "sign-up",
}

function NotLoggedInButton() {
  const [authType, setAuthType] = useState<AuthTypes>(AuthTypes.LOGIN);

  const handleAuthTypeChange = (type: AuthTypes) => {
    setAuthType(type);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-2xl font-semibold">Login</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-sm">
        <DialogHeader className="contents">
          <DialogTitle className="sr-only font-black">Auth dialog</DialogTitle>
          <DialogDescription className="sr-only">
            This dialog for signing in
          </DialogDescription>
        </DialogHeader>
        {authType === AuthTypes.LOGIN && (
          <LoginForm
            insideDialog={true}
            setAuthTypeToSignUp={() => handleAuthTypeChange(AuthTypes.SIGNUP)}
          />
        )}
        {authType === AuthTypes.SIGNUP && (
          <SignUpForm
            insideDialog={true}
            setAuthTypeToLogin={() => handleAuthTypeChange(AuthTypes.LOGIN)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

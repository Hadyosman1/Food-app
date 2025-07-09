"use client";

import LoginForm from "@/components/auth/LoginForm";
import SignUpForm from "@/components/auth/SignUpForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useUser from "@/hooks/useUser";
import { cn } from "@/lib/utils";
import { useAuthModalStore } from "@/store/authModal.store";
import { useState } from "react";
import { Button } from "../ui/button";
import UserButton from "../user/UserButton";
import { InfoIcon } from "lucide-react";

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
  const isOpen = useAuthModalStore((state) => state.isOpen);
  const setIsOpen = useAuthModalStore((state) => state.setIsOpen);

  const message = useAuthModalStore((state) => state.message);
  const setMessage = useAuthModalStore((state) => state.setMessage);

  const [authType, setAuthType] = useState<AuthTypes>(AuthTypes.LOGIN);

  const handleAuthTypeChange = (type: AuthTypes) => {
    setAuthType(type);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (open === false) setMessage("");
      }}
    >
      <DialogTrigger asChild>
        <Button className="rounded-2xl font-semibold">Login</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-sm">
        <DialogHeader className="contents">
          <DialogTitle className="sr-only font-black">Auth dialog</DialogTitle>
          <DialogDescription
            className={cn("text-primary flex gap-2 font-bold", {
              "sr-only": !message,
            })}
          >
            <InfoIcon className="self-start" />
            {message ? message : "This dialog for signing in"}
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

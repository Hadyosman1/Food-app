"use client";

import { User } from "@supabase/supabase-js";
import { createContext } from "react";

export const UserContext = createContext<User | null>(null);

export default function UserProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

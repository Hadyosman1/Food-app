import { UserContext } from "@/components/providers/UserProvider";
import { use } from "react";

export default function useUser() {
  const user = use(UserContext);

  return { user };
}

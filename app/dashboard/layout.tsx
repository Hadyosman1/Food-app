import { createClient } from "@/lib/supabase/server";
import { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user: User | null = data.user;

  if (!user) {
    redirect("/auth/login");
  }

  if (user.user_metadata.role !== "admin") {
    redirect("/");
  }

  return <div>{children}</div>;
}

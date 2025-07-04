import { createClient } from "@/lib/supabase/server";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserCircle, ShieldCheck, Mail, Calendar, UserCog } from "lucide-react";
import Image from "next/image";

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();
  const user = userData?.user;

  // Fallbacks
  const email = user?.email || "Unknown";
  const createdAt = user?.created_at
    ? new Date(user.created_at).toLocaleDateString()
    : "-";
  const userMeta = user?.user_metadata || {};
  const appMeta = user?.app_metadata || {};
  const name = userMeta.first_name || "";
  const lastName = userMeta.last_name || "";
  const fullName = name || lastName ? `${name} ${lastName}`.trim() : null;
  const avatarUrl = userMeta.avatar_url || null;
  const role = userMeta.role || appMeta.role || appMeta.user_role || "customer";
  const bio = userMeta.bio || null;

  // Role badge color
  const roleColor =
    role === "admin" ? "bg-primary text-white" : "bg-secondary text-primary";

  return (
    <main>
      <div className="container flex flex-col items-center py-12">
        <Card className="border-primary/20 mx-auto w-full max-w-md shadow-lg">
          <CardHeader className="flex flex-col items-center gap-2">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt="Avatar"
                width={96}
                height={96}
                className="border-primary rounded-full border-4 object-cover shadow-md"
              />
            ) : (
              <div className="bg-primary/10 border-primary rounded-full border-4 p-4">
                <UserCircle className="text-primary h-16 w-16" />
              </div>
            )}
            <CardTitle className="mt-2 text-2xl font-bold">
              {fullName || email}
            </CardTitle>
            <div className="mt-1 flex items-center gap-2">
              <Badge className={roleColor}>
                {role === "admin" ? (
                  <>
                    <ShieldCheck className="mr-1 inline h-4 w-4" /> Admin
                  </>
                ) : (
                  <>
                    <UserCog className="mr-1 inline h-4 w-4" />{" "}
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </>
                )}
              </Badge>
              {user?.email && (
                <Badge variant="outline" className="ml-2">
                  <Mail className="mr-1 inline h-4 w-4" /> {user.email}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {bio && (
              <CardDescription className="text-muted-foreground text-center">
                {bio}
              </CardDescription>
            )}
            <div className="text-muted-foreground flex items-center justify-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Joined: {createdAt}</span>
            </div>
            {role === "admin" && (
              <div className="mt-4 flex flex-col items-center gap-2">
                <Button variant="outline" className="w-full">
                  Admin Dashboard
                </Button>
                <Button className="w-full">Manage Users</Button>
              </div>
            )}
            {role !== "admin" && (
              <div className="mt-4 flex flex-col items-center gap-2">
                <Button className="w-full">Edit Profile</Button>
                <Button variant="outline" className="w-full">
                  Order History
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

import { createClient } from "@/lib/supabase/server";
import { getAllCollections } from "@/services/collections";
import { InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import Collection from "./Collection";

export default async function Collections() {
  const supabaseClient = await createClient();
  const { data: collections, error } = await getAllCollections(supabaseClient);

  if (error) {
    console.error(error);
    return (
      <Alert variant="destructive" className="mt-6">
        <InfoIcon />
        <AlertTitle>Error while fetching collections</AlertTitle>
        <AlertDescription>{error?.message}</AlertDescription>
      </Alert>
    );
  }

  return collections.map((collection) => (
    <Collection key={collection.id} collection={collection} />
  ));
}

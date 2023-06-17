import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function UserPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?");
  }

  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}

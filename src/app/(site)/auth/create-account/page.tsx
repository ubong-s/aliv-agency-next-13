import { getServerSession } from "next-auth";
import { CreateAccountForm } from "./(components)";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Create Account - Aliv Agency",
};

export default async function CreateAccount() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <>
      <CreateAccountForm />
    </>
  );
}

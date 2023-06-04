import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import { LoginForm } from "./(components)";
import { getCsrfToken } from "next-auth/react";

export const metadata = {
  title: "Login - Aliv Agency",
};

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  const csrfToken = await getCsrfToken();

  if (session) {
    redirect("/");
  }

  return (
    <>
      <LoginForm csrfToken={csrfToken} />
    </>
  );
}

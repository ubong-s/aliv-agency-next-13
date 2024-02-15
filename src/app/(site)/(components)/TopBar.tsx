"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export const TopBar = () => {
  const { data: session } = useSession();
  const slug = session?.user._id;

  return (
    <div className="border-b border-b-concrete">
      <div className="main__container flex justify-end items-center py-1 gap-4">
        {session?.user ? (
          <Link href={`/user/${slug}`}>{session.user.name}</Link>
        ) : (
          <Link href={"/auth/login"}>Login</Link>
        )}

        {session && session.user.email && (
          <button type="button" onClick={() => signOut()}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

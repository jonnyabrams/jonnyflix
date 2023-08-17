"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import useAuthRedirect from "@/hooks/useAuthRedirect";

const Home = () => {
  const session = useSession();
  useAuthRedirect();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  const handleLogout = (event: any) => {
    event.preventDefault();

    signOut();
  };

  return <button onClick={handleLogout}>Log out</button>;
};

export default Home;

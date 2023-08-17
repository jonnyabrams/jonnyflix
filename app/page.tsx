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

  return (
    <div>
      <p className="text-white">Logged in as: {session?.data?.user?.name}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Home;

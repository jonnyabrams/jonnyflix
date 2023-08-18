"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import useAuthRedirect from "@/hooks/useAuthRedirect";
import Navbar from "@/components/Navbar";

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
    <>
      <Navbar />
    </>
  );
};

export default Home;

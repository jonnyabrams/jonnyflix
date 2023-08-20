"use client";

import { useSession } from "next-auth/react";

import useAuthRedirect from "@/hooks/useAuthRedirect";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";

const Home = () => {
  const session = useSession();
  useAuthRedirect();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <Billboard />
    </>
  );
};

export default Home;

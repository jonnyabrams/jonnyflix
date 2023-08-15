"use client";

import { signOut } from "next-auth/react";

const Home = () => {
  const handleLogout = (event: any) => {
    event.preventDefault();
    signOut();
  };

  return <button onClick={handleLogout}>Log out</button>;
};

export default Home;

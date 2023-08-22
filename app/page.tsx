"use client";

import { useSession } from "next-auth/react";

import useAuthRedirect from "@/hooks/useAuthRedirect";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";

const Home = () => {
  const session = useSession();
  useAuthRedirect();

  const { data: videos = [] } = useMovieList();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={videos} />
        <MovieList title="Trending Now" data={videos} />
      </div>
    </>
  );
};

export default Home;

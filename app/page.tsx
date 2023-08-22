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
        <MovieList title="All" data={videos} />
        <MovieList
          title="React Projects"
          data={videos.filter((video: any) => video.genre === "React")}
        />
        <MovieList
          title="Next.js Projects"
          data={videos.filter((video: any) => video.genre === "Next.js")}
        />
        <MovieList
          title="React Native Projects"
          data={videos.filter((video: any) => video.genre === "React Native")}
        />
        <MovieList
          title="Ruby on Rails Projects"
          data={videos.filter((video: any) => video.genre === "Ruby on Rails")}
        />
      </div>
    </>
  );
};

export default Home;

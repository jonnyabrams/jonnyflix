"use client";

import { useParams, useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

import useVideo from "@/hooks/useVideo";

const Watch = () => {
  const { videoId } = useParams();
  const router = useRouter();

  const { data } = useVideo(videoId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          size={40}
          className="text-white cursor-pointer"
        />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light">Watching: </span>
          {data?.title}
        </p>
        <p className="text-white text-xs">{data?.description}</p>
      </nav>
      <video autoPlay controls className="h-full w-full" src={data?.videoUrl} />
    </div>
  );
};

export default Watch;

import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface PlayButtonProps {
  videoId: string;
}

const PlayButton = ({ videoId }: PlayButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${videoId}`)}
      className="bg-white rounded-md py-1 gap-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-neutral-300 transition"
    >
      <BsFillPlayFill size={25} />
      Play
    </button>
  );
};

export default PlayButton;

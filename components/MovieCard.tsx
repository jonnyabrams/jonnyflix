import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard = ({ data }: MovieCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/watch/${data._id}`)}
      className="bg-zinc-900 col-span relative h-[12vh]"
    >
      <Image
        src={data.thumbnailUrl}
        fill={true}
        className="object-cover cursor-pointer transition duration-300 shadow-xl rounded-md hover:opacity-0 delay-300"
        alt="thumbnail"
      />

      <div className="p-0.5">
        <div className="flex flex-row items-center gap-3">
          <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white pl-0.5 rounded-full flex justify-center items-center transition hover:bg-neutral-300">
            <BsFillPlayFill size={20} />
          </div>
        </div>

        <p className="text-white text-[12px] font-semibold mt-4 line-clamp-1">
          {data.title}
        </p>

        <div className="flex mt-2 gap-2 items-center">
          <p className="text-white text-[10px]">{data.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

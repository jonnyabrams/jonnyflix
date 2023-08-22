import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard = ({ data }: MovieCardProps) => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <Image
        src={data.thumbnailUrl}
        fill={true}
        className="w-[100px] object-cover cursor-pointer transition duration-300 shadow-xl rounded-md group-hover:opacity-70 sm:group-hover:opacity-0 delay-300"
        alt="thumbnail"
      />
      <div className="opacity-0 absolute z-10 top-0 transition duration-200 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <Image
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
          width={100}
          height={60}
          src={data.thumbnailUrl}
          alt="thumbnail"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={() => {}}
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white pl-0.5 rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
              <BsFillPlayFill size={20} />
            </div>
          </div>

          <p className="text-green-400 text-[12px] font-semibold mt-4">
            New <span className="text-white">2022</span>
          </p>

          <div className="flex mt-4 gap-2 items-center">
            <p className="text-white text-[10px]">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

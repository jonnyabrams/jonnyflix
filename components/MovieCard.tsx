import Image from "next/image";

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
    </div>
  );
};

export default MovieCard;

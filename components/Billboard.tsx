import { AiOutlineInfoCircle } from "react-icons/ai";

import useBillboard from "@/hooks/useBillboard";
import PlayButton from "./PlayButton";
import useInfoModal from "@/hooks/useInfoModal";

const Billboard = () => {
  const { data } = useBillboard();
  const { openModal } = useInfoModal();

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[12px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <div
          onClick={() => openModal(data?._id)}
          className="flex items-center mt-3 md:mt-4 gap-3"
        >
          <PlayButton videoId={data?._id} />
          <button className="flex items-center bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold gap-1 hover:bg-opacity-20 transition">
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
    // <div style="width:100%;height:0px;position:relative;padding-bottom:62.500%;"><iframe src="https://streamable.com/e/4bp51j" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
  );
};

export default Billboard;

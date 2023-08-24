import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

import PlayButton from "./PlayButton";
import useInfoModal from "@/hooks/useInfoModal";
import useVideo from "@/hooks/useVideo";

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal = ({ visible, onClose }: InfoModalProps) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { videoId } = useInfoModal();
  const { data = {} } = useVideo(videoId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-96">
            <video
              className="w-full brightness-[60%] object-cover h-full"
              autoPlay
              muted
              loop
              poster={data?.thumbnailUrl}
              src={data?.videoUrl}
            />
            <div
              onClick={handleClose}
              className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            >
              <AiOutlineClose size={20} className="text-white" />
            </div>

            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>
              <PlayButton videoId={data?._id} />
            </div>
          </div>

          <div className="flex flex-col px-12 py-8 gap-2">
            <p className="text-green-400 font-semibold text-lg">New </p>
            <p className="text-white text-sm">{data?.description}</p>
            <p className="text-gray-300 font-light text-sm underline">
              <a href={data?.link} target="_blank">
                GitHub repo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;

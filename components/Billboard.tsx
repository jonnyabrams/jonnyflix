import useBillboard from "@/hooks/useBillboard";

const Billboard = () => {
  const { data } = useBillboard();

  console.log(data?.videoUrl);

  return (
    <div className="relative h-[56.26vw]">
      <video
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>
    </div>
    // <div style="width:100%;height:0px;position:relative;padding-bottom:62.500%;"><iframe src="https://streamable.com/e/4bp51j" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
  );
};

export default Billboard;

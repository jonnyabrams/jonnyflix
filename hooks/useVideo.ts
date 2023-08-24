import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useVideo = (videoId?: string) => {
  const { data, error, isLoading } = useSWR(
    videoId ? `/api/videos/${videoId}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useVideo;

import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useVideo = (id?: string) => {
  const { data, error, isLoading } = useSWR(
    id ? `/api/videos/${id}` : null,
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

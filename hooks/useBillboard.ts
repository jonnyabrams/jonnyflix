import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useBillboard = () => {
  const { data, error, isLoading } = useSWR("/api/videos/random", fetcher, {
 
  });

  return { data, error, isLoading };
};

export default useBillboard;

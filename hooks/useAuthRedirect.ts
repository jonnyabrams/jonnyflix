import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuthRedirect = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && session.status === "unauthenticated") {
      router?.push("/auth");
    }
  }, [session.status, router]);
};

export default useAuthRedirect;

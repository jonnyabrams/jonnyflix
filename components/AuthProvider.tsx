"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

// make separate component to avoid error saying can only be used client side
// if "use client" in layout we couldn't use metadata
const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;

import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import dbConnect from "@/utils/mongodb";
import User from "@/models/User";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  await dbConnect();

  if (!session?.user?.email) {
    throw new Error("Not logged in");
  }

  // if there is a user, fetch them
  const currentUser = await User.findOne({ email: session.user.email });

  if (!currentUser) {
    throw new Error("Not logged in");
  }

  return { currentUser };
};

export default serverAuth;

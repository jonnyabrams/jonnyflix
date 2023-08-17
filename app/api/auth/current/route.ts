import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/lib/serverAuth";

// returns current logged in user
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { currentUser } = await serverAuth(req);

    return res.status(200).json(currentUser);
  } catch (error: any) {
    console.log(error);
    return res.status(400).end();
  }
};

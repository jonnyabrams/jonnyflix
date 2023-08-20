import { NextRequest, NextResponse } from "next/server";

import connect from "@/utils/mongodb";
import Video from "@/models/Video";

export const GET = async (req: NextRequest) => {
  try {
    await connect();

    const videoCount = await Video.countDocuments()
    const randomIndex = Math.floor(Math.random() * videoCount);
    const randomVideo = await Video.findOne().skip(randomIndex);


    return new NextResponse(JSON.stringify(randomVideo), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
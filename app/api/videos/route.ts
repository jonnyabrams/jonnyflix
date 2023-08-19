import { NextRequest, NextResponse } from "next/server";

import connect from "@/utils/mongodb";
import Video from "@/models/Video";

export const GET = async (req: NextRequest) => {
  try {
    await connect();

    const videos = await Video.find();

    return new NextResponse(JSON.stringify(videos), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
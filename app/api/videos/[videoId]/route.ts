import { NextRequest, NextResponse } from "next/server";

import connect from "@/utils/mongodb";
import Video from "@/models/Video";

export const GET = async (
  req: NextRequest,
  { params }: { params: { videoId: string } }
) => {
  const { videoId } = params;

  try {
    await connect();

    const post = await Video.findById(videoId);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
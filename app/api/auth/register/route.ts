import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

import dbConnect from "@/utils/mongodb";
import User from "@/app/models/User";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name, email, password } = await req.json();
  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) throw new Error("User already exists");

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new NextResponse("User successfully created", {
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};

import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    console.log("inside backend");
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);
    // check if user aready exist
    const user = await User.findOne({ email });
    if (user) {
      console.log("Uswe found");
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    console.log("User not found");
    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    console.log(hashedPassword);
    const newUser = new User({ username, email, password: hashedPassword });
    console.log(newUser);
    const savedUser = await newUser.save();
    console.log(savedUser);
    return NextResponse.json({
      message: "User created successfully",
      succes: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.mesage }, { status: 500 });
  }
}

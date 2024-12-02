import dbConnect from "@/lib/DbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    const { emailOrMobile, password } = body;

    if (!emailOrMobile || !password) {
      return new Response(
        JSON.stringify({ error: "Both email/mobile and password are required" }),
        { status: 400 }
      );
    }

    // Find user by email or mobile
    const user = await User.findOne({
      $or: [{ email: emailOrMobile }, { mobile: emailOrMobile }],
    });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "User not found" }),
        { status: 404 }
      );
    }

    // Check if the password matches
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return new Response(
        JSON.stringify({ error: "Invalid password" }),
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, tenantId: user.tenantId, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set cookie
    cookies().set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return new Response(
      JSON.stringify({
        message: "Sign-in successful",
        user: { id: user._id, role: user.role },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in Sign In API:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

import dbConnect from "@/lib/DbConnect";
import User from "@/models/User";
import Tenant from "@/models/Tenant";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    const { email, mobile, password, name } = body;

    if (!email || !mobile || !password || !name) {
      return new Response(
        JSON.stringify({
          error: "All fields (email, mobile, password) are required",
        }),
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { mobile }] });

    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 400,
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new tenant
    const tenant = new Tenant({
      createdBy: null,
    });

    await tenant.save();

    // Create a new user
    const newUser = new User({
      email,
      mobile,
      name,
      password: hashedPassword,
      tenantId: tenant._id.toString(), // Link the tenant to the user
      role: "account_owner", // Default role
    });

    await newUser.save();
    console.log(newUser);
    // Update the tenant's `createdBy` field
    tenant.createdBy = newUser._id;
    await tenant.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser._id, tenantId: tenant._id, role: newUser.role },
      JWT_SECRET
    );

    // Set cookie
    cookies().set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return new Response(
      JSON.stringify({
        message: "New user and tenant created",
        data: {
          email: newUser.email,
          mobile: newUser.mobile,
          name: newUser.name,
        },
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in API:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

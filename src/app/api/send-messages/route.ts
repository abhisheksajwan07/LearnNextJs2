import { User } from "@/model/User";
import dbConnect from "@/lib/dbConnect";
import { Message } from "@/model/User";
import { success } from "zod";
import { create } from "domain";

export async function POST(request: Request) {
  await dbConnect();
  const { username, content } = await request.json();

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 401,
        }
      );
    }
    if (!user.isAcceptingMessages) {
      return Response.json(
        {
          success: false,
          message: "user not accepting the message",
        },
        {
          status: 403,
        }
      );
    }
    const newMessage = { content, createdAt: new Date() };
    user.messages.push(newMessage as Message);
    await user.save();
    return Response.json(
      {
        success: true,
        message: "message sent successfully",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error adding message:", err);
    return Response.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
}

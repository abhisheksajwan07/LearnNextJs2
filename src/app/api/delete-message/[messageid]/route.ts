import dbConnect from "@/lib/dbConnect";
import { User as DBUser } from "@/model/User";

import { User } from "next-auth";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: { messageid: string };
  }
) {
  const messageId = params.messageid;
  await dbConnect();
  const session = await getServerSession(authOptions);
  const user: User = session?.user as User;
  if (!session || !session.user) {
    return Response.json(
      {
        success: false,
        message: "not authenticated",
      },
      { status: 401 }
    );
  }

  try {
    const updateResult = await DBUser.updateOne(
      { _id: user._id },
      { $pull: { messages: { _id: messageId } } }
    );
    if (updateResult.modifiedCount == 0) {
      return Response.json(
        {
          success: false,
          message: "Message not found or already delete",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        messages: "message deleted",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log("an unexpected error occured in delete message route:", err);
    return Response.json(
      {
        success: false,
        message: "error deleting message",
      },
      {
        status: 500,
      }
    );
  }
}

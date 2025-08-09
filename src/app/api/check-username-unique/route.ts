import dbConnect from "@/lib/dbConnect";
import { User } from "@/model/User";
import { z } from "zod";
import { usernameValidation } from "@/schemas/signUpSchema";

const UsernameQuerySchema = z.object({
  username: usernameValidation,
});

export async function GET(request: Request) {
  await dbConnect();
  //   localhost:3000/api/check?username=hitesh?phone=android
  try {
    const { searchParams } = new URL(request.url);

    const queryParam = { username: searchParams.get("username") };
    
    // validate with zod
    const result = UsernameQuerySchema.safeParse(queryParam);

    console.log(JSON.stringify(result, null, 2));

    if (!result.success) {
      const formattedError = result.error.format();
      console.log(
        "Formatted Error:",
        JSON.stringify(result.error.format(), null, 2)
      ); // formatted errors
      const usernameError = formattedError.username?._errors || [];
      console.log(
        "Issues Array:",
        JSON.stringify(result.error.issues, null, 2)
      );
      return Response.json(
        {
          success: false,
          message:
            usernameError?.length > 0
              ? usernameError.join(",")
              : "Invalid query paramter",
        },
        { status: 400 }
      );
    }
    const { username } = result.data;
    const existingVerifiedUser = await User.findOne({
      username,
      isVerified: true,
    });
    if (existingVerifiedUser) {
      return Response.json(
        {
          success: false,
          message: "username is already taken",
        },
        {
          status: 400,
        }
      );
    }
    return Response.json(
      {
        success: true,
        message: "username is unique",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error checking username:", err);
    return Response.json(
      {
        success: false,
        message: "Error checking username",
      },
      { status: 500 }
    );
  }
}

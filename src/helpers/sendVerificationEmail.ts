import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifycode: string
): Promise<ApiResponse> {
  try {
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Verification Code",
      react: VerificationEmail({ username, otp: verifycode }),
    });
    return {
        success:true,
        message:"Verification email is sent"
    }
  } catch (emailError) {
    console.error("error sending verification email",emailError)
    return{
        success:false,
        message:"verificatione mail isn't sent"
    }
  }
}

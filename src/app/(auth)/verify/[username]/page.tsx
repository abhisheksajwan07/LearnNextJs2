"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { verifySchema } from "@/schemas/verifySchema";
import { ApiResponse } from "@/types/apiResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";

import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { toast } from "sonner";
import * as z from "zod";

const VerifyAccount = () => {
  const router = useRouter();
  const params = useParams<{ username: string }>();

  const form = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema),
    defaultValues: { code: "" },
  });
  const onSubmit = async (data: z.infer<typeof verifySchema>) => {
    try {
      const res = await axios.post(`/api/verify-code`, {
        username: params.username,
        code: data.code,
      });
      console.log(res);
      console.log(res.data.message);
      toast.success(res.data.message);
      router.replace("signin");
    } catch (err) {
      console.error("error in verifying", err);
      const axiosError = err as AxiosError<ApiResponse>;
      toast.error(
        axiosError.response?.data?.message ??
          "An error occurred. Please try again"
      );
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Verify Your Account
          </h1>
          <p className="mb-4">Enter the verification code sent to your email</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="code"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Code</FormLabel>
                  <Input
                    {...field}
                    placeholder="enter 6 digit code"
                    disabled={form.formState.isSubmitting}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full"
            >
              {form.formState.isSubmitting ? "Verifying..." : "Verify"}
            </Button>
          </form>
        </Form>
        <div className="text-center text-sm text-gray-500">
          Didn’t get the code?{" "}
          <button
            className="text-blue-600 hover:underline"
            onClick={() => toast.info("Resend code feature coming soon")}
          >
            Resend
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;

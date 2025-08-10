"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { signUpSchema } from "@/schemas/signUpSchema";
import axios, { AxiosError } from "axios";

import { ApiResponse } from "@/types/apiResponse";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/schemas/signInSchema";
import { signIn } from "next-auth/react";
const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  //zod implementation

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    const res = await signIn("credentials", {
        redirect:false,
      email: data.email,
      password: data.password,
    });
    if(res?.error){
        toast.error(res?.error?.data?.message)
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Join True Feedback
          </h1>
          <p className="text-gray-600 text-lg">
            Sign up to start your anonymous adventure
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-700">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-md"
                    />
                  </FormControl>
                  <FormMessage className="text-red-600 mt-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-700">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-md"
                    />
                  </FormControl>
                  <FormMessage className="text-red-600 mt-1" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-semibold rounded-lg py-3 transition duration-300 flex justify-center items-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Please wait
                </>
              ) : (
                "Sign up"
              )}
            </Button>
          </form>
        </Form>

        <div className="mt-6 text-center text-gray-700">
          <p>
            Already a member?{" "}
            <Link
              href="/signin"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

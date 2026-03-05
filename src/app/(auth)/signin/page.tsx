"use client";
import React from "react";
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
  const router = useRouter();
  //zod implementation

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      password: "",
      identifier: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    const res = await signIn("credentials", {
      redirect: false,
      identifier: data.identifier,
      password: data.password,
    });

    if (res?.error) {
      if (res.error === "CredentialsSignin") {
        toast.error("incorrect username or password");
      } else {
        toast.error(res.error);
      }
    }

    if (res?.url) {
      router.replace("/dashboard");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm">Sign in to continue your secret conversations</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="identifier"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email/Username</FormLabel>
                  <Input {...field} />
                  <FormMessage className="text-red-600 mt-1" />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" {...field} />
                  <FormMessage className="text-red-600 mt-1" />
                </FormItem>
              )}
            />
            <Button className="w-full bg-black text-white hover:bg-gray-800" type="submit">
              Sign In
            </Button>
          </form>
        </Form>
        <div className="text-center mt-4 text-sm">
          <p className="text-gray-600">
            Not a member yet?{" "}
            <Link href="/signup" className="text-black font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

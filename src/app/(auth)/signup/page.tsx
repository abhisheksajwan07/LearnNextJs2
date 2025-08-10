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
const Page = () => {
  const [username, setuserName] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const debounced = useDebounceCallback(setuserName, 300);
  const router = useRouter();
  //zod implementation

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });


  useEffect(() => {
    console.log(form);
    console.log("Errors: ", form.formState.errors);
  }, [form.formState.errors]);

  
  useEffect(() => {
    const checkUsernameUnique = async () => {
      if (username) {
        setIsCheckingUsername(true);
        setUsernameMessage("");
        try {
          const res = await axios.get(
            `/api/check-username-unique?username=${username}`
          );
          console.log("api response", res);
          console.log("api response", res.data);
          setUsernameMessage(res.data.message);
        } catch (err) {
          const axiosError = err as AxiosError<ApiResponse>;
          console.error("Axios error full:", axiosError);
          console.error(
            "Axios error response data:",
            axiosError.response?.data
          );
          setUsernameMessage(
            axiosError.response?.data.message ?? "error checking username"
          );
        } finally {
          setIsCheckingUsername(false);
        }
      }
    };
    checkUsernameUnique();
  }, [username]);

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    console.log(" onSubmit triggered", data);

    setIsSubmitting(true);
    try {
      console.log("Form is valid, submitting to API...", data);

      const res = await axios.post<ApiResponse>("/api/signup", data);
      toast.success(res.data.message);
      router.replace(`/verify/${data.username}`);
      setIsSubmitting(false);
    } catch (err) {
      console.error("error in signup of user", err);
      const axiosError = err as AxiosError<ApiResponse>;
      const errorMessage = axiosError.response?.data.message;
      toast.error(errorMessage);
      setIsSubmitting(false);
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-700">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        debounced(e.target.value);
                      }}
                      className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 rounded-md"
                    />
                  </FormControl>
                  <div className="mt-1 flex items-center space-x-2">
                    {isCheckingUsername && (
                      <Loader2 className="animate-spin h-5 w-5 text-blue-500" />
                    )}
                    <p
                      className={`text-sm ${
                        usernameMessage === "username is unique"
                          ? "text-green-500"
                          : "text-red-600"
                      }`}
                    >
                      {usernameMessage}
                    </p>
                  </div>
                  <FormMessage className="text-red-600 mt-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
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

"use client";
import { useCompletion } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { messageSchema } from "@/schemas/messageSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/apiResponse";
import { toast } from "sonner";

const specialChar = "||";

const parseStringMessages = (message: string): string[] => {
  return message.split(specialChar);
};

const initialMessageString =
  "What's your favorite movie?||Do you have any pets?||What's your dream job?";

export default function SendMessage() {
  const params = useParams<{ username: string }>();
  const username = params.username;

  const {
    complete,
    completion,
    isLoading: isSuggestLoading,
    error,
  } = useCompletion({
    api: "/api/suggest-messages",
    initialCompletion: initialMessageString,
  });

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
  });
  const messageContent = form.watch("content");
  const handleMessageClick = (message: string) => {
    form.setValue("content", message);
  };
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    setIsLoading(true);
    try {
      const res = await axios.post<ApiResponse>("/api/send-messages", {
        ...data,
        username,
      });
      toast.success(res.data.message);
      form.reset({ ...form.getValues(), content: "" });
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast.error(axiosError.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSuggestedMessages = async () => {
    try {
      complete("");
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  return (
    <div className="container mx-auto my-12 p-8 bg-white border border-gray-100 shadow-sm rounded-xl max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-tight">
        Send Anonymous Message
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Send Anonymous Message to @{username}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your anonymous message here..."
                    className="resize-none min-h-[120px] focus:ring-black focus:border-black"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            {isLoading ? (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit" className="mt-4 bg-black text-white hover:bg-gray-800 font-semibold px-8" disabled={isLoading || !messageContent}>
                Send It
              </Button>
            )}
          </div>
        </form>
      </Form>

      <div className="space-y-6 mt-12">
        <div className="space-y-2">
          <Button
            onClick={fetchSuggestedMessages}
            variant="outline"
            className="my-4"
            disabled={isSuggestLoading}
          >
            Suggest Messages
          </Button>
          <p className="text-sm text-gray-500">Click on any message below to select it.</p>
        </div>
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <h3 className="text-xl font-semibold tracking-tight">Suggestions</h3>
          </CardHeader>
          <CardContent className="flex flex-col space-y-3">
            {error ? (
              <p className="text-red-500 text-sm">{error.message}</p>
            ) : (
              parseStringMessages(completion).map((message, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start h-auto py-3 whitespace-normal text-left font-normal border-gray-200 hover:bg-gray-50 hover:text-black"
                  onClick={() => handleMessageClick(message)}
                >
                  {message}
                </Button>
              ))
            )}
          </CardContent>
        </Card>
      </div>
      <Separator className="my-10 bg-gray-100" />
      <div className="text-center">
        <div className="mb-4 text-lg font-medium">Want your own message board?</div>
        <Link href={"/signup"}>
          <Button className="bg-black text-white hover:bg-gray-800 font-semibold px-8">Create Your Account</Button>
        </Link>
      </div>
    </div>
  );
}

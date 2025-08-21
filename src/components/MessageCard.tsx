"use client";

import React, { useState } from "react";
import axios, { AxiosError } from "axios";

import dayjs from "dayjs";
import { X } from "lucide-react";
import { Message } from "@/model/User";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";

import { ApiResponse } from "@/types/apiResponse";
import { toast } from "sonner";

type MessageCardProps = {
  message: Message;
  onMessageDelete: (messageId: string) => void;
};

export function MessageCard({ message, onMessageDelete }: MessageCardProps) {
  const handleDeleteConfirm = async () => {
    try {
      const response = await axios.delete<ApiResponse>(
        `/api/delete-message/${message._id}`
      );
      console.log(response);
      // .message ke andar nahi aarha tha response ka message
      toast.success(response?.data?.messages);
      onMessageDelete(message._id);
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast.error(
        axiosError.response?.data.message ?? "Failed to delete message"
      );
    }
  };

  return (
    <Card >
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl">{message.content}</CardTitle>
          <AlertDialog >
            <AlertDialogTrigger asChild>
              <Button
                className="bg-red-600 outline-0 text-white border border-red-700"
                size="icon"
              >
                <X className="w-2 h-2  " />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent  >
              <AlertDialogHeader >
                <AlertDialogTitle >Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription >
                  This action cannot be undone. This will permanently delete
                  this message.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteConfirm}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="text-sm">
          {dayjs(message.createdAt).format("MMM D, YYYY h:mm A")}
        </div>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}

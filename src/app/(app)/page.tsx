"use client";

import messages from "@/messages.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
export default function Home() {
  return (
    <>
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-20 bg-black text-white">
        <section className="text-center mb-12 md:mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Dive into the World of Anonymous Feedback
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            True Feedback — Where your identity remains a secret.
          </p>
        </section>

        {/* Carousel for Messages */}
        <Carousel
          plugins={[Autoplay({ delay: 3000 })]}
          className="w-full max-w-lg md:max-w-xl"
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className="p-4">
                <Card className="bg-[#111] border-[#333] text-white">
                  <CardHeader>
                    <CardTitle className="tracking-tight text-white">{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                    <Mail className="flex-shrink-0 text-gray-400 mt-1" />
                    <div>
                      <p className="text-gray-300">{message.content}</p>
                      <p className="text-xs text-gray-500 mt-2 font-medium">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </main>

      {/* Footer */}
      <footer className="text-center p-6 bg-black border-t border-[#333] text-sm text-gray-500 font-medium">
        © {new Date().getFullYear()} True Feedback. All rights reserved.
      </footer>
    </>
  );
}

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});
// set runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const prompt = `Create a single string containing three open-ended and engaging questions separated by "||". These questions are for an anonymous social messaging platform like Qooh.me and should be:

- Suitable for a diverse audience.
- Focused on universal, positive themes.
- Free from personal or sensitive topics.
- Designed to encourage friendly and thoughtful interaction.

For example, format your output like this:  
"What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?"

Make sure the questions spark curiosity and create a welcoming atmosphere for conversation.
`;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      max_tokens: 200,
      stream: true,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    // convert response into a text-stream
    const stream = OpenAIStream(response);
    // respond with stream
    return new StreamingTextResponse(stream);
  } catch (err) {
    if (err instanceof OpenAI.APIError) {
      const { name, status, headers, message } = err;
      return NextResponse.json(
        {
          name,
          status,
          headers,
          message,
        },
        { status }
      );
    } else {
      console.error("an unexpected error occured", err);
      throw err;
    }
  }
}

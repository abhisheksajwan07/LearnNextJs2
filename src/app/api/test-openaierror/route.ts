import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: "FAKE_KEY", 
});

export async function GET() {
  try {
    const res = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "Hello" }],
    });

    return NextResponse.json(res);
  } catch (error) {
    console.log("------ Raw Error ------");
    console.log(error);

    console.log("\n------ Full Structure ------");
    console.dir(error, { depth: null });

    console.log("\n------ Specific Fields ------");
    console.log("Name:", error.name);
    console.log("Status:", error.status);
    console.log("Message:", error.message);
    console.log("Headers:", error.headers);

    return NextResponse.json({ error: "Check terminal logs" }, { status: 500 });
  }
}

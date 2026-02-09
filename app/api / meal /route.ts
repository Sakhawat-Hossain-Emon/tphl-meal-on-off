import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  await fetch(process.env.GAS_API_URL as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return NextResponse.json({ message: "ডাটা পাঠানো হয়েছে" });
}

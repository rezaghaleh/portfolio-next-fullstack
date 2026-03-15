import { NextResponse } from "next/server";
import { publicQuizQuestions } from "@/data/quiz";

export async function GET() {
  return NextResponse.json({ questions: publicQuizQuestions });
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const entries = await prisma.quizScore.findMany({
    take: 10,
    orderBy: [{ score: "desc" }, { percentage: "desc" }, { createdAt: "asc" }],
    select: {
      id: true,
      nickname: true,
      score: true,
      total: true,
      percentage: true,
      createdAt: true
    }
  });

  return NextResponse.json({ entries });
}

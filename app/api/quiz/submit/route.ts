import { NextResponse } from "next/server";
import { quizQuestions } from "@/data/quiz";
import { prisma } from "@/lib/prisma";
import { getClientIp, hashIp, normalizeNickname } from "@/lib/utils";
import { quizSubmissionSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = quizSubmissionSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  const { answers, nickname } = parsed.data;

  if (answers.length !== quizQuestions.length) {
    return NextResponse.json(
      { error: "Please answer every quiz question before submitting." },
      { status: 400 }
    );
  }

  const normalizedNickname = normalizeNickname(nickname);
  const ipHash = hashIp(getClientIp(request));
  const oneMinuteAgo = new Date(Date.now() - 60 * 1000);

  const duplicateWindow = await prisma.quizScore.findFirst({
    where: {
      ipHash,
      nickname: normalizedNickname,
      createdAt: { gte: oneMinuteAgo }
    }
  });

  if (duplicateWindow) {
    return NextResponse.json(
      { error: "Please wait a minute before submitting another score with the same nickname." },
      { status: 429 }
    );
  }

  let correct = 0;
  const feedback = quizQuestions.map((question, index) => {
    const isCorrect = answers[index] === question.correctOption;

    if (isCorrect) {
      correct += 1;
    }

    return {
      id: question.id,
      correctOption: question.correctOption,
      explanation: question.explanation
    };
  });

  const total = quizQuestions.length;
  const percentage = Math.round((correct / total) * 100);

  await prisma.quizScore.create({
    data: {
      nickname: normalizedNickname,
      score: correct,
      correct,
      total,
      percentage,
      ipHash
    }
  });

  const leaderboard = await prisma.quizScore.findMany({
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

  return NextResponse.json({
    result: {
      score: correct,
      total,
      percentage,
      feedback
    },
    leaderboard
  });
}

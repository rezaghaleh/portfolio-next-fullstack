import { z } from "zod";

export const quizSubmissionSchema = z.object({
  nickname: z
    .string()
    .trim()
    .min(2, "Nickname must be at least 2 characters.")
    .max(24, "Nickname must be 24 characters or less."),
  answers: z
    .array(z.number().int().min(0).max(3))
    .min(1, "At least one answer is required.")
    .max(10, "Too many answers submitted.")
});

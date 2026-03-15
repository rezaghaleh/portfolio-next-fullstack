import type { PublicQuizQuestion, QuizQuestion } from "@/types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "js-array-map",
    category: "JavaScript",
    prompt: "What does Array.prototype.map return?",
    options: [
      "The original array with items changed in place",
      "A new array created from the callback result for each item",
      "Only the first matching item",
      "A boolean indicating whether all items passed"
    ],
    correctOption: 1,
    explanation:
      "map always returns a new array with one output value for each input item."
  },
  {
    id: "java-interface",
    category: "Java",
    prompt: "Which statement best describes a Java interface?",
    options: [
      "It stores object instances in memory",
      "It defines a contract that classes can implement",
      "It is used only for database access",
      "It replaces all abstract classes in every case"
    ],
    correctOption: 1,
    explanation:
      "Interfaces define behavior contracts that classes agree to implement."
  },
  {
    id: "sql-join",
    category: "SQL",
    prompt: "Which join returns all rows from the left table and matching rows from the right table?",
    options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "CROSS JOIN"],
    correctOption: 2,
    explanation:
      "LEFT JOIN keeps all rows from the left table even when there is no right-side match."
  },
  {
    id: "api-status-code",
    category: "APIs",
    prompt: "Which HTTP status code is most appropriate when a resource is successfully created?",
    options: ["200", "201", "204", "404"],
    correctOption: 1,
    explanation: "201 Created is the standard success response for a new resource."
  },
  {
    id: "debugging-root-cause",
    category: "Debugging",
    prompt: "What is usually the best first step when debugging a bug you can reproduce consistently?",
    options: [
      "Rewrite the entire feature",
      "Add random fixes until one works",
      "Reproduce it, isolate it, and inspect the failing path",
      "Delete logs to reduce noise"
    ],
    correctOption: 2,
    explanation:
      "Reproducibility and isolation are what make debugging efficient and reliable."
  }
];

export const publicQuizQuestions: PublicQuizQuestion[] = quizQuestions.map(
  ({ correctOption, ...question }) => question
);

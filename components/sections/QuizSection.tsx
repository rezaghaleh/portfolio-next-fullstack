"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LeaderboardEntry, PublicQuizQuestion } from "@/types";

type SubmissionResult = {
  score: number;
  total: number;
  percentage: number;
  feedback: Array<{
    id: string;
    correctOption: number;
    explanation: string;
  }>;
};

export function QuizSection() {
  const [nickname, setNickname] = useState("");
  const [questions, setQuestions] = useState<PublicQuizQuestion[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [result, setResult] = useState<SubmissionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const questionsResponse = await fetch("/api/quiz/questions", { cache: "no-store" });
        const questionsData = await questionsResponse.json();
  
        setQuestions(questionsData.questions ?? []);
        setAnswers(new Array((questionsData.questions ?? []).length).fill(-1));
      } catch {
        setError("Unable to load quiz questions right now.");
      }
  
      try {
        const leaderboardResponse = await fetch("/api/quiz/leaderboard", { cache: "no-store" });
        const leaderboardData = await leaderboardResponse.json();
  
        setLeaderboard(leaderboardData.entries ?? []);
      } catch {
        console.error("Leaderboard failed to load.");
      }
    };
  
    void loadInitialData();
  }, []);

  const allAnswered = useMemo(() => answers.every((answer) => answer >= 0), [answers]);

  const handleOptionChange = (questionIndex: number, optionIndex: number) => {
    setAnswers((current) => current.map((value, index) => (index === questionIndex ? optionIndex : value)));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setResult(null);

    if (!allAnswered) {
      setError("Please answer every question before submitting.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname, answers })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Something went wrong while submitting your quiz.");
        return;
      }

      setResult(data.result);
      setLeaderboard(data.leaderboard ?? []);
    } catch {
      setError("Unable to submit right now. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="dev-quiz" className="section-shell">
      <Card>
        <SectionHeading
          eyebrow="06"
          title="Mini Coding Quiz / Dev Challenge"
          description="A backend-powered portfolio feature that serves questions from an API, validates answers on the server, stores scores in a database, and returns a live leaderboard."
        />

        <div className="quiz-layout">
          <form className="quiz-panel" onSubmit={handleSubmit}>
            <label className="field-group">
              <span>Nickname</span>
              <input
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                placeholder="Enter your nickname"
                maxLength={24}
                required
              />
            </label>

            <div className="question-list">
              {questions.map((question, questionIndex) => (
                <article className="question-card" key={question.id}>
                  <div className="question-header">
                    <p className="question-category">{question.category}</p>
                    <h3>
                      {questionIndex + 1}. {question.prompt}
                    </h3>
                  </div>
                  <div className="option-list">
                    {question.options.map((option, optionIndex) => {
                      const checked = answers[questionIndex] === optionIndex;
                      return (
                        <label key={option} className={checked ? "option-card selected" : "option-card"}>
                          <input
                            type="radio"
                            name={question.id}
                            checked={checked}
                            onChange={() => handleOptionChange(questionIndex, optionIndex)}
                          />
                          <span>{option}</span>
                        </label>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>

            {error ? <p className="error-text">{error}</p> : null}

            <button type="submit" className="primary-button" disabled={loading}>
              {loading ? "Submitting..." : "Submit Quiz"}
            </button>

            {result ? (
              <div className="result-panel">
                <h3>
                  Score: {result.score}/{result.total} ({result.percentage}%)
                </h3>
                <ul>
                  {result.feedback.map((item, index) => (
                    <li key={item.id}>
                      <strong>Question {index + 1}:</strong> {item.explanation}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </form>

          <aside className="leaderboard-panel">
            <div className="leaderboard-header">
              <h3>Leaderboard</h3>
              <p>Top scores saved from the backend.</p>
            </div>
            <ol className="leaderboard-list">
              {leaderboard.map((entry) => (
                <li key={entry.id}>
                  <div>
                    <strong>{entry.nickname}</strong>
                    <span>
                      {entry.score}/{entry.total}
                    </span>
                  </div>
                  <small>{entry.percentage}%</small>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </Card>
    </section>
  );
}

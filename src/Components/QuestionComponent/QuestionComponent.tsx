import { useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * Answer types
 */
type Answer = "no" | "inPart" | "yes";

/**
 * Question Types
 */
interface Question {
  id: string;
  text: string;
  category: string;
}

/**
 * Component
 */
export default function QuestionComponent() {
  const { t } = useTranslation();

  const questions: Question[] = [
    {
      id: "q1",
      text: t("certification.questionSection.questions.q1.text"),
      category: t("certification.questionSection.questions.q1.category"),
    },
    {
      id: "q2",
      text: t("certification.questionSection.questions.q2.text"),
      category: t("certification.questionSection.questions.q2.category"),
    },
    {
      id: "q3",
      text: t("certification.questionSection.questions.q3.text"),
      category: t("certification.questionSection.questions.q3.category"),
    },
    {
      id: "q4",
      text: t("certification.questionSection.questions.q4.text"),
      category: t("certification.questionSection.questions.q4.category"),
    },
  ];

  const [answers, setAnswers] = useState<Record<string, Answer | null>>(
    Object.fromEntries(questions.map((q) => [q.id, null]))
  );

  const [result, setResult] = useState<string | null>(null);

  const levels = [
    { min: 0, max: 2, label: "SBBS-1 Alerte – Dysfonctionnement global" },
    { min: 3, max: 4, label: "SBBS-2 Précaire – Risques importants" },
    {
      min: 5,
      max: 6,
      label: "SBBS-3 Fonctionnel – Fragilité organisationnelle",
    },
    { min: 7, max: 8, label: "SBBS-4 Structuré – Structuration moyenne" },
    { min: 9, max: 10, label: "SBBS-5 Avancé – Maturité avancée" },
    { min: 11, max: 12, label: "SBBS-6 Élite – Entreprise solide et autonome" },
  ];

  const handleAnswer = (questionId: string, value: Answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    let score = 0;
    Object.values(answers).forEach((answer) => {
      if (answer === "no") score += 0;
      if (answer === "inPart") score += 1;
      if (answer === "yes") score += 2;
    });

    const level = levels.find((lvl) => score >= lvl.min && score <= lvl.max);
    setResult(level ? level.label : "Aucun résultat");
  };

  const options: { value: Answer; label: string }[] = [
    { value: "no", label: t("certification.questionSection.Answer.no") },
    {
      value: "inPart",
      label: t("certification.questionSection.Answer.inPart"),
    },
    { value: "yes", label: t("certification.questionSection.Answer.yes") },
  ];

  return (
    <div className="p-5 max-w-xl mx-auto shadow rounded-lg bg-white mb-5">
      {questions.map((question) => (
        <div key={question.id} className="mb-6">
          <p className="font-bold mb-2">{question.category}</p>
          <p className="mb-3">{question.text}</p>
          <div className="flex gap-3">
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(question.id, opt.value)}
                className={`px-4 py-2 rounded-lg border ${
                  answers[question.id] === opt.value
                    ? "bg-sbbsYellow text-black font-bold"
                    : "bg-gray-100"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={calculateScore}
        className="mt-6 w-full bg-sbbsYellow text-black font-bold py-3 rounded-full"
      >
        {t("certification.questionSection.calculate.btn")}
      </button>

      {result && (
        <div className="mt-6 text-center text-lg font-semibold text-sbbsBlue">
          {t("certification.questionSection.resultPrefix")} {result}
        </div>
      )}
    </div>
  );
}

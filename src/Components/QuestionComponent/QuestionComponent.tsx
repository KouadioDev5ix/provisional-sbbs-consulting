import { useState } from "react";

/**
 * Answer types
 */
type Answer = "Non" | "En partie" | "Oui";

/**
 * Question Types
 */
interface Question {
  id: string;
  text: string;
  category: string;
}

/**
 * Simulator question
 */

const questions: Question[] = [
  {
    id: "q1",
    text: "Avez-vous un organigramme clair et des fiches de poste définis ?",
    category: "Organisation & Structure",
  },
  {
    id: "q2",
    text: "Vos processus clés sont-ils documentés et optimisés ?",
    category: "Organisation & Structure",
  },
  {
    id: "q3",
    text: "Disposez-vous de tableaux de bord financiers à jour ?",
    category: "Gestion financière",
  },
  {
    id: "q4",
    text: "Disposez-vous de tableaux de bord commerciaux à jour ?",
    category: "Performance commerciale",
  },
];

/**
 * Obtions for answer
 */
const options: Answer[] = ["Non", "En partie", "Oui"];

/**
 * Barème SBBS
 */
const levels = [
  { min: 0, max: 2, label: "SBBS-1 Alerte – Dysfonctionnement global" },
  { min: 3, max: 4, label: "SBBS-2 Précaire – Risques importants" },
  { min: 5, max: 6, label: "SBBS-3 Fonctionnel – Fragilité organisationnelle" },
  { min: 7, max: 8, label: "SBBS-4 Structuré – Structuration moyenne" },
  { min: 9, max: 10, label: "SBBS-5 Avancé – Maturité avancée" },
  { min: 11, max: 12, label: "SBBS-6 Élite – Entreprise solide et autonome" },
];

export default function QurestionComponent() {
  const [answers, setAnswers] = useState<Record<string, Answer | null>>(
    Object.fromEntries(questions.map((questioon) => [questioon.id, null]))
  );

  const [result, setResult] = useState<string | null>(null);

  /**
   *
   *@function handleAnswer
   * @param questionId
   * @param value
   */

  const handleAnswer = (questionId: string, value: Answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  /**
   * @function  calculateScore
   */
  const calculateScore = () => {
    let score = 0;
    Object.values(answers).forEach((answer) => {
      if (answer === "Non") score += 0;
      if (answer === "En partie") score += 1;
      if (answer === "Oui") score += 2;
    });

    const level = levels.find(
      (levelm) => score >= levelm.min && score <= levelm.max
    );
    setResult(level ? level.label : "Aucun résultat");
  };

  return (
    <div className="p-5 max-w-xl mx-auto shadow rounded-lg bg-white mb-5">
      {questions.map((question) => (
        <div key={question.id} className="mb-6">
          <p className="font-bold mb-2">{question.category}</p>
          <p className="mb-3">{question.text}</p>
          <div className="flex gap-3">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(question.id, opt)}
                className={`px-4 py-2 rounded-lg border ${
                  answers[question.id] === opt
                    ? "bg-sbbsYellow text-black font-bold"
                    : "bg-gray-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={calculateScore}
        className="mt-6 w-full bg-sbbsYellow text-black font-bold py-3 rounded-full"
      >
        Calculer mon score SBBS
      </button>

      {result && (
        <div className="mt-6 text-center text-lg font-semibold text-sbbsBlue">
          Votre score : {result}
        </div>
      )}
    </div>
  );
}

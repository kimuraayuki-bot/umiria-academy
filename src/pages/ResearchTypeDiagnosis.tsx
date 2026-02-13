import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { diagnoseType, diagnosisQuestions } from "../data/diagnosis";

type Choice = {
  value: number;
  side: "agree" | "neutral" | "disagree";
  size: "sm" | "md" | "lg";
  label: string;
};

const choices: Choice[] = [
  { value: 3, side: "agree", size: "lg", label: "強く同意" },
  { value: 2, side: "agree", size: "md", label: "同意" },
  { value: 1, side: "agree", size: "sm", label: "やや同意" },
  { value: 0, side: "neutral", size: "sm", label: "中立" },
  { value: -1, side: "disagree", size: "sm", label: "やや不同意" },
  { value: -2, side: "disagree", size: "md", label: "不同意" },
  { value: -3, side: "disagree", size: "lg", label: "強く不同意" },
];

export default function ResearchTypeDiagnosis() {
  const navigate = useNavigate();
  const initialAnswers = useMemo(
    () =>
      Object.fromEntries(diagnosisQuestions.map((q) => [q.id, null])) as Record<string, number | null>,
    []
  );

  const [answers, setAnswers] = useState<Record<string, number | null>>(initialAnswers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState<string>("");

  const question = diagnosisQuestions[currentIndex];
  const answeredCount = diagnosisQuestions.filter((q) => answers[q.id] !== null).length;
  const progressRatio = answeredCount / diagnosisQuestions.length;
  const allAnswered = answeredCount === diagnosisQuestions.length;

  const selectChoice = (value: number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
    setError("");
  };

  const nextQuestion = () => {
    if (answers[question.id] === null) {
      setError("回答を選択してから次へ進んでください。");
      return;
    }
    setError("");
    setCurrentIndex((prev) => Math.min(prev + 1, diagnosisQuestions.length - 1));
  };

  const prevQuestion = () => {
    setError("");
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const runDiagnosis = () => {
    if (!allAnswered) {
      setError("すべての設問に回答してください。");
      return;
    }
    try {
      const normalized = Object.fromEntries(
        Object.entries(answers).map(([key, value]) => [key, Number(value)])
      ) as Record<string, number>;
      const diagnosed = diagnoseType(normalized);
      const query = new URLSearchParams({
        a: String(diagnosed.score.A),
        b: String(diagnosed.score.B),
        c: String(diagnosed.score.C),
        d: String(diagnosed.score.D),
      }).toString();
      navigate(
        `/diagnosis/result/${diagnosed.typeId}?${query}`
      );
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "診断中にエラーが発生しました。");
    }
  };

  const resetAll = () => {
    setAnswers(initialAnswers);
    setCurrentIndex(0);
    setError("");
  };

  return (
    <div className="pageStack">
      <div className="card">
        <h2 style={{ marginBottom: 8 }}>研究室キャラ診断</h2>
        <p>
          12問に回答し、あなたの研究スタイルを16タイプで診断します。
        </p>
      </div>

      <div className="card diagnosisShell">
        <div className="diagnosisTop">
          <span className="badge">Q{currentIndex + 1} / {diagnosisQuestions.length}</span>
          <span className="diagnosisHelp">回答済み {answeredCount} / {diagnosisQuestions.length}</span>
        </div>

        <div className="diagnosisProgressTrack">
          <div className="diagnosisProgressFill" style={{ width: `${progressRatio * 100}%` }} />
        </div>

        <h3 className="diagnosisQuestionTitle">{question.text}</h3>

        <div className="diagnosisScaleWrap">
          <span className="diagnosisScaleEdge">同意</span>
          <div className="diagnosisScaleButtons">
            {choices.map((c) => (
              <button
                key={c.value}
                type="button"
                className={`diagnosisChoice ${c.side} ${c.size} ${answers[question.id] === c.value ? "active" : ""}`}
                onClick={() => selectChoice(c.value)}
                aria-label={c.label}
                title={c.label}
              />
            ))}
          </div>
          <span className="diagnosisScaleEdge">不同意</span>
        </div>

        <div className="diagnosisLegend">
          {choices.map((c) => (
            <span key={c.value}>{c.value > 0 ? `+${c.value}` : c.value}: {c.label}</span>
          ))}
        </div>

        <div className="row" style={{ marginTop: 12 }}>
          <button className="btn" onClick={prevQuestion} disabled={currentIndex === 0}>
            前へ
          </button>
          <button className="btn" onClick={nextQuestion} disabled={currentIndex === diagnosisQuestions.length - 1}>
            次へ
          </button>
          <button className="btn primary" onClick={runDiagnosis}>
            診断する
          </button>
          <button className="btn" onClick={resetAll}>
            リセット
          </button>
        </div>

        {error ? <p className="textDanger">{error}</p> : null}
      </div>
    </div>
  );
}

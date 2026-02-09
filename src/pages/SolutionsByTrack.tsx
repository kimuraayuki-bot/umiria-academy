import { Link, useParams } from "react-router-dom";
import { universities } from "../data/universities";
import { solutions } from "../data/solutions";

type TrackKey = "transfer" | "graduate";
function isTrackKey(x: string | undefined): x is TrackKey {
  return x === "transfer" || x === "graduate";
}

export default function SolutionsByTrack() {
  const { uniSlug, track } = useParams();

  if (!isTrackKey(track)) {
    return (
      <div className="card">
        <h2>区分が不正です</h2>
        <Link className="btn" to="/solutions">戻る</Link>
      </div>
    );
  }

  const uni = universities.find((u) => u.slug === uniSlug);
  const uniSol = solutions.find((s) => s.uniSlug === uniSlug);
  const exams = uniSol?.tracks[track].exams ?? [];

  if (!uni) {
    return (
      <div className="card">
        <h2>大学が見つかりません</h2>
        <Link className="btn" to="/solutions">戻る</Link>
      </div>
    );
  }

  const trackLabel = track === "transfer" ? "大学編入" : "大学院";
  const sorted = [...exams].sort((a, b) => b.year - a.year);

  return (
    <div>
      <div className="card">
        <h2>{uni.name}：{trackLabel}（年度一覧）</h2>
        <div className="row" style={{ marginTop: 10 }}>
          <Link className="btn" to={`/solutions/${uni.slug}`}>区分へ戻る</Link>
          <Link className="btn" to="/solutions">過去問解説トップ</Link>
        </div>
      </div>

      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 12 }}>
        {sorted.length === 0 ? (
          <div className="card"><p>まだ年度がありません。</p></div>
        ) : (
          sorted.map((ex) => (
            <div key={`${ex.year}-${ex.label}`} className="card">
              <h3>{ex.year} / {ex.label}</h3>
              <p>画像: {ex.images.length} 枚</p>
              <Link className="btn" to={`/solutions/${uni.slug}/${track}/${ex.year}`}>
                開く
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

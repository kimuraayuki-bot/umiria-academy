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
  const trackSol = uniSol?.tracks[track];

  if (!uni) {
    return (
      <div className="card">
        <h2>大学が見つかりません</h2>
        <Link className="btn" to="/solutions">戻る</Link>
      </div>
    );
  }

  const departments = trackSol?.departments ?? [];
  const trackLabel = track === "transfer" ? "大学編入" : "大学院";

  return (
    <div>
      <div className="card">
        <h2>{uni.name}：{trackLabel}（学科一覧）</h2>
        <div className="row" style={{ marginTop: 10 }}>
          <Link className="btn" to={`/solutions/${uni.slug}`}>区分へ戻る</Link>
          <Link className="btn" to="/solutions">過去問解説トップ</Link>
        </div>
      </div>

      <div className="grid" style={{ marginTop: 12 }}>
        {departments.length === 0 ? (
          <div className="card"><p>まだ解説がありません。</p></div>
        ) : (
          departments.map((d) => (
            <div key={d.deptSlug} className="card">
              <h3>{d.deptName}</h3>
              <p>{d.exams.length} 件</p>
              <Link className="btn" to={`/solutions/${uni.slug}/${track}/${d.deptSlug}`}>
                年度一覧へ
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

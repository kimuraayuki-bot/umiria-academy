import { Link, useParams } from "react-router-dom";
import { universities } from "../data/universities";
import { solutions } from "../data/solutions";

type TrackKey = "transfer" | "graduate";
function isTrackKey(x: string | undefined): x is TrackKey {
  return x === "transfer" || x === "graduate";
}

export default function SolutionsYear() {
  const { uniSlug, track, deptSlug, year } = useParams();

  if (!isTrackKey(track) || !deptSlug || !year) {
    return (
      <div className="card">
        <h2>ページが見つかりません</h2>
        <Link className="btn" to="/solutions">戻る</Link>
      </div>
    );
  }

  const uni = universities.find((u) => u.slug === uniSlug);
  const uniSol = solutions.find((s) => s.uniSlug === uniSlug);
  const dept = uniSol?.tracks[track].departments.find((d) => d.deptSlug === deptSlug);
  const y = Number(year);
  const exam = dept?.exams.find((e) => e.year === y);

  if (!uni) {
    return (
      <div className="card">
        <h2>大学が見つかりません</h2>
        <Link className="btn" to="/solutions">戻る</Link>
      </div>
    );
  }

  const trackLabel = track === "transfer" ? "大学編入" : "大学院";

  if (!dept) {
    return (
      <div className="card">
        <h2>{uni.name}：学科が見つかりません</h2>
        <Link className="btn" to={`/solutions/${uni.slug}/${track}`}>学科一覧へ</Link>
      </div>
    );
  }

  if (!exam) {
    return (
      <div className="card">
        <h2>{uni.name} / {trackLabel} / {dept.deptName}：年度が見つかりません</h2>
        <Link className="btn" to={`/solutions/${uni.slug}/${track}/${dept.deptSlug}`}>年度一覧へ</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="card">
        <h2>{uni.name} / {trackLabel} / {dept.deptName} / {exam.year}</h2>
        <p>{exam.label}</p>
        <div className="row" style={{ marginTop: 10 }}>
          <Link className="btn" to={`/solutions/${uni.slug}/${track}/${dept.deptSlug}`}>年度一覧へ</Link>
          <Link className="btn" to={`/solutions/${uni.slug}/${track}`}>学科一覧へ</Link>
          <Link className="btn" to={`/solutions/${uni.slug}`}>区分へ</Link>
        </div>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        {exam.images.length === 0 ? (
          <p>画像がありません。</p>
        ) : (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {exam.images.map((src) => (
              <a key={src} href={src} target="_blank" rel="noreferrer" className="link">
                <img
                  src={src}
                  alt={src}
                  style={{
                    width: 260,
                    borderRadius: 12,
                    border: "1px solid rgba(140,160,255,0.18)"
                  }}
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

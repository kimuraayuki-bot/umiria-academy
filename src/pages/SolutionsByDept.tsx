import { Link, useParams } from "react-router-dom";
import { universities } from "../data/universities";
import { solutions } from "../data/solutions";

export default function SolutionsByDept() {
  const { uniSlug, deptSlug } = useParams();

  const uni = universities.find((u) => u.slug === uniSlug);
  const uniSol = solutions.find((s) => s.uniSlug === uniSlug);
  const dept = uniSol?.departments.find((d) => d.deptSlug === deptSlug);

  if (!uni || !deptSlug) {
    return (
      <div className="card">
        <h2>ページが見つかりません</h2>
        <Link className="btn" to="/solutions">戻る</Link>
      </div>
    );
  }

  if (!dept) {
    return (
      <div className="card">
        <h2>{uni.name}：学科が見つかりません</h2>
        <div className="row" style={{ marginTop: 10 }}>
          <Link className="btn" to={`/solutions/${uni.slug}`}>学科一覧へ</Link>
          <Link className="btn" to="/solutions">過去問解説トップ</Link>
        </div>
      </div>
    );
  }

  const sorted = [...dept.exams].sort((a, b) => b.year - a.year);

  return (
    <div>
      <div className="card">
        <h2>{uni.name} / {dept.deptName}：年度一覧</h2>
        <div className="row" style={{ marginTop: 10 }}>
          <Link className="btn" to={`/solutions/${uni.slug}`}>学科一覧へ</Link>
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
              <Link className="btn" to={`/solutions/${uni.slug}/${dept.deptSlug}/${ex.year}`}>
                開く
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

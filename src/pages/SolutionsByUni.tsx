import { Link, useParams } from "react-router-dom";
import { universities } from "../data/universities";
import { solutions } from "../data/solutions";

export default function SolutionsByUni() {
  const { uniSlug } = useParams();
  const uni = universities.find((u) => u.slug === uniSlug);
  const uniSol = solutions.find((s) => s.uniSlug === uniSlug);

  if (!uni) {
    return (
      <div className="card">
        <h2>大学が見つかりません</h2>
        <Link className="btn" to="/solutions">戻る</Link>
      </div>
    );
  }

  const transferCount =
    uniSol?.tracks.transfer.departments.reduce((acc, d) => acc + d.exams.length, 0) ?? 0;
  const graduateCount =
    uniSol?.tracks.graduate.departments.reduce((acc, d) => acc + d.exams.length, 0) ?? 0;

  return (
    <div>
      <div className="card">
        <h2>{uni.name}：区分</h2>
        <div className="row" style={{ marginTop: 10 }}>
          <Link className="btn" to={`/universities/${uni.slug}`}>大学ページ</Link>
          <Link className="btn" to="/solutions">過去問解説トップ</Link>
        </div>
      </div>

      <div className="grid" style={{ marginTop: 12 }}>
        <div className="card">
          <h3>大学編入</h3>
          <p>{transferCount} 件</p>
          <Link className="btn" to={`/solutions/${uni.slug}/transfer`}>学科一覧へ</Link>
        </div>

        <div className="card">
          <h3>大学院</h3>
          <p>{graduateCount} 件</p>
          <Link className="btn" to={`/solutions/${uni.slug}/graduate`}>学科一覧へ</Link>
        </div>
      </div>
    </div>
  );
}

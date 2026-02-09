import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { TrackKey } from "../data/universities";
import { universities } from "../data/universities";
import { solutions } from "../data/solutions";

function safeLink(url?: string) {
  if (!url) return <span style={{ color: "rgba(231,235,255,0.55)" }}>未設定</span>;
  return (
    <a className="link" href={url} target="_blank" rel="noreferrer">
      開く
    </a>
  );
}

export default function UniversityDetail() {
  const { slug } = useParams();
  const uni = useMemo(() => universities.find((u) => u.slug === slug), [slug]);
  const [tab, setTab] = useState<TrackKey>("graduate");

  const uniSol = useMemo(() => solutions.find((s) => s.uniSlug === slug), [slug]);

  if (!uni) {
    return (
      <div className="card">
        <h2>大学が見つかりません</h2>
        <Link className="btn" to="/universities">一覧へ</Link>
      </div>
    );
  }

  const track = uni.tracks[tab];

  const transferDeptCount = uniSol?.tracks.transfer.departments.length ?? 0;
  const graduateDeptCount = uniSol?.tracks.graduate.departments.length ?? 0;

  const transferExamCount =
    uniSol?.tracks.transfer.departments.reduce((acc, d) => acc + d.exams.length, 0) ?? 0;

  const graduateExamCount =
    uniSol?.tracks.graduate.departments.reduce((acc, d) => acc + d.exams.length, 0) ?? 0;

  return (
    <div>
      {/* 上：大学情報 */}
      <div className="card">
        <h2>{uni.name}</h2>

        <div className="tabs">
          <button
            className={`tab ${tab === "transfer" ? "active" : ""}`}
            onClick={() => setTab("transfer")}
          >
            大学編入
          </button>
          <button
            className={`tab ${tab === "graduate" ? "active" : ""}`}
            onClick={() => setTab("graduate")}
          >
            大学院
          </button>
        </div>

        <p>
          <b>募集要項</b>: {safeLink(track.requirementsUrl)}
        </p>
        <p>
          <b>過去問</b>: {safeLink(track.pastExamsUrl)}
        </p>

        <div className="row" style={{ marginTop: 10 }}>
          <Link className="btn" to="/universities">大学一覧へ</Link>
          <Link className="btn" to={`/solutions/${uni.slug}`}>この大学の過去問解説へ</Link>
        </div>
      </div>

      {/* 下：この大学に登録されている解説の概要 */}
      <div className="card" style={{ marginTop: 12 }}>
        <h3>過去問解説（登録状況）</h3>

        {!uniSol ? (
          <p>まだ解説がありません。</p>
        ) : (
          <div className="grid" style={{ marginTop: 12 }}>
            <div className="card">
              <h3>大学編入</h3>
              <p>学科: {transferDeptCount} / 年度: {transferExamCount}</p>

              {transferDeptCount === 0 ? (
                <p>まだ解説がありません。</p>
              ) : (
                <ul>
                  {uniSol.tracks.transfer.departments.map((dept) => (
                    <li key={dept.deptSlug}>
                      {dept.deptName}（{dept.exams.length} 年度）
                    </li>
                  ))}
                </ul>
              )}

              <Link className="btn" to={`/solutions/${uni.slug}/transfer`} style={{ marginTop: 10 }}>
                編入の解説へ
              </Link>
            </div>

            <div className="card">
              <h3>大学院</h3>
              <p>学科: {graduateDeptCount} / 年度: {graduateExamCount}</p>

              {graduateDeptCount === 0 ? (
                <p>まだ解説がありません。</p>
              ) : (
                <ul>
                  {uniSol.tracks.graduate.departments.map((dept) => (
                    <li key={dept.deptSlug}>
                      {dept.deptName}（{dept.exams.length} 年度）
                    </li>
                  ))}
                </ul>
              )}

              <Link className="btn" to={`/solutions/${uni.slug}/graduate`} style={{ marginTop: 10 }}>
                大学院の解説へ
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

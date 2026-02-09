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

  const transferExamCount = uniSol?.tracks.transfer.exams.length ?? 0;
  const graduateExamCount = uniSol?.tracks.graduate.exams.length ?? 0;

  return (
    <div>
      {/* 上：募集要項 / 過去問リンク */}
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

      {/* 下：登録状況（物理固定なので“年度数”のみ表示） */}
      <div className="card" style={{ marginTop: 12 }}>
        <h3>過去問解説（登録状況）</h3>

        {!uniSol ? (
          <p>まだ解説がありません。</p>
        ) : (
          <div className="gridCards" style={{ marginTop: 12 }}>
            <div className="card">
              <h3>大学編入</h3>
              <p>年度: {transferExamCount} 件</p>
              <Link className="btn primary" to={`/solutions/${uni.slug}/transfer`}>
                編入の年度一覧へ
              </Link>
            </div>

            <div className="card">
              <h3>大学院</h3>
              <p>年度: {graduateExamCount} 件</p>
              <Link className="btn primary" to={`/solutions/${uni.slug}/graduate`}>
                大学院の年度一覧へ
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

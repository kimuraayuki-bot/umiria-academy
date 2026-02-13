import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div
        className="hero heroImage"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
      >
        <div className="heroOverlay">
          <h1 className="heroTitle">UMIRIA ORBITAL OBSERVATORY</h1>
          <p className="heroLead">
            理系進学と研究準備のための観測ステーション。
            受験情報、過去問解説、学習コミュニティをひとつに集約しています。
          </p>

          <div className="row" style={{ marginTop: 16 }}>
            <Link className="btn primary" to="/universities">
              大学データを見る
            </Link>
            <Link className="btn" to="/solutions">
              過去問アーカイブへ
            </Link>
            <Link className="btn" to="/community">
              コミュニティへ
            </Link>
          </div>
        </div>
      </div>

      <p className="homeSectionTitle">MISSION PANELS</p>
      <div className="gridCards">
        <Link to="/universities" className="card cardLink">
          <div className="cardTop">
            <div className="badge">UNIVERSITIES</div>
            <h2 className="cardTitle">大学情報</h2>
          </div>
          <p className="cardText">
            編入・大学院進学向けに、出願条件や外部リンクを一覧化。
            比較しながら次の志望校を決められます。
          </p>
          <div className="cardCta">大学一覧を見る →</div>
        </Link>

        <Link to="/solutions" className="card cardLink">
          <div className="cardTop">
            <div className="badge">PAST EXAMS</div>
            <h2 className="cardTitle">過去問解説</h2>
          </div>
          <p className="cardText">
            大学・区分・年度ごとに整理した解説へアクセス。
            画像付きで解答方針を追える構成です。
          </p>
          <div className="cardCta">解説へ進む →</div>
        </Link>

        <Link to="/community" className="card cardLink">
          <div className="cardTop">
            <div className="badge">COMMUNITY</div>
            <h2 className="cardTitle">コミュニティ</h2>
          </div>
          <p className="cardText">
            Discordで質問・情報交換・学習報告が可能。
            孤立しやすい受験期の継続を支えるための場です。
          </p>
          <div className="cardCta">参加方法を見る →</div>
        </Link>
      </div>

      <div className="card homeDiagnosis">
        <div className="cardTop">
          <div className="badge">RESEARCH DIAGNOSIS</div>
          <h2 className="cardTitle">研究室キャラ診断</h2>
        </div>
        <p className="cardText">
          研究スタイルを16タイプで可視化し、自分に合う役割や進め方を整理できます。
        </p>
        <div className="cardCta">
          <Link className="link" to="/diagnosis">診断を始める →</Link>
        </div>
      </div>

      <section
        style={{
          maxWidth: "760px",
          margin: "10px auto 0",
          padding: "0 6px",
          lineHeight: 1.9,
          fontSize: 14,
          color: "rgba(220,236,255,0.8)",
        }}
      >
        <h2 style={{ fontSize: 16, marginBottom: 12 }}>UMIRIAが目指すもの</h2>
        <p>
          UMIRIAは「理系進学を情報格差で諦めない」ための実践プラットフォームです。
          必要な情報を短時間で比較できる設計にし、学習時間を最大化できる状態を作ります。
        </p>
        <p>
          単なる情報掲示板ではなく、進路判断・演習・相談の導線がつながる場所として
          機能することを重視しています。
        </p>
      </section>
    </div>
  );
}

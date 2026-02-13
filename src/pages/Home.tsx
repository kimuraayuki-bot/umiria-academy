import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div
        className="hero heroImage"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
      >
        <div className="heroOverlay">
          <h1 className="heroTitle">ウミリア学院 / Umiria Academy</h1>
          <p className="heroLead">
            理学部・物理学科を目指す受験生向けに、大学編入と大学院進学の募集要項リンク、
            過去問リンク、学習コミュニティをまとめた情報サイトです。
          </p>

          <div className="row" style={{ marginTop: 16 }}>
            <Link className="btn primary" to="/universities">
              大学情報を見る
            </Link>
            <Link className="btn" to="/solutions">
              過去問解説へ
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
            物理学科（またはそれに準ずる学科）への大学編入・大学院進学を想定し、
            各大学の募集要項リンクと過去問リンクを確認できます。
          </p>
          <div className="cardCta">大学一覧を見る →</div>
        </Link>

        <Link to="/solutions" className="card cardLink">
          <div className="cardTop">
            <div className="badge">PAST EXAMS</div>
            <h2 className="cardTitle">過去問解説</h2>
          </div>
          <p className="cardText">
            大学・区分・年度ごとに整理された過去問解説へアクセスできます。
            試験対策の優先順位をつけるのに活用してください。
          </p>
          <div className="cardCta">解説へ進む →</div>
        </Link>

        <Link to="/community" className="card cardLink">
          <div className="cardTop">
            <div className="badge">COMMUNITY</div>
            <h2 className="cardTitle">コミュニティ</h2>
          </div>
          <p className="cardText">
            学習相談、進路情報の共有、大学院・大学編入の受験体験の交換ができる
            Discordコミュニティを案内しています。
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
          学習スタイルを16タイプで可視化し、自分に合う研究の進め方や役割を整理できます。
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
        <h2 style={{ fontSize: 16, marginBottom: 12 }}>ウミリア学院が目指すもの</h2>
        <p>
          ウミリア学院（Umiria Academy）は、理学部・物理学科の進学情報を
          一箇所で比較できる状態を作ることを重視しています。
        </p>
        <p>
          大学院、大学編入、過去問対策に必要な情報へ短時間で到達できるよう、
          継続的に情報更新を行っています。
        </p>
      </section>
    </div>
  );
}

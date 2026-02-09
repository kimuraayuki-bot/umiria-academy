import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {/* Hero */}
      <div
        className="hero heroImage"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
      >
        <div className="heroOverlay">
          <h1 className="heroTitle">Umiria Academy</h1>
          <p className="heroLead">
            物理学科への大学編入・大学院受験のための情報整理と過去問解説。
          </p>

          <div className="row" style={{ marginTop: 16 }}>
            <Link className="btn primary" to="/universities">
              大学情報
            </Link>
            <Link className="btn" to="/solutions">
              過去問
            </Link>
            <Link className="btn" to="/community">
              コミュニティ
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation cards */}
      <div className="gridCards">
        <Link to="/universities" className="card cardLink">
          <div className="cardTop">
            <div className="badge">Universities</div>
            <h2 className="cardTitle">大学情報</h2>
          </div>
          <p className="cardText">
            各大学の募集要項や過去問への公式リンクを整理しています。
            大学編入・大学院の区分を切り替えて確認できます。
          </p>
          <div className="cardCta">大学一覧を見る →</div>
        </Link>

        <Link to="/solutions" className="card cardLink">
          <div className="cardTop">
            <div className="badge">Past Exams</div>
            <h2 className="cardTitle">過去問解説</h2>
          </div>
          <p className="cardText">
            大学・年度ごとに、紙ベースで解いた過去問解説を
            画像として順次掲載しています。
          </p>
          <div className="cardCta">解説へ進む →</div>
        </Link>

        <Link to="/community" className="card cardLink">
          <div className="cardTop">
            <div className="badge">Community</div>
            <h2 className="cardTitle">コミュニティ</h2>
          </div>
          <p className="cardText">
            学習や進路に関する情報共有のためのDiscordコミュニティ。
            参加前にルールと概要を確認できます。
          </p>
          <div className="cardCta">参加方法を見る →</div>
        </Link>
      </div>

      {/* Philosophy (site bottom, non-card) */}
      <section
        style={{
          maxWidth: "720px",
          margin: "48px auto 0",
          padding: "0 6px",
          lineHeight: 1.9,
          fontSize: 14,
          color: "rgba(231,235,255,0.75)",
        }}
      >
        <h2 style={{ fontSize: 16, marginBottom: 12 }}>
          🌌 Umiriaという名に込めた想い
        </h2>

        <p>
          <strong>Umiria（ウミリア）</strong>は、アミール・D・アクゼル著
          『宇宙創造の一瞬をつくる』に登場する献辞──
          <strong>「宇宙を愛するミリアムへ」</strong>──に着想を得て
          生まれた造語である。
        </p>

        <p>
          「ミリアム（Miriam）」という名が内包する、宇宙への愛と、
          尽きることのない探求のまなざし。
        </p>

        <p>
          その精神を、思索と学びの営みに重ね合わせ、
          ひとつの世界観・概念として再構築したものが
          <strong> Umiria </strong>
          である。
        </p>
      </section>
    </div>
  );
}

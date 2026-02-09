import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {/* Hero（背景画像は public/images/hero.jpg を想定） */}
      <div
        className="card hero heroImage"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
      >
        <div className="heroOverlay">
          <h1 className="heroTitle">Umiria Academy</h1>
          <p className="heroLead">
            物理系学科に特化した、大学編入／大学院受験のための情報整理と過去問解説。
          </p>
          <div className="row" style={{ marginTop: 10 }}>
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

      {/* 主要導線カード */}
      <div className="gridCards">
        <Link to="/universities" className="card cardLink">
          <div className="cardTop">
            <div className="badge">Universities</div>
            <h2 className="cardTitle">大学情報</h2>
          </div>
          <p className="cardText">
            対象大学は物理・電子物理系のみ。編入／大学院に分けて、公式の募集要項・過去問リンクへ。
          </p>
          <div className="cardCta">大学一覧を見る →</div>
        </Link>

        <Link to="/solutions" className="card cardLink">
          <div className="cardTop">
            <div className="badge">Past Exams</div>
            <h2 className="cardTitle">過去問解説</h2>
          </div>
          <p className="cardText">
            大学 →（編入／大学院）→ 学科 → 年度。紙で解いた解説を画像で順次追加していきます。
          </p>
          <div className="cardCta">解説へ進む →</div>
        </Link>

        <Link to="/community" className="card cardLink">
          <div className="cardTop">
            <div className="badge">Community</div>
            <h2 className="cardTitle">コミュニティ</h2>
          </div>
          <p className="cardText">
            Discordで学習・情報共有。ルールと参加方法を確認してから招待リンクへ進めます。
          </p>
          <div className="cardCta">参加方法を見る →</div>
        </Link>
      </div>

      {/* 補足（塾化の拡張余地を残す） */}
      <div className="card">
        <h2 className="cardTitle">このサイトについて</h2>
        <p className="cardText">
          情報は随時更新します。過去問解説は大学ごとに追加し、紙ベースの解答を画像として掲載する想定です。
          将来的に学習相談の導線を追加できるよう、ページ構成は拡張しやすい形にしてあります。
        </p>
      </div>
    </div>
  );
}

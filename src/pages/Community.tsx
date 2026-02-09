const discord = import.meta.env.VITE_DISCORD_INVITE as string | undefined;

export default function Community() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div className="card">
        <h2 style={{ marginBottom: 8 }}>コミュニティ（Discord）</h2>
        <p>
          Umiria AcademyのDiscordは、物理・電子物理系の受験（編入／大学院）に向けて、
          情報共有と学習継続を支えるための場です。
        </p>
      </div>

      <div className="gridCards">
        <div className="card">
          <h3 style={{ marginBottom: 8 }}>基本ルール</h3>
          <ul className="list">
            <li>相手を否定しない（人格攻撃・煽り禁止）</li>
            <li>個人情報（住所/電話/受験票など）は投稿しない</li>
            <li>過去問の扱いは、著作権と大学の規約を尊重する</li>
            <li>宣伝・勧誘は管理者の許可制</li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: 8 }}>できること</h3>
          <ul className="list">
            <li>勉強会・進捗報告（習慣化）</li>
            <li>過去問の方針相談（解法の観点や復習設計）</li>
            <li>大学別の情報整理（募集要項・出題傾向など）</li>
            <li>将来的に個別指導/講座の案内（※後日）</li>
          </ul>
        </div>
      </div>

      <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h3 style={{ marginBottom: 6 }}>参加はこちら</h3>
          <p style={{ margin: 0 }}>ルールを確認した上で参加してください。</p>
        </div>

        {discord ? (
          <a className="btn primary" href={discord} target="_blank" rel="noreferrer">
            Discord招待リンクを開く
          </a>
        ) : (
          <span style={{ color: "rgba(231,235,255,0.55)" }}>招待リンクが未設定です（.envを確認）</span>
        )}
      </div>
    </div>
  );
}

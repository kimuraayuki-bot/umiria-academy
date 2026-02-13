const discord = import.meta.env.VITE_DISCORD_INVITE as string | undefined;

export default function Community() {
  return (
    <div className="pageStack">
      <div className="card">
        <h2 style={{ marginBottom: 8 }}>コミュニティ（Discord）</h2>
        <p>
          UMIRIA AcademyのDiscordでは、編入・大学院進学に関する質問、学習相談、
          試験情報の共有を行っています。受験期の継続を支えるための交流スペースです。
        </p>
      </div>

      <div className="card communityVisualCard">
        <img
          src="/images/sections/community-orbit.svg"
          alt="コミュニティ ビジュアル"
          className="communityVisual"
          loading="lazy"
        />
      </div>

      <div className="gridCards">
        <div className="card">
          <h3 style={{ marginBottom: 8 }}>基本ルール</h3>
          <ul className="list">
            <li>敬意をもってやり取りする</li>
            <li>個人情報・機密情報は投稿しない</li>
            <li>出典不明の情報は断定しない</li>
            <li>質問時は大学名・分野・状況を添える</li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: 8 }}>できること</h3>
          <ul className="list">
            <li>志望校ごとの情報交換</li>
            <li>過去問の取り組み方相談</li>
            <li>研究室・分野選びの壁打ち</li>
            <li>学習進捗の共有と相互フォロー</li>
          </ul>
        </div>
      </div>

      <div className="card communityJoin">
        <div>
          <h3 style={{ marginBottom: 6 }}>参加はこちら</h3>
          <p style={{ margin: 0 }}>
            ルールを確認した上で参加してください。初参加時は自己紹介チャンネルへの投稿をお願いします。
          </p>
        </div>

        {discord ? (
          <a className="btn primary" href={discord} target="_blank" rel="noreferrer">
            Discordに参加する
          </a>
        ) : (
          <span style={{ color: "rgba(231,235,255,0.55)" }}>
            招待リンクが未設定です（`.env` を確認）
          </span>
        )}
      </div>
    </div>
  );
}

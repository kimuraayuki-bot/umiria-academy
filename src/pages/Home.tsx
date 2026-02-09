import { Link } from "react-router-dom";

const discord = import.meta.env.VITE_DISCORD_INVITE as string | undefined;

export default function Home() {
  return (
    <div className="card">
      <h1>電子物理・物理系に絞った大学情報と過去問解説</h1>
      <p>
        編入／大学院の募集要項リンク、過去問リンク（あれば）、そして大学別の解説（画像）をまとめます。
      </p>
      <div className="row" style={{ marginTop: 14 }}>
        <Link className="btn" to="/universities">大学情報を見る</Link>
        <Link className="btn" to="/solutions">過去問解説を見る</Link>
        {discord ? (
          <a className="btn" href={discord} target="_blank" rel="noreferrer">Discordに参加</a>
        ) : null}
      </div>
    </div>
  );
}

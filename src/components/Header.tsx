import { Link, NavLink } from "react-router-dom";

const discord = import.meta.env.VITE_DISCORD_INVITE as string | undefined;

export default function Header() {
  return (
    <div className="nav">
      <Link to="/" className="link" style={{ fontWeight: 700, letterSpacing: "0.02em" }}>
        Umiria学院
      </Link>

      <div className="row" style={{ gap: 10 }}>
        <NavLink to="/universities">大学情報</NavLink>
        <NavLink to="/solutions">過去問解説</NavLink>
        {discord ? (
          <a className="btn" href={discord} target="_blank" rel="noreferrer">
            Discordに参加
          </a>
        ) : null}
      </div>
    </div>
  );
}

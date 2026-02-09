import { Link } from "react-router-dom";
import { universities } from "../data/universities";
import { solutions } from "../data/solutions";

export default function Solutions() {
  const slugsWithSolutions = new Set(solutions.map((s) => s.uniSlug));

  return (
    <div>
      <div className="card" style={{ marginBottom: 12 }}>
        <h2>過去問解説：大学一覧</h2>
        <p>大学 →（編入/大学院）→ 学科 → 年度 の順に辿ります。</p>
      </div>

      <div className="grid">
        {universities.map((u) => (
          <div key={u.slug} className="card">
            <h3>{u.name}</h3>
            <p>{slugsWithSolutions.has(u.slug) ? "解説あり" : "まだ解説なし"}</p>
            <Link className="btn" to={`/solutions/${u.slug}`}>開く</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

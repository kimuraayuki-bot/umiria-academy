import { Link } from "react-router-dom";
import { universities } from "../data/universities";

export default function Universities() {
  return (
    <div>
      <div className="card" style={{ marginBottom: 12 }}>
        <h2>大学一覧</h2>
        <p>電子物理系／物理学科系のみ掲載。大学ページで「大学編入」「大学院」を切り替えできます。</p>
      </div>

      <div className="grid">
        {universities.map((u) => (
          <div key={u.slug} className="card">
            <h3>{u.name}</h3>
            <p style={{ marginTop: 6 }}>対象: {u.categories.includes("electronic-physics") ? "電子物理 / 物理" : "物理"}</p>
            <Link className="btn" to={`/universities/${u.slug}`} style={{ marginTop: 10 }}>
              詳細を見る
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

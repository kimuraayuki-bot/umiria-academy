import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="card">
      <h2>ページが見つかりません</h2>
      <Link className="btn" to="/">トップへ</Link>
    </div>
  );
}

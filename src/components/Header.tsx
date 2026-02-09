import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="siteHeader">
      <Link to="/" className="siteTitle">
        ウミリア学院
      </Link>
    </header>
  );
}

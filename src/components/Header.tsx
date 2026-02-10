import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="siteHeader">
      <Link to="/" className="siteTitle">
        <img
          src="/images/icon.png"
          alt="ウミリア学院"
          className="siteLogo"
        />
        <span className="siteTitleText">ウミリア学院</span>
      </Link>
    </header>
  );
}

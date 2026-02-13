import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="siteHeader">
      <Link to="/" className="siteTitle">
        <img
          src="/images/icon.png"
          alt="Umiria Academy"
          className="siteLogo"
        />
        <span className="siteTitleText">UMIRIA ACADEMY</span>
      </Link>
    </header>
  );
}

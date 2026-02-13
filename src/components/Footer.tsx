export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerMeta">
        <span>© {new Date().getFullYear()} ウミリア学院 / Umiria Academy</span>
        <a
          className="link"
          href="mailto:from.umiria@gmail.com?subject=%E3%80%90%E3%82%A6%E3%83%9F%E3%83%AA%E3%82%A2%E5%AD%A6%E9%99%A2%E3%80%91%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B"
        >
          お問い合わせ: from.umiria@gmail.com
        </a>
      </div>
    </footer>
  );
}

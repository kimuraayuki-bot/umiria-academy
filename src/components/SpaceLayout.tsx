import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function SpaceLayout(
  { children }: { children: ReactNode }
) {
  return (
    <div className="space-stars" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div className="container" style={{ flex: 1, width: "100%" }}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

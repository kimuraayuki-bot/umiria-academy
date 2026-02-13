import { useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { diagnosisTypes } from "../data/diagnosis";

export default function ResearchTypeDiagnosisResult() {
  const { typeId = "" } = useParams();
  const [searchParams] = useSearchParams();
  const [copied, setCopied] = useState(false);

  const result = diagnosisTypes[typeId];

  const scoreText = useMemo(() => {
    const a = searchParams.get("a");
    const b = searchParams.get("b");
    const c = searchParams.get("c");
    const d = searchParams.get("d");
    if ([a, b, c, d].some((v) => v === null)) return "";
    return `A:${a} / B:${b} / C:${c} / D:${d}`;
  }, [searchParams]);

  if (!result) {
    return (
      <div className="card">
        <h2>診断結果が見つかりません</h2>
        <div className="row" style={{ marginTop: 10 }}>
          <Link className="btn" to="/diagnosis">診断ページに戻る</Link>
        </div>
      </div>
    );
  }

  const shareText =
    `研究室キャラ診断の結果は「${result.name}（${typeId}）」でした。` +
    ` #研究室キャラ診断 #ウミリア学院`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const canNativeShare = typeof navigator !== "undefined" && "share" in navigator;
  const xShareUrl =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  const copyUrl = async () => {
    if (!shareUrl) return;
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const webShare = async () => {
    if (!canNativeShare) return;
    await navigator.share({ title: "研究室キャラ診断", text: shareText, url: shareUrl });
  };

  return (
    <div className="pageStack">
      <div className="card diagnosisResult">
        <div className="badge">TYPE ID: {typeId}</div>
        <div className="diagnosisResultHead">
          <img
            src={`/images/diagnosis-types/${typeId}.svg`}
            alt={`${result.name} キャラクター`}
            className="diagnosisTypeImage"
          />
          <div>
            <h2 style={{ marginTop: 10 }}>{result.name}</h2>
            <p>{result.one}</p>
            {scoreText ? <p className="diagnosisHelp">スコア: {scoreText}</p> : null}
          </div>
        </div>

        <div className="diagnosisShareRow">
          <a className="btn primary" href={xShareUrl} target="_blank" rel="noreferrer">
            Xで共有
          </a>
          <button className="btn" onClick={copyUrl}>
            {copied ? "コピー済み" : "リンクをコピー"}
          </button>
          {canNativeShare ? (
            <button className="btn" onClick={webShare}>
              共有シートを開く
            </button>
          ) : null}
        </div>

        <h3 style={{ marginTop: 16 }}>研究室での役割</h3>
        <p>{result.role}</p>

        <h3 style={{ marginTop: 16 }}>強み</h3>
        <ul className="list">
          {result.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 style={{ marginTop: 16 }}>注意点</h3>
        <ul className="list">
          {result.pitfalls.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 style={{ marginTop: 16 }}>明日からの処方箋</h3>
        <ul className="list">
          {result.tips.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 style={{ marginTop: 16 }}>キャラデザイン案</h3>
        <p>
          配色: {result.design.color}
          <br />
          モチーフ: {result.design.items.join(" / ")}
        </p>

        <div className="row" style={{ marginTop: 12 }}>
          <Link className="btn" to="/diagnosis">もう一度診断する</Link>
        </div>
      </div>
    </div>
  );
}

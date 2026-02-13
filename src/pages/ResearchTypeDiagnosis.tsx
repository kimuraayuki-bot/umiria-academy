const diagnosisUrl = import.meta.env.VITE_RESEARCH_DIAGNOSIS_URL as string | undefined;

export default function ResearchTypeDiagnosis() {
  return (
    <div className="pageStack">
      <div className="card">
        <h2 style={{ marginBottom: 8 }}>研究室キャラ診断</h2>
        <p>
          外部のGoogle Apps Script Webアプリを診断ビューとして表示しています。
          もし表示できない場合は、下のリンクから別タブで開いてください。
        </p>
      </div>

      <div className="card">
        {diagnosisUrl ? (
          <>
            <iframe
              src={diagnosisUrl}
              title="Researcher Type Diagnosis"
              className="diagnosisFrame"
              loading="lazy"
            />
            <p className="diagnosisHelp">
              埋め込み表示に失敗する場合:
              {" "}
              <a className="link" href={diagnosisUrl} target="_blank" rel="noreferrer">
                診断ページを新しいタブで開く
              </a>
            </p>
          </>
        ) : (
          <p className="textDanger" style={{ margin: 0 }}>
            `VITE_RESEARCH_DIAGNOSIS_URL` が未設定です。`.env` にGASの `/exec` URL を設定してください。
          </p>
        )}
      </div>
    </div>
  );
}

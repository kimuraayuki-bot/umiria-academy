export type Axis = "A" | "B" | "C" | "D";

export type DiagnosisQuestion = {
  id: string;
  axis: Axis;
  text: string;
};

export type DiagnosisType = {
  name: string;
  one: string;
  role: string;
  strengths: string[];
  pitfalls: string[];
  tips: string[];
  design: {
    color: string;
    items: string[];
  };
};

export const diagnosisQuestions: DiagnosisQuestion[] = [
  { id: "q1", axis: "A", text: "未知の現象に出会ったら、まず理論モデルを考える" },
  { id: "q2", axis: "A", text: "数式が閉じた瞬間が一番興奮する" },
  { id: "q3", axis: "A", text: "実験より理屈を詰める方が好きだ" },
  { id: "q4", axis: "B", text: "まず紙で解析して見通しを立てる" },
  { id: "q5", axis: "B", text: "数値より式の構造が気になる" },
  { id: "q6", axis: "B", text: "シミュレーションより手計算派だ" },
  { id: "q7", axis: "C", text: "近似はできるだけ使いたくない" },
  { id: "q8", axis: "C", text: "証明できないと落ち着かない" },
  { id: "q9", axis: "C", text: "符号や境界条件が常に気になる" },
  { id: "q10", axis: "D", text: "研究は一人で集中して進めたい" },
  { id: "q11", axis: "D", text: "議論より孤独な時間が重要だ" },
  { id: "q12", axis: "D", text: "共同作業より単独作業が好きだ" },
];

export const diagnosisTypes: Record<string, DiagnosisType> = {
  ThAnRiSo: {
    name: "孤高のハミルトニアン",
    one: "公理と整合性で世界を固定する、理論の柱。",
    role: "理論の土台作り、式の整合性チェック、仮定の言語化。",
    strengths: ["導出精度が高い", "仮定の抜けに気づく", "議論の軸を作れる"],
    pitfalls: ["完璧主義で遅れがち", "現場制約を見落としやすい"],
    tips: ["締切を先に固定", "仮定リストを明文化", "月1で実データを見る"],
    design: { color: "ネイビー×シルバー", items: ["ホログラム黒板", "数式エフェクト"] },
  },
  ThAnRiCo: {
    name: "理論アーキテクト",
    one: "理論を設計してチームの議論を前進させる。",
    role: "枠組み設計、モデル前提整理、議論の交通整理。",
    strengths: ["議論整理が得意", "説明が論理的", "全体設計に強い"],
    pitfalls: ["細部検証が後回し", "説明で時間を使いすぎる"],
    tips: ["細部担当を先に決める", "結論先出しで共有", "週1で暫定結論を出す"],
    design: { color: "ブルー×ホワイト", items: ["ホワイトボード", "模式図"] },
  },
  ThAnApSo: {
    name: "極限マスター",
    one: "近似で本質を抜いて最短距離で理解する。",
    role: "見通し作り、スケーリング評価、次元解析。",
    strengths: ["理解が速い", "本質抽出がうまい", "式を簡潔にできる"],
    pitfalls: ["適用条件を省略しがち", "粗い近似で外すことがある"],
    tips: ["近似条件を明記", "捨てた項のオーダーを書く", "最後に1回検証する"],
    design: { color: "ライトブルー×グレー", items: ["極限矢印", "スケール図"] },
  },
  ThAnApCo: {
    name: "見通し職人",
    one: "図と近似で、みんなが進める状態を作る。",
    role: "議論整理、説明、ボトルネック解消。",
    strengths: ["説明が上手い", "合意形成が得意", "場を進める力がある"],
    pitfalls: ["詰め不足を突かれやすい", "自分の作業が止まりがち"],
    tips: ["厳密担当とペア運用", "近似箇所を明記", "個人作業時間を確保"],
    design: { color: "水色×白", items: ["全体図", "フローチャート"] },
  },
  ThNuRiSo: {
    name: "理論検証機関",
    one: "理論を数値で叩いて嘘を許さない検証者。",
    role: "数値検証、境界条件管理、再現コード整備。",
    strengths: ["検証が速い", "再現性が高い", "バグ検知が鋭い"],
    pitfalls: ["探索に出にくい", "完璧主義になりやすい"],
    tips: ["検証を段階化", "粗く回して方向決め", "暫定合格ラインを設定"],
    design: { color: "グレー×パープル", items: ["比較プロット", "チェックUI"] },
  },
  ThNuRiCo: {
    name: "検証厨",
    one: "反証を重ねて研究の安全性を上げる。",
    role: "反証設計、比較実験、レビュー。",
    strengths: ["穴を潰せる", "説得力を上げる", "論文化に強い"],
    pitfalls: ["進みが遅く見える", "場が冷えやすい"],
    tips: ["締切を先に宣言", "検証項目を固定", "指摘は代案セットで出す"],
    design: { color: "赤×グレー", items: ["チェックリスト", "比較表"] },
  },
  ThNuApSo: {
    name: "シミュ銀河旅人",
    one: "回して眺めて発見する探索の放浪者。",
    role: "探索、可視化、相図発見。",
    strengths: ["探索が速い", "可視化が強い", "未知挙動に強い"],
    pitfalls: ["根拠が薄くなる", "条件管理が雑になりやすい"],
    tips: ["固定パラメータを明文化", "次元解析を挟む", "解釈を一文添える"],
    design: { color: "紫×エメラルド", items: ["相図", "3Dプロット"] },
  },
  ThNuApCo: {
    name: "量子錬金術師",
    one: "理論×数値×近似を混ぜて使える形にする。",
    role: "モデル実装、近似導入、計算パイプライン整備。",
    strengths: ["実装が速い", "落とし所を作る", "応用に強い"],
    pitfalls: ["説明を省略しがち", "仕上げが雑に見える"],
    tips: ["前提をテンプレ化", "検証担当を早めに呼ぶ", "適用範囲を明記"],
    design: { color: "ティール×パープル", items: ["コードUI", "計算フロー"] },
  },
  ExAnRiSo: {
    name: "誤差バー守護者",
    one: "再現性と誤差評価の番人。",
    role: "誤差評価、系統誤差の低減、手順標準化。",
    strengths: ["再現性が高い", "データが強い", "信頼性を上げる"],
    pitfalls: ["進みが遅い", "80%で止めにくい"],
    tips: ["80%で一度まとめる", "最小実験セットを決める", "検証項目を固定"],
    design: { color: "ダークグリーン×白", items: ["エラーバー", "グリッド"] },
  },
  ExAnRiCo: {
    name: "真空の騎士",
    one: "精密条件の維持で勝つ環境支配型。",
    role: "条件管理、安定化、プロトコル整備、安全運用。",
    strengths: ["条件がぶれない", "事故率が低い", "長期運用に強い"],
    pitfalls: ["柔軟な変更が苦手", "速度が出にくい"],
    tips: ["変更は1つずつ", "短期テスト枠を作る", "ログをテンプレ化"],
    design: { color: "ブラック×シアン", items: ["真空ゲージ", "クリーン配管"] },
  },
  ExAnApSo: {
    name: "データ職人",
    one: "現場で磨き堅実に成果を作る実務型。",
    role: "データ取得、前処理、地道な積み上げ。",
    strengths: ["安定して成果", "地道に強い", "下支え力が高い"],
    pitfalls: ["発信が弱い", "見せ方で損をしやすい"],
    tips: ["週1で図を作る", "一枚絵で共有", "結論を先に言う"],
    design: { color: "ブラウン×ブルー", items: ["ログノート", "整ったグラフ"] },
  },
  ExAnApCo: {
    name: "現場突破隊",
    one: "まず動かして改善する研究室の推進力。",
    role: "改善サイクル、トラブル対応、巻き込み。",
    strengths: ["速度が出る", "改善が回る", "周囲を動かせる"],
    pitfalls: ["記録が薄い", "条件が散らかる"],
    tips: ["条件テンプレ固定", "毎回比較対象を用意", "失敗も1行で残す"],
    design: { color: "イエロー×ブルー", items: ["走る矢印", "試作品"] },
  },
  ExNuRiSo: {
    name: "統合オペレーター",
    one: "装置と数値を両手で回し効率を最大化。",
    role: "実験×解析パイプライン、自動化、再現運用。",
    strengths: ["作業効率が高い", "再現性が高い", "ボトルネックを潰す"],
    pitfalls: ["抱え込みやすい", "属人化しやすい"],
    tips: ["共有前提で自動化", "ドキュメント先書き", "週1で共有会"],
    design: { color: "スチール×パープル", items: ["自動化フロー", "端末画面"] },
  },
  ExNuRiCo: {
    name: "研究室プロデューサー",
    one: "装置×人×進行を統合して成果を出す。",
    role: "段取り、役割分担、進行管理、品質管理。",
    strengths: ["段取りが強い", "チーム成果を伸ばす", "詰まりを解消"],
    pitfalls: ["自分の研究が止まりやすい", "背負い込みがち"],
    tips: ["孤独時間を確保", "依頼をテンプレ化", "役割分担を明文化"],
    design: { color: "ティール×パープル", items: ["ガントチャート", "チームUI"] },
  },
  ExNuApSo: {
    name: "装置マスター",
    one: "配線・調整・治具で突破する現場最強。",
    role: "装置構築、調整、現場トラブル解決。",
    strengths: ["復旧が速い", "手が動く", "現場制約を読む"],
    pitfalls: ["整理が後回し", "ログ不足になりやすい"],
    tips: ["実験後5分ログ", "週1で結果整理", "次の一手を残す"],
    design: { color: "オレンジ×ブラック", items: ["工具箱", "オシロ波形"] },
  },
  ExNuApCo: {
    name: "レーザー召喚士",
    one: "光学・制御・数値で実験室を魔改造する。",
    role: "光学調整、制御導入、現場最適化、共有。",
    strengths: ["改造が速い", "引き出しが多い", "議論に強い"],
    pitfalls: ["やることを増やしすぎる", "収束しにくい"],
    tips: ["今日やる3つに絞る", "改造は1回1点", "記録は写真と一行"],
    design: { color: "マゼンタ×シアン", items: ["レーザー光条", "制御UI"] },
  },
};

export function diagnoseType(answers: Record<string, number>) {
  const score = { A: 0, B: 0, C: 0, D: 0 };

  for (const q of diagnosisQuestions) {
    const v = Number(answers[q.id]);
    if (!Number.isInteger(v) || v < -3 || v > 3) {
      throw new Error(`未回答があります（${q.id}）`);
    }
    score[q.axis] += v;
  }

  const typeId =
    (score.A >= 0 ? "Th" : "Ex") +
    (score.B >= 0 ? "An" : "Nu") +
    (score.C >= 0 ? "Ri" : "Ap") +
    (score.D >= 0 ? "So" : "Co");

  return { typeId, score };
}

function judge() {
  const text = document.getElementById("question").value;
  let result = "";

  if (text === "") {
    document.getElementById("result").innerHTML = "文章を入力してください。";
    return;
  }

  if (text.match(/どっち|選ぶ|迷う|比較/)) {
    result = "⑪ 決断のための展開<br>理由：複数の選択肢を比較し、結果の違いを見る質問です。";
  } 
  else if (text.match(/気持ち|本音|心理/)) {
    result = "⑬ 心理レイヤー・コア／ディープ9<br>理由：感情の深層構造を読み解く内容です。";
  } 
  else if (text.match(/未来|今後|これから/)) {
    result = "⑨ タイムライン展開<br>理由：時間の流れに沿った変化を見る質問です。";
  }
  else if (text.match(/距離|関係|温度差/)) {
    result = "⑰ 関係性マトリクス<br>理由：二者間の心理的距離を分析します。";
  }
  else {
    result = "① ワンオラクル<br>理由：状況をシンプルに把握するのに適しています。";
  }

  document.getElementById("result").innerHTML = `
    <h2>おすすめの展開方法</h2>
    <p>${result}</p>
  `;
}

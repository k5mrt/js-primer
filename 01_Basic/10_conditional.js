// 条件分岐

// 一般的にネストは浅い方が読みやすい

/*
version が "ES5" ならば "ECMAScript 5" と出力
version が "ES6" ならば "ECMAScript 2015" と出力
version が "ES7" ならば "ECMAScript 2016" と出力
 */

// ネスト深いver
const year = new Date().getFullYear();
if (year % 4 === 0) { // 4で割り切れる
    if (year % 100 === 0) { // 100で割り切れる
        if (year % 400 === 0) { // 400で割り切れる
            console.log(`${year}年はうるう年です`);
        } else {
            console.log(`${year}年はうるう年ではありません`);
        }
    } else {
        console.log(`${year}年はうるう年です`);
    }
} else {
    console.log(`${year}年はうるう年ではありません`);
}

// ネスト浅いver
const year = new Date().getFullYear();
if (year % 400 === 0) { // 400で割り切れる
    console.log(`${year}年はうるう年です`);
} else if (year % 100 === 0) { // 100で割り切れる
    console.log(`${year}年はうるう年ではありません`);
} else if (year % 4 === 0) { // 4で割り切れる
    console.log(`${year}年はうるう年です`);
} else { // それ以外
    console.log(`${year}年はうるう年ではありません`);
}


// switch: ifの代用ではなく、
// 以下のように関数と組み合わせて使うことが多い
// 詳細は「関数と宣言」で
function getECMAScriptName(version) {
  switch (version) {
      case "ES5":
          return "ECMAScript 5";
      case "ES6":
          return "ECMAScript 2015";
      case "ES7":
          return "ECMAScript 2016";
      default:
          return "しらないバージョンです";
  }
}
// 関数を実行して`return`された値を得る
getECMAScriptName("ES6"); // => "ECMAScript 2015"
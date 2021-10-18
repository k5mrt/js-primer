console.log(1 === "1"); // => false
console.log(1 == "1"); // => true

1 + "2"; // => "12"

1 - "2"; // => -1


// 明示的な型変換

// 数値から文字列
String(1); // => "1"

// プリミティブ型：見た目通りの文字列返す
String("str"); // => "str"
String(true); // => "true"
String(null); // => "null"
String(undefined); // => "undefined"
String(Symbol("シンボルの説明文")); // => "Symbol(シンボルの説明文)"

// プリミティブ型以外：あまり意味のある文字列返さない
String([1, 2, 3]); // => "1,2,3"
String({ key: "value" }); // => "{object Object}"
String(function() {}); // => "function() {}"

// Stringコンストラクタ関数はプリミティブ型に対してに留める


// 文字列から数値

const input = window.prompt("数字を入力してください", "42");
const num = Number(input);
console.log(typeof num); // => "number"
console.log(num); // 入力された文字列を数値に変換したもの

// "1"をパースして10進数として取り出す
console.log(Number.parseInt("1", 10)); //=> 1
// 余計な文字は無視してパースした結果を返す
console.log(Number.parseInt("42px", 10)); // => 42
console.log(Number.parseInt("10.5", 10)); // => 10
// 文字列をパースして浮動小数点数として取り出す
console.log(Number.parseFloat("1")); // => 1
console.log(Number.parseFloat("42.5px")); // => 42.5
console.log(Number.parseFloat("10.5")); // => 10.5

// ユーザーが数字を入力するとは限らない

// 数字ではないため、数値へは変換できない
Number("文字列"); // => NaN
// 未定義の値はNaNになる
Number(undefined); // => NaN

/* NaN について
Not a NumberだけどNumber型
*/

// NaNと演算してもNaN
const x = 10;
const y = x + NaN;
const z = y + 20;
console.log(x); // => 10
console.log(y); // => NaN
console.log(z); // => NaN

// 自分自身と一致しない
console.log(NaN === NaN); // => false

// NaNか判定するメソッド
Number.isNaN(NaN); // => true

/*
・NaNは暗黙的な型変換の中でももっとも避けたい値
・どこでNaNとなったのかがわかりにくく、デバッグが難しくなる

<意図しないNaNへの変換を避ける方法>
・関数側（呼ばれる側）で、Number型の値以外を受けつけなくする
・関数を呼び出す側で、Number型の値のみを渡すようにする
=>どちらも行うことがより安全なコードにつながる
*/

// JSDoc => 関数の使い方を明示できる
/**
 * 数値を合計した値を返す
 * 1つ以上の数値とともに呼び出す必要がある
 * @param {...number} values
 * @returns {number}
 */
 function sum(...values) {
  return values.reduce((total, value) => {
      // 値がNumber型ではない場合に、例外を投げる
      if (typeof value !== "number") {
          throw new Error(`${value}はNumber型ではありません`);
      }
      return total + Number(value);
  }, 0);
}
const x = 1, z = 10;
let y; // `y`はundefined
console.log(x, y, z);
// Number型の値ではない`y`を渡しているため例外が発生する
console.log(sum(x, y, z)); // => Error


// 空文字列かどうかを判定する
!Boolean(0); // => true（falsyだとtrueになってしまう）

// 対策:
// 空文字列 := 「String型で文字長が0の値」 とする

// 空文字列かどうかを判定
function isEmptyString(str) {
  // String型でlengthが0の値の場合はtrueを返す
  return typeof str === "string" && str.length === 0;
}
console.log(isEmptyString("")); // => true
// falsyな値でも正しく判定できる
console.log(isEmptyString(0)); // => false
console.log(isEmptyString()); // => false
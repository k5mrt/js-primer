/*
jsは動的型付け言語、変数の型ない
値の型はある
プリミティブ型・オブジェクト
*/

console.log(typeof null); // => "object"
// 歴史的経緯のあるバグ

console.log(typeof ["配列"]); // => "object"
console.log(typeof {"key": "value"}); // => "object"
// 配列とオブジェクトどちらも "object" という判定結果になる

// typeof 演算子は、プリミティブ型かオブジェクトか判別するもの
// オブジェクトの詳細な種類は判定できない


// "と"で囲んだ範囲が文字列リテラル
const str = "こんにちは";

// 真偽値
true;
false;


// 整数リテラル
0; // 10進数
0b10; // 2進数 binary
0o644; // 8進数 octal
0x20A2; // 16進数 hexadecimal

// 非推奨な8進数の書き方
// strict mode は例外が発生
0644;

0xFF;
0xff;
// 小文字で書いても意味は同じ

// 浮動小数点リテラル
.123; // => 0.123
// 0 から始まる浮動小数点数は 0 を省略可能
// だが、jsでは . をオブジェクトで利用する機会が多いため、省略しないほうがよい

2e8; // => 200000000
// 2 * 10^8

console.log(Number.MAX_SAFE_INTEGER); // => 9007199254740991
// 正確に扱える最大値は 2^53-1 (2の53乗から1引いた値)

// ES2020 では BigInt という整数型のデータ型とリテラルが追加
// 2^53-1より大きな値も扱える
console.log(9007199254740992n); // => 9007199254740992n

// ES2021 から、数値リテラル内の区切りとして _ を追加できる
1000000000000;
1_000_000_000_000;

// 文字列リテラル
console.log("文字列"); // => "文字列"
console.log('文字列'); // => "文字列"
console.log(`文字列`); // => "文字列"
// js では " (ダブルクォート) と ' (シングルクォート)は同じ

'8 o\'clock'; // => "8 o'clock"
// 文字列の中に同じ記号が出現した場合は \' のようにエスケープ
"8 o'clock" // これでエスケープいらない

"複数行の\n文字列を\n入れたい"

// ES2015 テンプレートリテラル
`複数行の
文字列を
入れたい`;

const str = "文字列";
console.log(`これは${str}です`); // => "これは文字列です"

`This is \`code\``; // => "This is `code`"

// nullリテラル
foo; // "ReferenceError: foo is not defined"

const foo = null;
console.log(foo); // => null

// undefined はリテラルではない(グローバル変数)
let undefined = "独自の未定義数"; // undefined という名前の変数をエラーなく定義可能
// だが非推奨(混乱を生むだけ)

/*
true, false, null などはリテラルなので
let null;
は SyntaxError
*/

// オブジェクトリテラル
const obj = {}; // 中身が空のオブジェクトを作成
const obj1 = {
  "key": "value" // "キー名": 値
};
// キー名は文字列またはSymbol、値はプリミティブ型からオブジェクトまで何でも

// キーをプロパティ名と呼ぶ
// obj1 は key というプロパティを持つ

// ドット記法
obj1.key;
// ブラケット記法
obj["key"];

let obj2 = {
  "123": "value"
};
// OK: ブラケット記法ではかける
obj2["123"];
// NG: ドット記法では数値から始まる識別子は使えない
// obj2.123;

// 配列リテラル

// 正規表現リテラル


// ラッパーオブジェクト

//文字列をラップしたStringラッパーオブジェクト
const str = new String("文字列");
// ラッパーオブジェクトは "object" 型のデータ
console.log(typeof str); // => "object"
// Stringオブジェクトの`length`プロパティは文字列の長さを返す
console.log(str.length); // => 3

// 明示的にラッパーオブジェクトを使うべき理由はない
// プリミティブ型の文字列も`length`プロパティを参照できる
console.log(str.length); // => 3
// 暗黙的にラッパーオブジェクトへ変換している
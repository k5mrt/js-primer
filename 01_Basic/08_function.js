// 関数

// 呼び出しの引数が少ないとき
// 足りないとこにはundefined
function echo (x) {
  return x;
}
console.log(echo()); // => undefined

function argumentsToArray(x, y) {
  return [x, y];
}
// 仮引数のxには1、yにはundefinedが入る
console.log(argumentsToArray(1)); // => [1, undefined]


// [ES2015] デフォルト引数
// function 関数名(仮引数1 = デフォルト値1, 仮引数2 = デフォルト値2) {}
function echo1(x = "デフォルト値") {
  return x;
}
console.log(echo()); // => "デフォルト値"

// ?? を使った書き方
function echo2(x) {
  const ech = x ?? "デフォルト";
  return ech;
}
console.log(echo2()); // => デフォルト


// 呼び出しの数が多いとき
// 多いものは無視
function add(x, y) {
  return x + y;
}
add(1, 3); // => 4
add(1, 3, 5); // => 4


// 可変長引数
// 固定した値ではなく、任意の個数の引数を受け取れること

// Math.max(...args)
const max = Math.max(1, 5, 10, 20);
console.log(max); // => 20


// Rest parameters 残余引数
// ...args こういう仮引数
// 引数をまとめた配列を、仮引数に定義する構文

function fn(...args) {
  // argsは引数の値が順番に入った配列
  console.log(args); // => ["a", "b", "c"]
}
fn("a", "b", "c");

//1番目の引数はarg1に代入され、
//残りの引数がrestArgsに配列として代入
function fn(arg1, ...restArgs) {
  console.log(arg1); // => "a"
  console.log(restArgs); // => ["b", "c"]
}
fn("a", "b", "c");


// Spread構文
// ...(配列)
// 配列を展開して関数の引数に渡す
function fn(x, y, z) {}
const array = [1, 2, 3];
fn(...array);
// 次のように書いたのと同じ意味
fn(array[0], array[1], array[2]);


// arguments (Rest parametersを優先して使う)
// 関数に渡された引数の値が全て入った Array-like なオブジェクト
// Arrat-like: インデックスで要素へアクセスできるが、Arrayのメソッドは使えない

function fn() {
  // `arguments`はインデックスを指定して各要素にアクセスできる
  console.log(arguments[0]); // => "a"
  console.log(arguments[1]); // => "b"
  console.log(arguments[2]); // => "c"
}
fn("a", "b", "c");

/*
argumentsの問題点
・Arrow Functionでは利用できない（Arrow Functionについては後述）
・Array-likeオブジェクトであるため、Arrayのメソッドを利用できない
・関数が可変長引数を受けつけるのかを仮引数だけを見て判断できない

Rest parametersでの実装を推奨
*/
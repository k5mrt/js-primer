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


// ES2015 関数の引数と分割代入

function printUserId(user) {
  console.log(user.id); // => 42
}
const user = {
  id: 42
};
printUserId(user);

//これを以下に書ける

// 第1引数のオブジェクトから`id`プロパティを変数`id`として定義する
function printUserId({ id }) {
  console.log(id); // => 42
}
const user = {
  id: 42
};
printUserId(user);


const user = {
  id: 42
};
// オブジェクトの分割代入
const { id } = user;
console.log(id); // => 42
//関数の引数の分割代入
function printUserId({ id }) {
  console.log(id); // => 42
}
printUserId(user);

// オブジェクトの分割代入の左辺が、関数の仮引数に、
// オブジェクトの分割代入の右辺が、関数に渡す引数に対応


// 関数の分割代入・配列ver
function print([first, second]) {
  console.log(first); // => 1
  console.log(second); // => 2
}
const array = [1, 2];
print(array);


// 関数はオブジェクト

function fn() {
  console.log("fnmが呼び出されました");
}
// 関数`fn`を `myFunc` `変数に代入している
const myFunc = fn;
myFunc();

// 関数が値として扱えること：ファーストクラスファンクション

// 関数式
const fnName = function() {
  // 関数を呼び出した時の処理
  // ...
  return /*関数の返り値*/;
};

// 関数式は変数名で参照可能、よって関数名は省略可
const fnName = function() {
};
// 関数宣言では関数名は省略できない
function fnName() {
};

// 関数式では、名前を持たない関数を、変数に代入できる
// 名前を持たない関数：匿名関数（無名関数）

// `factorial`は関数の外から呼び出せる
// `innerFact`は関数の外から呼び出せない
const factorial = function innerFact(n) {
  if ( n === 0) {
    return 1;
  }
  // innerFactを再帰的に呼び出し
  return n * innerFact(n - 1);
};
console.log(factorial(3)); // => 6
// factrial:階乗


// [ES2015] Arrow Function
const fn = () => {
  // 処理
  return;
};

// Arrow Functionには書き方にいくつかのパターンがありますが、
// functionキーワードに比べて短く書ける

/*
・関数の仮引数が1つのときは()を省略できる
・関数の処理が1つの式である場合に、ブロックとreturn文を省略できる
  ・その式の評価結果をreturnの返り値とする
*/

// 仮引数の数の定義
const fnA = () => { /* 仮引数がないとき */};
const fnB = (x) => { /* 仮引数が1つ */};
const fnC = x => { /* 仮引数が1つの時は ()）省略可 */};
const fnD = (x, y) => { /* 仮引数が複数 */};

// 値の返し方
// 次の2つの定義は同じ意味
const mulA = x => { return x * x }; // ブロック内でreturn
const mulB = x => x * x; // 1行の時はreturnとブロックを省略可

/* Arrow Function の特徴
・名前をつけることができない（常に匿名関数）
・thisが静的に決定できる（詳細は「関数とスコープ」の章で解説します）
・functionキーワードに比べて短く書くことができる
・newできない（コンストラクタ関数ではない）
・arguments変数を参照できない
*/

// たとえばfunctionキーワードの関数式では、
// 値を返すコールバック関数を次のように書きます。
// 配列のmapメソッドは、配列の要素を順番にコールバック関数へ渡し、
// そのコールバック関数が返した値を新しい配列にして返します。
const array = [1, 2, 3];
// 1,2,3と順番に値が渡されコールバック関数（匿名関数）が処理する
const doubleArray = array.map(function(value) {
  return value * 2; // 返した値をまとめた配列ができる
});
console.log(doubleArray); // => [2, 4, 6]

// Arrow Functionで書いた場合
const array = [1, 2, 3];
// 処理が1つなのでreturnとブロック省略可
const doubleArray = array.map(value => value * 2);
console.log(doubleArray); // => [2, 4, 6]


// Arrow Function優先
// 問題ある場合だけfunctionを使う


// [コラム] 同じ名前の関数宣言は上書きされる
function fn(x) {
  return `最初の関数 x: ${x}`;
}
function fn(x, y) {
  return `最後の関数 x: ${x}, y: ${y}`;
}
console.log(fn(2, 10)); // => "最後の関数 x: 2, y: 10"


// コールバック関数: 引数として渡される関数のこと
// 高階関数: コールバック関数を引数として使う関数やメソッドのこと
function 高階関数(コールバック関数) {
  コールバック関数();
}

// 配列のforEachメソッドはコールバック関数を引数として受け取る高階関数
// forEachメソッドは、配列の各要素に対してコールバック関数を一度ずつ呼び出す
const array = [1, 2, 3];
const output = (value) => {
    console.log(value);
};
array.forEach(output);
// 次のように実行しているのと同じ
// output(1); => 1
// output(2); => 2
// output(3); => 3

const array = [1, 2, 3];
array.forEach((value) => {
    console.log(value);
});


// メソッド
//  JavaScriptにおいて、関数とメソッドの機能的な違いはありません。
// ここではオブジェクトのプロパティである関数をメソッドと呼びます。

const obj = {
  method1: function() {
      // `function`キーワードでのメソッド
  },
  method2: () => {
      // Arrow Functionでのメソッド
  }
};


// 次のように空オブジェクトのobjを定義してから
// methodプロパティへ関数を代入してもメソッドを定義できます。
const obj = {};
obj.method = function() {  
};

// [ES2015] メソッドの短縮記法(推奨)
// オブジェクトリテラルの中で メソッド名(){ /*メソッドの処理*/ } と書くことができる
const obj = {
  method() {
    return "this is method";
  }
};
console.log(obj.method()); // => "this is method";
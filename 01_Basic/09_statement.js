// 文(Statement)と式(Expression)

// Expression
// 値を生成し、変数に代入できるもの
// 42 のようなリテラル, foo のような変数, 関数呼び出しなど
// 1 + 1 のような式と演算子の組み合わせも式

// 式：評価すると結果の値を得る
// => 評価値

// 1という式の評価値を表示
console.log(1); // => 1
// 1 + 1という式の評価値を表示
console.log(1 + 1); // => 2
// 式の評価値を変数に代入
const total = 1 + 1;
// 関数式の評価値(関数オブジェクト)を変数に代入
const fn = function() {
    return 1;
};
// fn() という式の評価値を表示
console.log(fn()); // => 1

// 評価した結果を変数に代入できるものは式


// Statement
// 処理する1ステップが1つの文
// JSでは文の末尾にセミコロン(;)を置くことで文と文に区切りをつける

// 文の処理の一部に式を含むことがある
const isTrue = true;
// isTrueという式がif文の中に出てくる
if (isTrue) {
}

// if文などは文であり式にはなれない
// <=> 変数へ代入することはできない


// 式文(Expression statement)
// 文となった式のこと


// ブロック
// ブロックには複数の文が書ける

// if文とブロック文の組み合わせ
if (true) {
  console.log("文1");
  console.log("文2");
}

// ブロックで終わる文の末尾には、セミコロンが不要

// ブロックで終わらない文なので、セミコロンが必要
if (true) console.log(true);
// ブロックで終わる文なので、セミコロンが不要
if (true) {
    console.log(true);
}


// REPLでは、単独のブロック文が役に立つことがある

/*
// REPLでの動作。»はREPLの入力欄
» const count = 1;
undefined
» const count = 2;
SyntaxError: redeclaration of const count
 */

// ブロック文の中でletやconstを用いて変数を定義しても、
// そのブロック文の外には影響しない
/*
// REPLでの動作。»はREPLの入力欄
» {
    const count = 1;
}
undefined // ここでブロック内で定義した変数`count`は参照できなくなる
» {
    const count = 1;
}
undefined // ここでブロック内で定義した変数`count`は参照できなくなる
*/

// 詳細は「関数とスコープ」で


// function宣言(文)とfunction式

// learn関数を宣言する関数宣言文
function learn() {
}
// ブロックで終わる文なのでセミコロン不要

// 関数式をread変数へ代入
const read = function() {
};
// この匿名関数は式であり、文の一部。なのでセミコロン必要

//上記2つを簡略化したもの
function fn() {}
// fn(式)の評価値を代入する変数宣言の文
const read = fn;
// 文字列の結合
const value = "文字列" + "結合";
console.log(value); // => "文字列結合"

// ES2016 べき乗
2**4; // 16
//同じ
Math.pow(2, 4); // 16

// 単項演算子 + はオペランドを数値に変換
+"1" // 1

+"文字列" // NaN
// Not-a-Number 数値ではないがNumber型の値
// どの値とも一致しない
Nan === NaN // false 自身とも一致しない
typeof NaN // number
// Number.isNaN メソッドで判定できる
Number.isNaN(NaN) // true

// 単項演算子は文字列から数値への変換に使うべきでない
// 明示的な変換を使う

// インクリメント演算子

// 後置インクリメント演算子
/*
num++
1.numの評価結果を返す
2.numに対して+1する
*/
let x = 1
x++ // => 1
x // =>2

// 前置インクリメント演算子
/*
++num
1.numに対して+1する
2.numの評価結果を返す
*/
let x = 1
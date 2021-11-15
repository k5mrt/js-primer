// " と ' に意味的な違いはない

// ` では文字列中に改行を入力可能
const multiline = `1行目
2行目
3行目`;
// \n は改行を意味する
console.log(multiline); // => "1行目\n2行目\n3行目"


// テンプレートリテラル
// ${変数名} で書かれた変数は評価時に展開される
const temp = "JavaScript";
console.log(`Hello ${temp}!`); // => "Hello JavaScript!"


// 文字へのアクセス
// インデックスを指定する
const str = "文字列";
console.log(str[0]); // => "文"
console.log(str[1]); // => "字"
console.log(str[2]); // => "列"

console.log(str[42]); // => undefined



// ビルトインメソッド：オブジェクトに自動的に実装されるメソッド


// Objectはすべての元（もと？）

// Array, String, Function などのオブジェクトは、
// すべてObjectを継承している
// 正確には、ほとんどすべてのオブジェクトは、
// Object.prototype プロパティに定義された prototype オブジェクトを継承している

// prototype オブジェクト：すべてのオブジェクト作成時に自動的に追加される特殊なオブジェクト

// この書籍では、Object.prototype.toStringのようなプロトタイプメソッドを
// Object#toStringと短縮して表記

const obj = {
  "key": "value"
};
// `obj`インスタンスは`Object.prototype`に定義されたものを継承する
// `obj.toString`は継承した`Object.prototype.toString`を参照している
console.log(obj.toString === Object.prototype.toString); // => true
// インスタンスからプロトタイプメソッドを呼び出せる
console.log(obj.toString()); // => "[object Object]"



// プロトタイプメソッドとインスタンスメソッドの優先順位
// インスタンスとプロトタイプオブジェクトで同じ名前のメソッドがある場合には、
// インスタンスのメソッドが優先されます
const customObject = {
  toString() {
      return "custom value";
  }
};
console.log(customObject.toString()); // => "custom value"



// in演算子とObject#hasOwnPropertyメソッドの違い

// hasOwnPropertyメソッド:
// そのオブジェクト自身が指定したプロパティを持っているかを判定

// in演算子：
// オブジェクト自身が持っていなければ、
// そのオブジェクトの継承元であるprototypeオブジェクトまで探索して持っているかを判定

const obj = {};
// `obj`というオブジェクト自体に`toString`メソッドが定義されているわけではない
console.log(obj.hasOwnProperty("toString")); // => false
// `in`演算子は指定されたプロパティ名が見つかるまで親をたどるため、`Object.prototype`まで見にいく
console.log("toString" in obj); // => true


// インスタンスがtoStringメソッドを持っている場合はhasOwnPropertyもtrue返す

// オブジェクトのインスタンスにtoStringメソッドを定義
const obj = {
  toString() {
      return "custom value";
  }
};
// オブジェクトのインスタンスが`toString`メソッドを持っている
console.log(obj.hasOwnProperty("toString")); // => true
console.log("toString" in obj); // => true



// Object.createメソッド:オブジェクトの継承元を明示する
// 第一引数に指定したprototypeオブジェクトを継承した新しいオブジェクトを作成
// (Object.createメソッドを使うことでプロトタイプオブジェクトを継承しないオブジェクトを作成できる)

// const obj = {} と同じ意味
const obj = Object.create(Object.prototype);
// `obj`は`Object.prototype`を継承している
console.log(obj.hasOwnProperty === Object.prototype.hasOwnProperty); // => true



// ArrayもObjectを継承している
// ビルトインオブジェクトArrayもArray.prototypeを持っています
// // Arrayのインスタンス → Array.prototype → Object.prototype

// ここでは、Object.prototypeは
// すべてのオブジェクトの親となるオブジェクトであることを覚えておくだけで問題ありません
// => ArrayやStringなどのインスタンスもObject.prototypeが持つメソッドを利用できる

// また、Array.prototypeなどもそれぞれ独自のメソッドを定義しています
// ex) 配列のインスタンスでtoStringメソッドを呼び出すとArray#toStringが優先して呼び出されます
const numbers = [1, 2, 3];
// `Array#toString`が定義されているため、`Object#toString`とは異なる形式となる
console.log(numbers.toString()); // => "1,2,3"


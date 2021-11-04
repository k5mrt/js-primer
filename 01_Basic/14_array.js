// 配列

// 要素：格納した値
// インデックス：位置

// jsの配列は可変長
// 作成後に要素を追加・削除できる


// lengthプロパティ:配列の要素の数
// 最後の要素: array.length - 1
const array = ["one", "two", "three"];
console.log(array.length); // => 3
// 配列の要素数 - 1 が 最後の要素のインデックスとなる
console.log(array[array.length - 1]); // => "three"


// 存在しないインデックスに対してアクセスした場合に、
// 例外ではなくundefinedを返します
const array = ["one", "two", "three"];
// `array`にはインデックスが100の要素は定義されていない
console.log(array[100]); // => undefined

// 配列がオブジェクトであることを考えると、
// 存在しないプロパティへアクセスしているのと原理は同じ

// 配列は常にlengthの数だけ要素を持っているとは限りません
// 未定義の箇所が1つ含まれる: 疎な配列
// インデックスが1の値を省略しているので、カンマが2つ続いていることに注意
const sparseArray = [1,, 3];
console.log(sparseArray.length); // => 3
// 1番目の要素は存在しないため undefined が返る
console.log(sparseArray[1]); // => undefined

// 隙間がなくすべてのインデックスに要素がある配列: 密な配列



// オブジェクトが配列かどうかを判定する
// Array.isArrayメソッド
const obj = {};
const array = [];
console.log(Array.isArray(obj)); // => false
console.log(Array.isArray(array)); // => true

// typeof演算子では配列かどうかを判定することはできません
// 配列もオブジェクトの一種であるため、
// typeof演算子の結果が"object"となる
const array = [];
console.log(typeof array); // => "object"



// [コラム] [ES2015] TypedArray
// 固定長でかつ型つきの配列を扱う別のオブジェクト



// [ES2015] 配列と分割代入
const array = ["one", "two", "three"];
const [first, second, third] = array;
console.log(first);  // => "one"
console.log(second); // => "two"
console.log(third);  // => "three"



// [コラム] undefinedの要素と未定義の要素の違い

// 疎な配列で該当するインデックスに要素がない場合はundefinedを返します。 
// しかし、undefinedという値も存在するため、
// 配列にundefinedという値がある場合に区別できません
//
// 要素として`undefined`を持つ密な配列
const denseArray = [1, undefined, 3];
// 要素そのものがない疎な配列
const sparseArray = [1, , 3];
console.log(denseArray[1]); // => undefined
console.log(sparseArray[1]); // => undefined

// この違いを見つける方法として利用できるのが
// Object#hasOwnPropertyメソッド
// 配列の指定したインデックスに要素自体が存在するかを判定
const denseArray = [1, undefined, 3];
const sparseArray = [1, , 3];
// 要素自体は`undefined`値が存在する
console.log(denseArray.hasOwnProperty(1)); // => true
// 要素自体がない
console.log(sparseArray.hasOwnProperty(1)); // => false



// 配列から要素を検索
// ・その要素のインデックスが欲しい場合
// ・その要素自体が欲しい場合
// ・その要素が含まれているかという真偽値が欲しい場合


// インデックスを取得
// Array#indexOfメソッドや
// Array#findIndexメソッド[ES2015]
// を利用

const array = ["Java", "JavaScript", "Ruby"];
const indexOfJS = array.indexOf("JavaScript");
console.log(indexOfJS); // => 1
console.log(array[indexOfJS]); // => "JavaScript"
// "JS" という要素はないため `-1` が返される
console.log(array.indexOf("JS")); // => -1

// indexOfメソッドは配列からプリミティブな要素を発見できますが、
// オブジェクトは持っているプロパティが同じでも別オブジェクトだと異なるものとして扱われます。
// これは、異なる参照を持つオブジェクト同士は===で比較しても一致しないため
const obj = { key: "value" };
const array = ["A", "B", obj];
console.log(array.indexOf({ key: "value" })); // => -1
// リテラルは新しいオブジェクトを作るため、異なるオブジェクトだと判定される
console.log(obj === { key: "value" }); // => false
// 等価のオブジェクトを検索してインデックスを返す
console.log(array.indexOf(obj)); // => 2

// このように、異なるオブジェクトだが値は同じものを見つけたい場合には、
// Array#findIndexメソッド
// が利用できます
// findIndexメソッドの引数には配列の各要素をテストする関数をコールバック関数として渡します。
//
// colorプロパティを持つオブジェクトの配列
const colors = [
  { "color": "red" },
  { "color": "green" },
  { "color": "blue" }
];
// `color`プロパティが"blue"のオブジェクトのインデックスを取得
const indexOfBlue = colors.findIndex((obj) => {
  return obj.color === "blue";
});
console.log(indexOfBlue); // => 2
console.log(colors[indexOfBlue]); // => { "color": "blue" }


// 条件に一致する要素を取得
// Array#findメソッド[ES2015]
// findIndexメソッドと同様にテストする関数をコールバック関数として渡します。
// findメソッドの返り値は、要素そのものとなり、
// 要素が存在しない場合はundefinedを返します。
//
// colorプロパティを持つオブジェクトの配列
const colors = [
  { "color": "red" },
  { "color": "green" },
  { "color": "blue" }
];
// `color`プロパティが"blue"のオブジェクトを取得
const blueColor = colors.find((obj) => {
  return obj.color === "blue";
});
console.log(blueColor); // => { "color": "blue" }
// 該当する要素がない場合は`undefined`を返す
const whiteColor = colors.find((obj) => {
  return obj.color === "white";
});
console.log(whiteColor); // => undefined


// 指定範囲の要素を取得
// Array#sliceメソッド
// 第一引数に開始位置、第二引数に終了位置を指定することで、
// その範囲を取り出した新しい配列を返します。 
// 第二引数は省略でき、省略した場合は配列の末尾が終了位置となる
//  0 1 2 3 4
// + + + + + +
// 0 1 2 3 4
//
const array = ["A", "B", "C", "D", "E"];
// インデックス1から4の範囲を取り出す
console.log(array.slice(1, 4)); // => ["B", "C", "D"]
// 第二引数を省略した場合は、第一引数から末尾の要素までを取り出す
console.log(array.slice(1)); // => ["B", "C", "D", "E"]
// マイナスを指定すると後ろからの数えた位置となる
console.log(array.slice(-1)); // => ["E"]
// 第一引数と第二引数が同じ場合は、空の配列を返す
console.log(array.slice(1, 1)); // => []
// 第一引数 > 第二引数の場合、常に空配列を返す
console.log(array.slice(4, 1)); // => []


// 真偽値を取得

// Array#includesメソッド[ES2016]
// 配列に指定要素が含まれているかを判定
// 真偽値を返す
//
const array = ["Java", "JavaScript", "Ruby"];
// `includes`は含まれているなら`true`を返す
if (array.includes("JavaScript")) {
    console.log("配列にJavaScriptが含まれている");
}

// 異なるオブジェクトだが値が同じものを見つけたい場合
// Array#someメソッド
// Array#findメソッドのようにテストするコールバック関数を利用
// colorプロパティを持つオブジェクトの配列
const colors = [
  { "color": "red" },
  { "color": "green" },
  { "color": "blue" }
];
// `color`プロパティが"blue"のオブジェクトがあるかどうか
const isIncludedBlueColor = colors.some((obj) => {
  return obj.color === "blue";
});
console.log(isIncludedBlueColor); // => true



// 追加と削除
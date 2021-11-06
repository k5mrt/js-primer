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

// 末尾へ追加するにはArray#push
// 末尾から要素を削除するにはArray#pop
const array = ["A", "B", "C"];
array.push("D"); // "D"を末尾に追加
console.log(array); // => ["A", "B", "C", "D"]
const poppedItem = array.pop(); // 最末尾の要素を削除し、その要素を返す
console.log(poppedItem); // => "D"
console.log(array); // => ["A", "B", "C"]

// 先頭へ追加するにはArray#unshift
// 先頭から要素を削除するにはArray#shift
const array = ["A", "B", "C"];
array.unshift("S"); // "S"を先頭に追加
console.log(array); // => ["S", "A", "B", "C"]
const shiftedItem = array.shift(); // 先頭の要素を削除
console.log(shiftedItem); // => "S"
console.log(array); // => ["A", "B", "C"]



// 配列同士を結合
// Array#concatメソッド
const array = ["A", "B", "C"];
const newArray = array.concat(["D", "E"]);
console.log(newArray); // => ["A", "B", "C", "D", "E"]

// concatメソッドは配列だけではなく任意の値を要素として結合できます
const array = ["A", "B", "C"];
const newArray = array.concat("新しい要素");
console.log(newArray); // => ["A", "B", "C", "新しい要素"]



// [ES2015] 配列の展開
// ...（Spread構文）
// を使うことで、配列リテラル中に既存の配列を展開できます

// 次のコードでは、配列リテラルの末尾に配列を展開しています
// これは、Array#concatメソッドで配列同士を結合するのと同じ結果になります
const array = ["A", "B", "C"];
// Spread構文を使った場合
const newArray = ["X", "Y", "Z", ...array];
// concatメソッドの場合
const newArrayConcat = ["X", "Y", "Z"].concat(array);
console.log(newArray); // => ["X", "Y", "Z", "A", "B", "C"]
console.log(newArrayConcat); // => ["X", "Y", "Z", "A", "B", "C"]

// Spread構文は、concatメソッドとは異なり、
// 配列リテラル中の任意の位置に配列を展開できます
const array = ["A", "B", "C"];
const newArray = ["X", ...array, "Z"];
console.log(newArray); // => ["X", "A", "B", "C", "Z"]



// [ES2019] 配列をフラット化
// Array#flatメソッド[ES2019]を使うことで、多次元配列をフラットな配列に変換できます
// 引数を指定しなかった場合は1段階のみのフラット化ですが、
// 引数に渡す数値でフラット化する深さを指定できます
// 配列をすべてフラット化する場合には、無限を意味するInfinityを値として渡すことで実現
//
const array = [[["A"], "B"], "C"];
// 引数なしは 1 を指定した場合と同じ
console.log(array.flat()); // => [["A"], "B", "C"]
console.log(array.flat(1)); // => [["A"], "B", "C"]
console.log(array.flat(2)); // => ["A", "B", "C"]
// すべてをフラット化するには Infinity を渡す
console.log(array.flat(Infinity)); // => ["A", "B", "C"]

// Array#flatメソッドは必ず新しい配列を作成して返すメソッド
// そのため、これ以上フラット化できない配列をフラット化しても、
// 同じ要素を持つ新しい配列を返します
const array = ["A", "B", "C"];
console.log(array.flat()); // => ["A", "B", "C"]



// 配列から要素を削除

// 配列の任意のインデックスの要素を削除するには
// Array#splice
// Array#spliceメソッドを利用すると、削除した要素を自動で詰めることができます
// Array#spliceメソッドは指定したインデックスから、指定した数だけ要素を取り除き、
// 必要ならば要素を同時に追加できます
//
const array = [];
array.splice(インデックス, 削除する要素数);
// 削除と同時に要素の追加もできる
array.splice(インデックス, 削除する要素数, ...追加する要素);

// 配列のインデックスが1の要素を削除するには、
//インデックス1から1つの要素を削除するという指定をする必要があります
//このとき、削除した要素は自動で詰められるため、疎な配列にはなりません
//
const array = ["a", "b", "c"];
// 1番目から1つの要素("b")を削除
array.splice(1, 1);
console.log(array); // => ["a", "c"]
console.log(array.length); // => 2
console.log(array[1]); // => "c"
// すべて削除
array.splice(0, array.length);
console.log(array.length); // => 0


// lengthプロパティへの代入
// 配列のすべての要素を削除することはArray#spliceで行えますが、 
// 配列のlengthプロパティへの代入を利用した方法もあります
//
const array = [1, 2, 3];
array.length = 0; // 配列を空にする
console.log(array); // => []
//
// 配列のlengthプロパティへ要素数を代入すると、その要素数に配列が切り詰められます
// つまり、lengthプロパティへ0を代入すると、インデックスが0以降の要素がすべて削除されます


// 空の配列を代入
// その配列の要素を削除するのではなく、新しい空の配列を変数へ代入する方法
//
let array = [1, 2, 3];
console.log(array.length); // => 3
// 新しい配列で変数を上書き
array = [];
console.log(array.length); // => 0

// constで宣言した配列の場合は変数に対して再代入できないため、この手法は使えません
const array = [1, 2, 3];
console.log(array.length); // => 3
// `const`で宣言された変数には再代入できない
array = []; // TypeError: invalid assignment to const `array' が発生



// 破壊的なメソッドと非破壊的なメソッド
// 破壊的なメソッド:
// 配列オブジェクトそのものを変更し、変更した配列または変更箇所を返すメソッド
// 非破壊的メソッド:
// 配列オブジェクトのコピーを作成してから変更し、そのコピーした配列を返すメソッド

// 破壊的なメソッドの例:
// 配列に要素を追加するArray#pushメソッド
// pushメソッドは、myArrayの配列そのものへ要素を追加しています
// その結果myArray変数の参照する配列が変更される
//
const myArray = ["A", "B", "C"];
const result = myArray.push("D");
// `push`の返り値は配列ではなく、追加後の配列のlength
console.log(result); // => 4
// `myArray`が参照する配列そのものが変更されている
console.log(myArray); // => ["A", "B", "C", "D"]

// 非破壊的なメソッドの例:
// 配列に要素を結合するArray#concatメソッド
// myArray変数の参照する配列は変更されない
//
const myArray = ["A", "B", "C"];
// `concat`の返り値は結合済みの新しい配列
const newArray = myArray.concat("D");
console.log(newArray); // => ["A", "B", "C", "D"]
// `myArray`は変更されていない
console.log(myArray); // => ["A", "B", "C"]
// `newArray`と`myArray`は異なる配列オブジェクト
console.log(myArray === newArray); // => false


// JavaScriptにおいて破壊的なメソッドと非破壊的メソッドを名前から見分ける方法はありません
// 破壊的であることについてのコメントがあると親切

// 関数を非破壊的なものにするには、受け取った配列をコピーしてから変更を加える必要があります

// 配列をコピーする方法としてArray#sliceメソッドとArray#concatメソッド
// 引数なしで呼び出すと、その配列のコピーを返します
//
const myArray = ["A", "B", "C"];
// `slice`は`myArray`のコピーを返す - `myArray.concat()`でも同じ
const copiedArray = myArray.slice();
myArray.push("D");
console.log(myArray); // => ["A", "B", "C", "D"]
// `array`のコピーである`copiedArray`には影響がない
console.log(copiedArray); // => ["A", "B", "C"]
// コピーであるため参照は異なる
console.log(copiedArray === myArray); // => false



// 配列を反復処理するメソッド

// Array#forEach
// 配列の要素を先頭から順番にコールバック関数へ渡し、反復処理を行う
const array = [1, 2, 3];
array.forEach((currentValue, index, array) => {
    console.log(currentValue, index, array);
});
// コンソールの出力
// 1, 0, [1, 2, 3]
// 2, 1, [1, 2, 3]
// 3, 2, [1, 2, 3]


//Array#map
// 配列の要素を順番にコールバック関数へ渡し、
// コールバック関数が返した値から新しい配列を返す非破壊的なメソッド
// 配列の各要素を加工したい場合に利用
// 返り値は、それぞれのコールバック関数が返した値を集めた新しい配列
//
const array = [1, 2, 3];
// 各要素に10を乗算した新しい配列を作成する
const newArray = array.map((currentValue, index, array) => {
    return currentValue * 10;
});
console.log(newArray); // => [10, 20, 30]
// 元の配列とは異なるインスタンス
console.log(array === newArray); // => false


// Array#filter
// コールバック関数がtrueを返した要素だけを集めた新しい配列を返す非破壊的なメソッド
// 配列から不要な要素を取り除いた配列を作成したい場合に利用
// 返り値は、コールバック関数がtrueを返した要素だけを集めた新しい配列
//
const array = [1, 2, 3];
// 奇数の値を持つ要素だけを集めた配列を返す
const newArray = array.filter((currentValue, index, array) => {
    return currentValue % 2 === 1;
});
console.log(newArray); // => [1, 3]
// 元の配列とは異なるインスタンス
console.log(array === newArray); // => false


// Array#reduce
// 累積値（アキュムレータ）と配列の要素を順番にコールバック関数へ渡し、1つの累積値を返します
// 配列から配列以外を含む任意の値を作成したい場合に利用
// コールバック関数の引数:
// 累積値, 要素, インデックス, 配列
// reduceメソッドの第二引数: 累積値の初期値となる値を渡せます

// reduceメソッドは初期値を0として配列の各要素を加算した1つの数値を返します。 
// つまり配列から配列要素の合計値というNumber型の値を返しています。
//
const array = [1, 2, 3];
// すべての要素を加算した値を返す
// accumulatorの初期値は`0`
const totalValue = array.reduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue;
}, 0);
// 0 + 1 + 2 + 3という式の結果が返り値になる
console.log(totalValue); // => 6



// [コラム] Array-likeオブジェクト
// 配列のように扱えるが配列ではないオブジェクト

// Array-likeオブジェクトの例としてargumentsがあります
// functionで宣言した関数の中から参照できる変数
// 引数に渡された値が順番に格納されていて、配列のように引数へアクセスできます
//
function myFunc() {
  console.log(arguments[0]); // => "a"
  console.log(arguments[1]); // => "b"
  console.log(arguments[2]); // => "c"
  // 配列ではないため、配列のメソッドは持っていない
  console.log(typeof arguments.forEach); // => "undefined"
}
myFunc("a", "b", "c");


// Array-likeオブジェクトか配列なのかを判別するにはArray.isArrayメソッドを利用
function myFunc() {
  console.log(Array.isArray([1, 2, 3])); // => true
  console.log(Array.isArray(arguments)); // => false
}
myFunc("a", "b", "c");


// Array.fromメソッド[ES2015]を使うことでArray-likeオブジェクトを配列に変換して扱うことができます
function myFunc() {
  // Array-likeオブジェクトを配列へ変換
  const argumentsArray = Array.from(arguments);
  console.log(Array.isArray(argumentsArray)); // => true
  // 配列のメソッドを利用できる
  argumentsArray.forEach(arg => {
      console.log(arg);
  });
}
myFunc("a", "b", "c");



// メソッドチェーンと高階関数
// メソッドを呼び出した返り値に対してメソッド呼び出しをするパターン

// 次のコードでは、
// Array#concatメソッドの返り値、つまり配列に対して
// さらにconcatメソッドを呼び出す
// というメソッドチェーンが行われています
const array = ["a"].concat("b").concat("c");
console.log(array); // => ["a", "b", "c"]

// メソッドチェーンを利用することで処理の見た目を簡潔にできます

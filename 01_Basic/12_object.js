// オブジェクト：プロパティの集合
// プロパティ：名前（キー）と値（バリュー）が対になったもの
// キー：文字列またはSymbolが使用できる
// 値：任意のデータ

// {}: オブジェクトリテラル

// プロパティを持たない空のオブジェクトを作成
const obj = {};

// プロパティを持つオブジェクトを定義する
const obj = {
  // キー: 値
  "key": "value"
};

// プロパティ名（キー）はクォートを省略することが可能
const obj = {
  // キー: 値
  key: "value"
};

const object = {
  // キー: 値
  //my-prop: "value" // NG
  "my-prop": "value" // OK
};

// 複数のプロパティ
const color = {
  // それぞれのプロパティは`,`で区切る
  red: "red",
  green: "green",
  blue: "blue"
};

// プロパティの値に変数名を指定すれば、そのキーは指定した変数を参照します
const name = "名前";
// `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
const obj = {
    name: name
};
console.log(obj); // => { name: "名前" }

// ES2015から
// 変数名が同じ場合は{ name }のように省略可能
const name = "名前";
// `name`というプロパティ名で`name`の変数を値に設定したオブジェクト
const obj = {
    name
};
console.log(obj); // => { name: "名前" }


// プロパティへのアクセス

const obj = {
  key: "value"
};
// ドット記法で参照
console.log(obj.key); // => "value"
// ブラケット記法で参照
console.log(obj["key"]); // => "value"

// ドット記法
obj.key; // OK
// プロパティ名が数字から始まる識別子は利用できない
//obj.123; // NG
// プロパティ名にハイフンを含む識別子は利用できない
//obj.my-prop; // NG

// ブラケット記法
const obj = {
  key: "value",
  123: 456,
  "my-key": "my-value"
};
console.log(obj["key"]); // => "value"
// プロパティ名が数字からはじまる識別子も利用できる
console.log(obj[123]); // => 456
// プロパティ名にハイフンを含む識別子も利用できる
console.log(obj["my-key"]); // => "my-value"

// ブラケット記法ではプロパティ名に変数も利用できます
const languages = {
  ja: "日本語",
  en: "英語"
};
const myLang = "ja";
console.log(languages[myLang]); // => "日本語"
実行

// 基本的には簡潔なドット記法（.）を使い、
// ドット記法で書けない場合はブラケット記法（[]）を使うとよい



// ES2015 オブジェクトと分割代入

// 短い名前で利用できるように、そのプロパティを変数として定義し直す
const languages = {
  ja: "日本語",
  en: "英語"
};
const ja = languages.ja;
const en = languages.en;
console.log(ja); // => "日本語"
console.log(en); // => "英語"

// オブジェクトのプロパティを変数として定義し直すときには、
// 分割代入（Destructuring assignment）が利用できます。
const languages = {
  ja: "日本語",
  en: "英語"
};
const { ja, en } = languages;
console.log(ja); // => "日本語"
console.log(en); // => "英語"



// プロパティの追加

// 空のオブジェクト
const obj = {};
// `key`プロパティを追加して値を代入
obj.key = "value";
console.log(obj.key); // => "value"


// 次のものをプロパティ名として扱う場合にはブラケット記法を利用
// ・変数
// ・変数の識別子として扱えない文字列（詳細は「変数と宣言」の章を参照）
// ・Symbol

const key = "key-string";
const obj = {};
// `key`の評価結果 "key-string" をプロパティ名に利用
obj[key] = "value of key";
// 取り出すときも同じく`key`変数を利用
console.log(obj[key]); // => "value of key"

// Computed property names
// オブジェクトリテラル内でのブラケット記法を使ったプロパティ名
const key = "key-string";
// Computed Propertyで`key`の評価結果 "key-string" をプロパティ名に利用
const obj = {
    [key]: "value"
};
console.log(obj[key]); // => "value"


// プロパティを初期化時以外に追加してしまうと、
// そのオブジェクトがどのようなプロパティを持っているかがわかりにくくなる

// できる限り作成後に新しいプロパティは追加しないほうがよいでしょう。 
// オブジェクトの作成時のオブジェクトリテラルの中でプロパティを定義することを推奨



// プロパティの削除
const obj = {
  key1: "value1",
  key2: "value2"
};
// key1プロパティを削除
delete obj.key1;
// key1プロパティが削除されている
console.log(obj); // => { "key2": "value2" }



// [コラム] constで定義したオブジェクトは変更可能

const obj = { key: "value" };
obj.key = "Hi!"; // constで定義したオブジェクト(`obj`)が変更できる
console.log(obj.key); // => "Hi!"

// JavaScriptのconstは値を固定するのではなく、変数への再代入を防ぐためのもの
// obj変数への再代入は防げますが、変数に代入された値であるオブジェクトの変更は防げません
const obj = { key: "value" };
obj = {}; // => SyntaxError

// 作成したオブジェクトのプロパティの変更を防止するにはObject.freezeメソッドを利用
// Object.freezeメソッドを利用する場合は必ずstrict modeと合わせて使います
"use strict";
const object = Object.freeze({ key: "value" });
// freezeしたオブジェクトにプロパティを追加や変更できない
object.key = "value"; // => TypeError: "key" is read-only



// プロパティの存在を確認する

// JavaScriptでは、存在しないプロパティに対してアクセスした場合に例外ではなくundefinedを返します。
const obj = {};
console.log(obj.notFound); // => undefined

const widget = {
  window: {
      title: "ウィジェットのタイトル"
  }
};
// `window`を`windw`と間違えているが、例外は発生しない
console.log(widget.windw); // => undefined
// さらにネストした場合に、例外が発生する
// `undefined.title`と書いたのと同じ意味となるため
console.log(widget.windw.title); // => TypeError: widget.windw is undefined
// 例外が発生した文以降は実行されません



// あるオブジェクトがあるプロパティを持っているかを確認する方法
// ・undefinedとの比較
// ・in演算子
// ・hasOwnPropertyメソッド


// プロパティの存在確認: undefinedとの比較
const obj = {
  key: "value"
};
// `key`プロパティが`undefined`ではないなら、プロパティが存在する?
if (obj.key !== undefined) {
  // `key`プロパティが存在する?ときの処理
  console.log("`key`プロパティの値は`undefined`ではない");
}

// この方法はプロパティの値がundefinedであった場合に、
// プロパティそのものが存在するかを区別できないという問題があります。
const obj = {
  key: undefined
};
// `key`プロパティの値が`undefined`である場合
if (obj.key !== undefined) {
  // この行は実行されません
}


// プロパティの存在確認: in演算子を使う
"プロパティ名" in オブジェクト; // true or false
// in演算子は、プロパティの値は関係なく、プロパティが存在した場合にtrueを返します。

const obj = { key: undefined };
// `key`プロパティを持っているならtrue
if ("key" in obj) {
    console.log("`key`プロパティは存在する");
}


// プロパティの存在確認: hasOwnPropertyメソッド
// オブジェクト自身が指定したプロパティを持っているかを判定できます。
const obj = {};
obj.hasOwnProperty("プロパティ名"); // true or false

const obj = { key: "value" };
// `obj`が`key`プロパティを持っているならtrue
if (obj.hasOwnProperty("key")) {
    console.log("`object`は`key`プロパティを持っている");
}

// in演算子とhasOwnPropertyメソッドは同じ結果を返していますが、厳密には動作が異なるケースもあります。
// 次の章の「プロトタイプオブジェクト」で詳しく解説



// [ES2020] Optional chaining演算子（?.）

// 次のコードでは、widget.window.titleプロパティにアクセスできるなら、
// そのプロパティの値をコンソールに表示しています。
function printWidgetTitle(widget) {
  // 例外を避けるために`widget`のプロパティの存在を順番に確認してから、値を表示している
  if (widget.window !== undefined && widget.window.title !== undefined) {
      console.log(`ウィジェットのタイトルは${widget.window.title}です`);
  } else {
      console.log("ウィジェットのタイトルは未定義です");
  }
}
// タイトルが定義されているwidget
printWidgetTitle({
  window: {
      title: "Book Viewer"
  }
}); // => ウィジェットのタイトルはBook Viewerです
// タイトルが未定義のwidget
printWidgetTitle({
  // タイトルが定義されてない空のオブジェクト
}); // => ウィジェットのタイトルは未定義です

// ネストしたプロパティにアクセスする際には、プロパティの存在を順番に確認してからアクセスする必要がある
// プロパティへアクセスするたびにundefinedとの比較をAND演算子（&&）でつなげて書いていくと冗長


// Optional chaining演算子（?.）
// 左辺のオペランドがnullish（nullまたはundefined）の場合は、それ以上評価せずにundefinedを返します。
// 一方で、プロパティが存在する場合は、そのプロパティの評価結果を返します。

const obj = {
  a: {
      b: "objのaプロパティのbプロパティ"
  }
};
// obj.a.b は存在するので、その評価結果を返す
console.log(obj?.a?.b); // => "objのaプロパティのbプロパティ"
// 存在しないプロパティのネストも`undefined`を返す
// ドット記法の場合は例外が発生してしまう
console.log(obj?.notFound?.notFound); // => undefined
// undefinedやnullはnullishなので、`undefined`を返す
console.log(undefined?.notFound?.notFound); // => undefined
console.log(null?.notFound?.notFound); // => undefined


// 先のウィジェットのタイトルを表示する関数を?.を使って書き換え
function printWidgetTitle(widget) {
  const title = widget?.window?.title ?? "未定義";
  console.log(`ウィジェットのタイトルは${title}です`);
}
printWidgetTitle({
  window: {
      title: "Book Viewer"
  }
}); // "ウィジェットのタイトルはBook Viewerです" と出力される
printWidgetTitle({
  // タイトルが定義されてない空のオブジェクト
}); // "ウィジェットのタイトルは未定義です" と出力される


// Optional chaining演算子（?.）はブラケット記法（[]）と組み合わせることもできます。
const languages = {
  ja: {
      hello: "こんにちは！"
  },
  en: {
      hello: "Hello!"
  }
};
const langJapanese = "ja";
const langKorean = "ko";
const messageKey = "hello";
// Optional chaining演算子（`?.`）とブラケット記法を組みわせた書き方
console.log(languages?.[langJapanese]?.[messageKey]); // => "こんにちは！"
// `languages`に`ko`プロパティが定義されていないため、`undefined`を返す
console.log(languages?.[langKorean]?.[messageKey]); // => undefined



// オブジェクトのtoStringメソッド
const obj = { key: "value" };
console.log(obj.toString()); // => "[object Object]"
// `String`コンストラクタ関数は`toString`メソッドを呼んでいる
console.log(String(obj)); // => "[object Object]"

// 独自のtoStringメソッドを定義
const customObject = {
  toString() {
      return "custom value";
  }
};
console.log(String(customObject)); // => "custom value"



// [コラム] オブジェクトのプロパティ名は文字列として扱われる

const obj = {};
const keyObject1 = { a: 1 };
const keyObject2 = { b: 2 };
// どちらも同じプロパティ名（"[object Object]"）に代入している
obj[keyObject1] = "1";
obj[keyObject2] = "2";
console.log(obj); //  { "[object Object]": "2" }


// Symbolは文字列化されずにオブジェクトのプロパティ名として扱える

const obj = {};
// Symbolは例外的に文字列化されず扱える
const symbolKey1 = Symbol("シンボル1");
const symbolKey2 = Symbol("シンボル2");
obj[symbolKey1] = "1";
obj[symbolKey2] = "2";
console.log(obj[symbolKey1]); // => "1"
console.log(obj[symbolKey2]); // => "2"



// オブジェクトの静的メソッド(スタティックメソッド)

// オブジェクトの列挙
const obj = {
  "one": 1,
  "two": 2,
  "three": 3
};
// `Object.keys`はキーを列挙した配列を返す
console.log(Object.keys(obj)); // => ["one", "two", "three"]
// `Object.values`は値を列挙した配列を返す
console.log(Object.values(obj)); // => [1, 2, 3]
// `Object.entries`は[キー, 値]の配列を返す
console.log(Object.entries(obj)); // => [["one", 1], ["two", 2], ["three", 3]]

// forEachなどと組み合わせれば反復処理ができる
const obj = {
  "one": 1,
  "two": 2,
  "three": 3
};
const keys = Object.keys(obj);
keys.forEach(key => {
  console.log(key);
});
// 次の値が順番に出力される
// "one"
// "two"
// "three"


// オブジェクトのマージと複製
// Object.assignメソッド[ES2015]
// sourcesオブジェクト自身が持つ列挙可能なプロパティを,
// 第一引数のtargetオブジェクトに対してコピー
// 返り値は、targetオブジェクトになります
const obj = Object.assign(target, ...sources);

// マージ
const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = Object.assign({}, objectA, objectB);
console.log(merged); // => { a: "a", b: "b" }

// 第一引数に既存のオブジェクトも指定可
// 指定したオブジェクトのプロパティが変更されます
const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = Object.assign(objectA, objectB);
console.log(merged); // => { a: "a", b: "b" }
// `objectA`が変更されている
console.log(objectA); // => { a: "a", b: "b" }
console.log(merged === objectA); // => true

// 空のオブジェクトをtargetにすることで、
// 既存のオブジェクトには影響を与えずマージしたオブジェクトを作ることができます
// そのため、Object.assignメソッドの第一引数には、
// 空のオブジェクトリテラルを指定するのが典型的

// プロパティ名が重複した場合は、後ろのオブジェクトのプロパティにより上書きされます

// `version`のプロパティ名が被っている
const objectA = { version: "a" };
const objectB = { version: "b" };
const merged = Object.assign({}, objectA, objectB);
// 後ろにある`objectB`のプロパティで上書きされる
console.log(merged); // => { version: "b" }


// [ES2018] オブジェクトのspread構文でのマージ
// オブジェクトのspread構文は、
// オブジェクトリテラルの中に指定したオブジェクトのプロパティを展開できます
const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = {
    ...objectA,
    ...objectB
};
console.log(merged); // => { a: "a", b: "b" }

// プロパティ名が被った場合の優先順位は、後ろにあるオブジェクトが優先されます
// `version`のプロパティ名が被っている
const objectA = { version: "a" };
const objectB = { version: "b" };
const merged = {
    ...objectA,
    ...objectB,
    other: "other"
};
// 後ろにある`objectB`のプロパティで上書きされる
console.log(merged); // => { version: "b", other: "other" }


// オブジェクトの複製
// jsにはオブジェクト複製の関数はない
// 新たに空のオブジェクトを作り、そこへコピー
// 引数の`obj`を浅く複製したオブジェクトを返す
const shallowClone = (obj) => {
  return Object.assign({}, obj);
};
const obj = { a: "a" };
const cloneObj = shallowClone(obj);
console.log(cloneObj); // => { a: "a" }
// オブジェクトを複製しているので、異なるオブジェクトとなる
console.log(obj === cloneObj); // => false


// 注意：Object.assignメソッドはsourcesオブジェクトのプロパティを浅くコピー（shallow copy）する
// shallow copyとは、sourcesオブジェクトの直下にあるプロパティだけをコピーすること
const shallowClone = (obj) => {
  return Object.assign({}, obj);
};
const obj = {
  level: 1,
  nest: {
      level: 2
  },
};
const cloneObj = shallowClone(obj);
// `nest`プロパティのオブジェクトは同じオブジェクトのままになる 
console.log(cloneObj.nest === obj.nest); // => true


// プロパティの値までも再帰的に複製してコピーすることを、深いコピー（deep copy）
// deep copyは、再帰的にshallow copyする
// 引数の`obj`を浅く複製したオブジェクトを返す
const shallowClone = (obj) => {
  return Object.assign({}, obj);
};
// 引数の`obj`を深く複製したオブジェクトを返す
function deepClone(obj) {
  const newObj = shallowClone(obj);
  // プロパティがオブジェクト型であるなら、再帰的に複製する
  Object.keys(newObj)
      .filter(k => typeof newObj[k] === "object")
      .forEach(k => newObj[k] = deepClone(newObj[k]));
  return newObj;
}
const obj = {
  level: 1,
  nest: {
      level: 2
  }
};
const cloneObj = deepClone(obj);
// `nest`オブジェクトも再帰的に複製されている
console.log(cloneObj.nest === obj.nest); // => false
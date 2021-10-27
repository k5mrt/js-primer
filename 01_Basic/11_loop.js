// 安易にwhileは使わない（無限ループの防止）


// do-while（これもwhile同様、まず他の書き方を模索する）
do {
  実行する文;
} while (条件式);

/*
do-whileの実行フロー
1. 実行する文を実行
2.条件式 の評価結果がtrueなら次のステップへ、falseなら終了
3.ステップ1へ戻る
*/

// whileと異なり、必ず最初に「実行する文」を処理する

// 条件式を満たさない場合でも、 初回の実行する文が処理され、
// コンソールへ1000と出力される
const x = 1000;
do {
    console.log(x); // => 1000
} while (x < 10);



// 配列の forEach メソッド
const array = [1, 2, 3];
array.forEach(currentValue => {
    // 配列の要素ごとに呼び出される処理
});

// 引数として渡される関数:コールバック関数
// コールバック関数を引数として受け取る関数やメソッド:高階関数
const array = [1, 2, 3];
// forEachは"コールバック関数"を受け取る高階関数
array.forEach(コールバック関数);

// forEachメソッドのコールバック関数には、
// 配列の要素が先頭から順番に渡されて実行されます。
const array = [1, 2, 3];
array.forEach(currentValue => {
    console.log(currentValue);
});
// 1
// 2
// 3
// と順番に出力される

// 数値の合計を返すsum 関数をforEachメソッドで実装
function sum(numbers) {
  let total = 0;
  numbers.forEach(num => {
      total += num;
  });
  return total;
}

sum([1, 2, 3, 4, 5]); // => 15

// forEachはfor文の条件式に相当するものはなく、必ず配列のすべての要素を反復処理します。


// 配列のsomeメソッド
// 配列の各要素をテストする処理をコールバック関数として受け取り,
// 一度でもtrueを返した時点で反復処理を終了

// 配列に偶数が含まれているかを判別する関数
function isEven(num) {
  return num % 2 === 0;
}
const numbers = [1, 5, 10, 15, 20];
console.log(numbers.some(isEven)); // => true



// continue文
// continue文は現在の反復処理を終了して、次の反復処理を行う
while (条件式) {
  // 実行される処理
  continue; // `条件式` へ
  // これ以降の行は実行されません
}

// 配列の中から偶数を集め、新しい配列を作り返す関数
// `number`が偶数ならtrueを返す
function isEven(num) {
  return num % 2 === 0;
}
// `numbers`に含まれている偶数だけを取り出す
function filterEven(numbers) {
  const results = [];
  for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      // 偶数ではないなら、次のループへ
      if (!isEven(num)) {
          continue;
      }
      // 偶数を`results`に追加
      results.push(num);
  }
  return results;
}
const array = [1, 5, 10, 15, 20];
console.log(filterEven(array)); // => [10, 20]



// 配列のfilterメソッド
// 配列の各要素をテストする処理をコールバック関数として渡し,
// trueを返した要素のみを集めた, 新しい配列を返す
const array = [1, 2, 3, 4, 5];
// テストをパスしたものを集めた配列
const filteredArray = array.filter((currentValue, index, array) => {
    // テストをパスするならtrue、そうでないならfalseを返す
});

// 先のcontinueを使った値の絞り込みをfilterを使って書き直し
// より簡潔に書ける
function isEven(num) {
  return num % 2 === 0;
}
const array = [1, 5, 10, 15, 20];
console.log(array.filter(isEven)); // => [10, 20]



// for...in文: 利用は避ける
for (プロパティ in オブジェクト) {
  実行する文;
}

// objのプロパティ名をkey変数に代入して反復処理をしています。
// objには、3つのプロパティ名があるため３回繰り返されます
const obj = {
  "a": 1,
  "b": 2,
  "c": 3
};
// 注記: ループのたびに毎回新しいブロックに変数keyが定義されるため、再定義エラーが発生しない
for (const key in obj) {
  const value = obj[key];
  console.log(`key:${key}, value:${value}`);
}
// "key:a, value:1"
// "key:b, value:2"
// "key:c, value:3"

// Object.keysメソッドを使って書き直し
const obj = {
  "a": 1,
  "b": 2,
  "c": 3
};
Object.keys(obj).forEach(key => {
  const value = obj[key];
  console.log(`key:${key}, value:${value}`);
});
// "key:a, value:1"
// "key:b, value:2"
// "key:c, value:3"



// [ES2015] for...of文

// Symbol.iteratorという特別な名前のメソッドを実装したオブジェクトをiterableと呼ぶ
// iterableオブジェクトは、for...of文で反復処理できる

// iterableオブジェクトは反復処理時に次の返す値を定義している
// iterableから値を1つ取り出し、variableに代入して反復処理を行う
for (variable of iterable) {
  実行する文;
}

// Arrayはiterableオブジェクト
const array = [1, 2, 3];
for (const value of array) {
    console.log(value);
}
// 1
// 2
// 3

// Stringもiterable
const str = "𠮷野家";
for (const value of str) {
    console.log(value);
}
// "𠮷"
// "野"
// "家"



// reduceを使った処理
const result = array.reduce((前回の値, 現在の値) => {
  return 次の値;
}, 初期値);

// 配列から合計値を返す関数
function sum(numbers) {
  return numbers.reduce((total, num) => {
      return total + num;
  }, 0); // 初期値が0
}

sum([1, 2, 3, 4, 5]); // => 15
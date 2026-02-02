/**
 * @author S.K
 * @link https://www.typescriptlang.org/docs/handbook/2/basic-types.html
 */

/**
 * @remarks
 * - ECMAScriptには、スクリプトとモジュールという2つの概念がある。
 * - モジュールではimportとexportが使える。
 * - export {};では何もimportとexportもしない。
 *   が、**モジュールとして扱う**ことができるようになる。
 * - それにより、別ファイルと関数名が競合してエラーになることを防いだりできる。
 */
export {};

/**
 * @example <caption>型エラー（関数呼び出し）</caption>
 * message();
 * 
 * @remarks
 * ERROR_MESSAGE:ts(2349)
 * この式は呼び出し可能ではありません。
 * 型 'String' には呼び出しシグネチャがありません。
 * 
 * - 呼び出しシグネチャ：「引数をどう受け取って、何を返すか」
 * - TypeScript（JavaScript）では、関数もオブジェクト。
 */
const message = "Hello World!";
console.log(message.toLowerCase());

/**
 * @example <caption>型エラー</caption>
 * user.location;
 * 
 * @remarks
 * ERROR_MESSAGE:ts(2339)
 * プロパティ 'location' は型 '{ name: string; age: number; }' に存在しません。
 * 
 * - JSではundefinedで返すところをTSではエラーとして出力してくれる。
 */
const user = {
  name: "Daniel",
  age: 26,
};
console.log(`My name is ${user.name} and I am ${user.age} years old.`);
 
/**
 * @example <caption>Typoエラー</caption>
 * announcement.toLocaleLowercase();
 * announcement.toLocalLowerCase();
 * 
 * @remarks
 * ERROR_MESSAGE:ts(2551)
 * プロパティ 'toLocaleLowercase' は型 '"Hello World!"' に存在していません。
 * 'toLocaleLowerCase' ですか?
 * プロパティ 'toLocalLowerCase' は型 '"Hello World!"' に存在していません。
 * 'toLocaleLowerCase' ですか?
 * 
 * - TSではTypoもエラーとして出力、推測してくれる。
 * - 他にも呼び出されていない関数、論理エラーも出力してくれる。
 */
const announcement = "Hello World!";
console.log(announcement.toLocaleLowerCase());

/**
 * 
 * @param person {string}
 * @param date {Date}
 * 
 * @remarks
 * - 当初、関数の実装が重複しています。ts(2393)エラーが出現。
 * - export{};をファイル上部に記入し、解決。（詳細は上部）
 */
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());
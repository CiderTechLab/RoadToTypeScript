/**
 * value is OS: 型述語（Type Predicate）
 * → 「この関数が true を返したとき、value は OS 型であると見なしてよい」
 * @param value
 * @returns {OS}
 */
function isOS(value) {
    /** 実行時チェック */
    return value === "windows" || value === "linux" || value === "macos";
}
function selectOS(useOS) {
    let comment;
    switch (useOS) {
        case "windows":
            comment = "windows?他のOSが良いですよ!";
            break;
        case "linux":
            comment = "linux!素晴らしい選択です！";
            break;
        case "macos":
            comment = "macosを使っているんですね!おしゃれです!";
            break;
        default:
            comment = "知らないOSですね。";
    }
    console.log(comment);
}
const answer = "masos";
if (isOS(answer)) {
    selectOS(answer);
}
export {};

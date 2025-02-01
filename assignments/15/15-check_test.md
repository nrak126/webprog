# 第 15 章の課題

## Check Test 　 p314

### Q1 Ajax の特徴として正しいものを全て選んでください。

A.

    A: 必要なデータだけをサーバから取得するので効率が良い
    B: 部分的に書き換えるので、画面のチラつきが少なく、描画も早くユーザ体験が良い

### Q2 JSON の特徴について正しいものを全て選んでください。

A.

    A: JavaScriptのオブジェクトに書き方が似ている
    B: キーと値の組み合わせでデータを表現する
    D: 配列データを定義することができる

## Check Test p328

### Q1 以下のコードは JSON をサーバから取得して出力します。[A]~[C]に入る正しいコードを書いでください。

    fetch(通信したいURL).[A](function (response){
        [B]
    }).[C](function (json) {
        console.log(json)
    })

A.

    [A]
    then

    [B]
    return response.json();

    [C]
    then

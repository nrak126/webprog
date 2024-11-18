# 第 6 章の課題

## Check Test 　 p112

### Q1 以下のコードを実行した時に出力されるのは A と B どちらですか？

    const year = 2021;
    if(year < 2001) {
    	console.log('A');
    } else {
    	console.log('B');
    }

A.

    B

### Q2 以下の条件を満たすコードを書いてください。

    ・もし変数ageが18なら「新成人」と出力
    ・もし変数ageは18より上なら「成人」と出力
    ・上記以外なら「未成年」と出力

A.

    if (age == 18) {
        console.log("新成人");
    } else if (age > 18) {
        console.log("成人");
    } else {
        console.log("未成年");
    }

## Check Test 　 p116

### Q1 以下の条件を満たす条件式を選んできださい。

    条件:変数priceが500以上かつ1000未満

A.

    A: (price >= 500 && price < 1000)

## Check Test 　 p118

### Q1 以下の if 文を三項演算子を使って書き換えてください。

    const a = 5;
    const b = 3;
    let c;
    if (a <= b) {
        c = a;
    } else {
        c = b;
    }

A.

    const a = 5;
    const b = 3;
    let c;
    (a <= b) ? c = a : c = b;

## Check Test 　 p122

### Q1 switch 文が if 文と比較してメリットになる説明で正しいものを選んでください。

A.

    B: 1つの変数の状態によって処理を分岐させるため読みやすくなる。

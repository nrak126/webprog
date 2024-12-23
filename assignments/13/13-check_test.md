# 第 13 章の課題

## Check Test 　 p257

### Q1 DOM の機能が使えるのは、何という名前のオブジェクトですか？

A.

    document

### Q2 DOM の役割を一言で言うと何でしょうか？

A.

    JavaScriptからHTMLを簡単に操作するための仕組み

### Q3 DOM は ⚪︎⚪︎ 構造という入れ子になっています。何構造でしょうか？

A.

    ツリー構造

## Check Test p262

    	<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <div id="test">テスト</div>
            <div class="test">テスト</div>
            <ul>
                <li class="item">アイテム1</li>
                <li class="item">アイテム1</li>
                <li class="item">アイテム1</li>
            </ul>
        </body>
    </html>

### Q1 上記の HTML から id 属性が test の要素を取得するコードを書いてください。

A.

    const element = document.quarySelector('#test');

### Q2 上記の HTML から class 属性が test の要素を取得するコードを書いてください。

A.

    const element = document.quarySelector('.test');

### Q3 上記の HTML から class 属性が item の要素を取得するコードを書いてください。

A.

    const elements = document.quarySelectorAll('.item');

## Check Test p268

### Q1 要素のテキストを変更するのは何という名前のプロパティでしょうか？

A.

    textContent

### Q2 <a>要素のリンク先をhttps://example.com/surasuraに変更するコードを書いてください。

A.

    const link = document.quarySelector(a);
    link.href = 'https://example.com/surasura';

## Check Test p274

### Q1 文字と文字の隙間幅を指定する CSS の letter-spacing プロパティを JavaScript で 10px に変更するコードを書いてください。

A.

    const element = document.querySelector('p');
    element.style.letterSpacing = '10px';

### Q2 以下の要素の class 属性を java から javascript に変更するコードを書いてください。

    <p class="java">スラスラ</p>

A.

    const element = document.quarySelector('.java');
    element.classList.replace('java', 'javascript');

## Check Test p274

### Q1 以下の要素を作成するコードを書いてください。

    <div>新しく作る要素</div>

A.

    const element = document.createElement('div')l
    element.textContent = '新しく作る要素';

### Q2 以下のコメント部分に要素を追加するために、[?]に記述するべきコードとして正しいものをすべて選んでください。

    <div class="test">
    	<!-- ここに追加したい -->
    	<div class="child></div>
    </div>
    <script>
    const newElement = document.createElement('div');
    [?]
    </script>

A.

    A: document.querySelector('.test').prepend
    (newElement)

    C: document.querySelector('.child').before
    (newElement)

# 初めてのVue.js

最初のvueアプリです｡

## ミニマルにはじめて見よう

まずはごく単純なアプリケーションを作ってみましょう｡node.jsの力はまだ借りません｡静的サイトを作るときと同じようにしてsrc/index.html src/main.js src/style.css を作ります｡そして以下のようなサンプルコードをコピペしてください｡

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Hello Vue.js</title>
  </head>
  <body>
    <div id="app">
      <h1>{{message}}</h1>
    </div>

    <script src="vue.js"></script> <!-- 公式のランタイム -->
    <script src="main.js"></script> 
  </body>
</html>

```

```javascript
const app=new Vue({
  el:"#app", // viewを挿入するためのフラグとして機能します
  data:{
    message:"Hello Vue", // 変数はデータオブジェクトとして渡すことができます｡
  }
})
```

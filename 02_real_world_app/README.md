# 02_real_world_app

## Project setup

``` 
yarn install
```

### Compiles and hot-reloads for development

``` 
yarn serve
```

### Compiles and minifies for production

``` 
yarn build
```

### Lints and fixes files

``` 
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Project Structure

| Name           | Description                        |
| -------------- | ---------------------------------- |
| src            | Contains source code               |
| src/components | Contains vue component files       |
| src/router     |                                    |
| src/store      |                                    |
| src/views      | Contains .vue that used each route |
| App.vue        |                                    |
| main.js        |                                    |

## Global Component

## State management with Vuex

コンポーネントに渡すprops達をすべて管理するのは非常に骨の折れる作業です｡
アプリケーションが小さいうちはすべての状態を追えますが､コンポーネントが肥大化していくと､どこからやってきた props なのかが不明瞭になってしまいます｡
また､React や Vue の状態の受け渡しはコンポーネント同士が直接やり取りを行うのではなく､バケツリレーのようなもので､コンポーネントツリーをたどって状態を運ぶので､地獄のように汚いコードになってしまいます｡
そこで状態管理ツールの出番です｡コンポーネント同士のやり取りでしか見えなかったローカルな状態から､中心となる場所に状態をおいて管理していきます｡
Vue における状態管理モジュールはVuexが有名です｡Vuexは公式が提供する状態管理パターンとライブラリーのことです｡
\*React の場合､クラスコンポーネントを作ったときに state を書くことがありますがVueではVuexで初めて登場します｡

## Vuex Modules

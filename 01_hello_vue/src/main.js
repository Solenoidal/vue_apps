let isClicked = false;
const app = new Vue({
  /* cssセレクタを指定するとそこがvueの機能を搭載する場所になる */
  el: "#app",

  /* ウェブページに送信するデータを指定できます｡ページに表示したい文字やアトリビュートにurlやクラス名を送ることも可能 */
  data: {
    message: "Hello Vue",
    product: "Socks",
    isRecommended: true,
    image: { src: "./assets/vmSocks-green.jpg", alt: "green socks image" },
    inventory: 8,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        id: 1,
        color: "green",
      },
      { id: 2, color: "blue" },
    ],
    twitter: {
      url: "https://twitter.com/maruisannsimai",
      isClicked: isClicked,
    },
  },

  /* イベントハンドラー */
  methods: {
    clickTwitterButton: () => {
      console.log(isClicked);
      isClicked = !isClicked;
    },
  },
});

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
    sizes: ["S", "M", "L", "XL"],
    variants: [
      {
        id: 1,
        color: "green",
        image: { src: "./assets/vmSocks-green.jpg", alt: "green socks image" },
      },
      {
        id: 2,
        color: "blue",
        image: {
          src: "./assets/vmSocks-blue-onWhite.jpg",
          alt: "blue socks image",
        },
      },
    ],
    cart: 0,
    twitter: {
      url: "https://twitter.com/maruisannsimai",
      isClicked: false,
      class: "animated bounceOut",
    },
  },
  /* イベントハンドラー */
  methods: {
    clickTwitterButton() {
      this.twitter.isClicked = true;
      setInterval(() => {
        this.twitter.isClicked = false;
      }, 2000);
    },
    addToCart() {
      this.cart++;
    },
    removeCart() {
      if (this.cart <= 0) {
        this.cart = 0;
        return;
      }
      this.cart--;
    },
    resetCart() {
      this.cart = 0;
    },
    updateProduct(imageObject) {
      this.image = imageObject;
    },
  },
});

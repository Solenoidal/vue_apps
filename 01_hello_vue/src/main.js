const app = new Vue({
  /* cssセレクタを指定するとそこがvueの機能を搭載する場所になる */
  el: "#app",

  /* ウェブページに送信するデータを指定できます｡ページに表示したい文字やアトリビュートにurlやクラス名を送ることも可能 */
  data: {
    message: "Hello Vue",
    product: "Socks",
    brand: "Solenoid",
    isRecommended: true,
    selectedVariant: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    sizes: ["S", "M", "L", "XL"],
    variants: [
      {
        id: 1,
        color: "green",
        image: { src: "./assets/vmSocks-green.jpg", alt: "green socks image" },
        quantity: 100,
      },
      {
        id: 2,
        color: "blue",
        image: {
          src: "./assets/vmSocks-blue-onWhite.jpg",
          alt: "blue socks image",
        },
        quantity: 2,
      },
    ],
    cart: 0,
    twitter: {
      url: "https://twitter.com/maruisannsimai",
      isClicked: false,
      class: "animated bounceOut",
    },
  },
  computed: {
    // dataオブジェクトの値を加工して表示を変えるのに使える
    // ここではbrandとproductプロパティを結合させてタイトルに表示するようにしている.関数なので返り値を与えておく必要がある.
    title() {
      return `${this.brand} ${this.product}`;
    },
    image(index) {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity > 0;
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
      this.variants[this.selectedVariant].quantity--;
    },
    removeCart() {
      if (this.cart <= 0) {
        this.cart = 0;
        return;
      }
      this.cart--;
      this.variants[this.selectedVariant].quantity++;
    },
    resetCart() {
      this.cart = 0;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
  },
});

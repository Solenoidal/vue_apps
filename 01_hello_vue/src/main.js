Vue.component("vue_header", {
  data() {
    return {
      message: "Hello Vue",
      twitter: {
        url: "https://twitter.com/maruisannsimai",
        isClicked: false,
        class: "animated bounceOut",
      },
    };
  },
  methods: {
    clickTwitterButton() {
      this.twitter.isClicked = true;
      setInterval(() => {
        this.twitter.isClicked = false;
      }, 2000);
    },
  },
  template: `
    <header class="flex items-center">
      <h1 class="mr-6 text-6xl">{{message}}</h1>

      <div
        :class="[twitter.isClicked ? twitter.class : '']"
        v-on:click="clickTwitterButton"
      >
        <a
          v-bind:href="twitter.url"
          id="twitter"
          class="flex items-center justify-center bg-blue-900 rounded-lg text-white p-2"
        ><i data-feather="twitter"></i>Twitter</a>
      </div>
    </header>
  `,
});

Vue.component("product", {
  data() {
    return {
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
          image: {
            src: "./assets/vmSocks-green.jpg",
            alt: "green socks image",
          },
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
      reviews: [{ name: "Adam", review: "review text", rating: 4 }],
    };
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
    // [Add to Cart]ボタンを押したときに[add-to-cart]というカスタムイベントを発火させる
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant]);
      this.variants[this.selectedVariant].quantity--;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
    addReview(productReview) {
      this.reviews.push(productReview);
    },
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img v-bind:alt="image.alt" v-bind:src="image.src" />
      </div>
      <div class="product-info">
        <h3 class="text-2xl infoHeader">
          <!--
            computed propaties
            html側はtitleメソッドを渡すだけで単純化できる
          -->
          {{title}}
          <span
            v-show="isRecommended"
            id="hederDecorator"
            class="px-2 text-base text-white bg-red-500 rounded-full"
            >おすすめ</span
          >
        </h3>
        <ul class="detail">
          <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div class="flex">
          <div
            v-for="size in sizes"
            class="flex items-center justify-center w-12 h-12 mx-3 border border-black rounded-lg hover:cursor-pointer"
          >
            <p>{{size}}</p>
          </div>
        </div>
        <div class="flex mt-3 colorVariation">
          <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            class="flex items-center justify-center w-12 h-12 mx-2 rounded-lg hover:cursor-pointer"
            :style="{backgroundColor:variant.color}"
            @mouseover="updateProduct(index)"
          ></div>
        </div>
        <button
          v-on:click="addToCart"
          :disabled="!inStock"
          :class="[inStock ? '' : 'animated bounceOut' ]"
        >
          Add to Cart
        </button>

      </div>

      <div>
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
          <li v-for="{name,rating,review} in reviews">
            <p>{{name}}</p>
            <p>{{rating}}</p>
            <p>{{review}}</p>
          </li>
        </ul>
      </div>

      <product-review @review-submitted="addReview"></product-review>
    </div>
  `,
});
Vue.component("cart", {
  data() {
    return {};
  },
  computed: {},
  method: {},
  template: ``,
});

Vue.component("product-review", {
  data() {
    return {
      name: null /* 氏名 */,
      review: null /* レビュー */,
      rating: null /* 評価 */,
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      // フォームがすべて入力されているときにデータを送信する
      if (this.name && this.review && this.rating) {
        const productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
        };
        // review-submittedイベントを発火させてproductReviewを送信
        this.$emit("review-submitted", productReview);

        // データを初期化
        this.name = null;
        this.review = null;
        this.rating = null;
      } else {
        // エラーハンドリング
        if (!this.name) this.errors.push("Name required.");
        if (!this.review) this.errors.push("Review required.");
        if (!this.rating) this.errors.push("Rating required.");
      }
    },
  },
  /**
   * フォームの機能はユーザーのインプットをサーバに送信することです｡
   * しかし入力データはJSファイル側で管理したいので入力したデータをJSのデータプロパティへ送信してあげたいです｡
   * これまではv-bindによってdata->テンプレートという一方向データバインディングを行ってきましたが､
   * ここでは､data<->templateという値を双方向でやり取りする手段を使います｡
   * v-modelによって双方向データバインディングを可能にしています｡
   */
  template: `
    <form action="" class="review-form" @submit.prevent="onSubmit">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{error}}</li>
        </ul>
      </p>

      <p>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" placeholder="name" />
      </p>
      <p>
        <label for="review">Review:</label>
        <textarea
          name=""
          id="review"
          cols="30"
          rows="10"
          v-model="review"
        ></textarea>
      </p>
      <p>
        <label for="rating">Rating:</label>
        <select name="" id="rating" v-model.number="rating">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </p>
      <p><input type="submit" value="Submit" /></p>
    </form>
  `,
});

const app = new Vue({
  /* cssセレクタを指定するとそこがvueの機能を搭載する場所になる */
  el: "#app",
  /* ウェブページに送信するデータを指定できます｡ページに表示したい文字やアトリビュートにurlやクラス名を送ることも可能 */
  data: {
    cart: [], // id情報をひたすら格納
    items: [],
  },
  methods: {
    async updateCart({ id, image }) {
      this.cart.push(id);
      if (this.items.length === 0) {
        this.items.push({
          id,
          quantity: 1,
          image: { src: image.src, alt: image.alt },
        });
      } else if (this.items.find((element) => element.id === id)) {
        const index = this.items.findIndex((element) => element.id === id);
        this.items[index].quantity++;
      } else {
        this.items.push({
          id,
          quantity: 1,
          image: { src: image.src, alt: image.alt },
        });
      }
    },
    removeCart() {
      console.log("アイテムの削除");
    },
    resetCart() {
      this.cart = [];
      this.items = [];
    },
  },
});

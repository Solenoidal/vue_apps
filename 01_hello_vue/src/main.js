let isClicked = false;
const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue",
    product: "Socks",
    isRecommended: true,
    image: "./assets/vmSocks-green.jpg",
    alt: "green socks image",
    twitter: {
      url: "https://twitter.com/maruisannsimai",
      isClicked: isClicked,
    },
    inventory: 8,
  },
  methods: {
    clickTwitterButton: () => {
      console.log(isClicked);
      isClicked = !isClicked;
    },
  },
});

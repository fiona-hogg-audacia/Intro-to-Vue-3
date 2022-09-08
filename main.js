const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks", // updated data value //
      brand: "Vue Mastery",
      description: "Nice and fluffy keeping your toes toasty!",
      selectedVaraint: 0,
      url: "https://www.google.co.uk/",

      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyeseter"],
      sizes: ["small", "medium", "large", "XLarge"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeCart() {
      this.cart -= 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },

  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVaraint].image;
    },
    inStock() {
      return this.variants[this.selectedVaraint].image;
    },
  },
});

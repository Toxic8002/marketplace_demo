import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      this.products = data.products;
    },

    getProductById(id) {
      return this.products.find((p) => p.id === parseInt(id));
    },
  },
});

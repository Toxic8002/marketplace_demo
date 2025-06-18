import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    selectedBrand: "",
    selectedCategory: "",
    selectedPrice: "",
  }),
  getters: {
    filteredProducts(state) {
      return state.products.filter((product) => {
        const matchesBrand =
          !state.selectedBrand || product.brand === state.selectedBrand;

        const matchesCategory =
          !state.selectedCategory ||
          product.category === state.selectedCategory;

        const matchesPrice = (() => {
          if (!state.selectedPrice) return true;
          const price = product.price;
          if (state.selectedPrice === "<50") return price < 50;
          if (state.selectedPrice === "50-100")
            return price >= 50 && price <= 100;
          if (state.selectedPrice === ">100") return price > 100;
        })();

        return matchesBrand && matchesCategory && matchesPrice;
      });
    },

    allBrands: (state) => [...new Set(state.products.map((p) => p.brand))],
    allCategories: (state) => [
      ...new Set(state.products.map((p) => p.category)),
    ],
  },

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

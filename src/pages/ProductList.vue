<template>
  <div class="flex mx-[10%] bg-white justify-end">
    <div class="gap-2 flex m-3">
      <select
        v-model="productsStore.selectedBrand"
        class="border-2 border-neutral-400 p-2 rounded focus:border-blue-700 outline-none"
      >
        <option value="">Все бренды</option>
        <option
          v-for="brand in productsStore.allBrands"
          :key="brand"
          :value="brand"
        >
          {{ brand }}
        </option>
      </select>

      <select
        v-model="productsStore.selectedCategory"
        class="border-2 border-neutral-400 p-2 rounded focus:border-blue-700 outline-none"
      >
        <option value="">Все категории</option>
        <option
          v-for="cat in productsStore.allCategories"
          :key="cat"
          :value="cat"
        >
          {{ cat }}
        </option>
      </select>

      <select
        v-model="productsStore.selectedPrice"
        class="border-2 border-neutral-400 p-2 rounded focus:border-blue-700 outline-none"
      >
        <option value="">Любая цена</option>
        <option value="<50">До 50</option>
        <option value="50-100">50 - 100</option>
        <option value=">100">Больше 100</option>
      </select>
    </div>
  </div>

  <div class="grid grid-cols-5 justify-center mx-[10%] bg-white">
    <ProductCard
      v-for="product in productsStore.filteredProducts"
      :key="product.id"
      :product="product"
      @click="goToProduct(product.id)"
      class="hover:cursor-pointer hover:-translate-y-1.5 transition flex flex-col justify-between shadow rounded-b-lg m-4"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useProductsStore } from "../store/products";
import ProductCard from "../components/ProductCard.vue";

const productsStore = useProductsStore();
const router = useRouter();

onMounted(() => {
  productsStore.fetchProducts();
});

function goToProduct(id) {
  router.push(`/product/${id}`);
}
</script>

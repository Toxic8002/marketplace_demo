<template>
  <div v-if="product" class="mx-[10%] bg-white p-8 font-sans">
    <div class="flex gap-6">
      <img :src="product.thumbnail" class="w-96 shadow rounded-2xl" />
      <div
        class="flex flex-col justify-start gap-3 border-2 p-6 rounded-2xl border-blue-200"
      >
        <h1 class="font-bold text-3xl">{{ product.title }}</h1>
        <p class="font-medium -mb-2 text-2xl mt-3">Описание товара:</p>
        <p class="text-lg opacity-90">{{ product.description }}</p>
        <p class="text-xl">Бренд: {{ product.brand }}</p>
        <p class="text-xl">Категория: {{ product.category }}</p>
        <p class="text-xl">Цена: ${{ product.price }}</p>
        <button
          class="border mr-[75%] p-2 hover:cursor-pointer bg-[#0071E3] text-white rounded-xl"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "../store/products";

const route = useRoute();
const productsStore = useProductsStore();
const product = ref(null);

onMounted(async () => {
  if (productsStore.products.length === 0) {
    await productsStore.fetchProducts();
  }
  product.value = productsStore.getProductById(route.params.id);
});
</script>

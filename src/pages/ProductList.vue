<template>
  <div class="grid grid-cols-5 justify-center gap-6 p-6 mx-[10%] bg-white">
    <ProductCard
      v-for="product in productsStore.products"
      :key="product.id"
      :product="product"
      @click="goToProduct(product.id)"
      class="hover:cursor-pointer hover:-translate-y-1.5 transition flex flex-col justify-between shadow rounded-b-lg"
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

<template>
  <div
    class="hover:cursor-pointer hover:-translate-y-1.5 transition flex flex-col justify-between shadow rounded-b-lg"
  >
    <img
      :src="product.thumbnail"
      alt="product.name"
      height="256"
      width="256"
      class="mx-auto"
    />
    <h3 class="ml-2 text-xl font-bold font-sans">{{ product.title }}</h3>
    <p class="text-lg opacity-80 ml-2 mt-1 font-sans">${{ product.price }}</p>
    <div class="text-center rounded-lg py-1 mt-1 h-9 bg-[#0071E3] text-white">
      <button class="font-sans hover:cursor-pointer">Добавить в корзину</button>
    </div>
  </div>
</template>

<script setup>
defineProps(["product"]);
</script>

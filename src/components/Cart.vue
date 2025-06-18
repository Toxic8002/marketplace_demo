<template>
  <div class="fixed left-0 top-0 h-full w-full bg-black z-20 opacity-65"></div>
  <div class="fixed right-0 top-0 w-96 bg-white z-30 h-full">
    <div class="flex items-center p-5 gap-3 border-neutral-300 border-b">
      <span class="opacity-50 hover:opacity-100"><ArrowLeft /></span>
      <h2 class="text-xl font-bold">Корзина</h2>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft } from "lucide-vue-next";
</script>

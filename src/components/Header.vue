<template>
  <header
    class="flex justify-between mx-[10%] px-[4%] py-4 items-center sticky top-0 bg-white border-b border-neutral-300 z-10 font-sans"
  >
    <h1 class="text-3xl cursor-pointer">Магазин</h1>
    <nav>
      <ul class="inline-flex gap-6">
        <li
          class="hover:text-blue-500 cursor-pointer ease-in-out duration-200 inline-flex gap-0.5 text-xl"
        >
          Корзина<ShoppingCart />
        </li>
        <li
          class="hover:text-blue-500 cursor-pointer ease-in-out duration-200 inline-flex gap-1.5 text-xl"
        >
          О нас <Users />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ShoppingCart } from "lucide-vue-next";
import { Users } from "lucide-vue-next";
</script>

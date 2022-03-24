<script setup lang="ts">
import { API_BASE } from '../service/graphql';
import { useBlogStore } from '../stores/blog-store';

const blogStore = useBlogStore();

blogStore.fetch();
</script>

<template>
  <div>
    <div
      class="text-center font-bold text-white text-xl pt-5"
    >Yo, check out these blog posts we wrote. They're nifty.</div>
    <div class="flex gap-x-4 mt-10 mx-10">
      <router-link
        v-for="article in blogStore.list"
        class="text-gray-300 w-40 block"
        :to="`/blog/${article.slug}`"
      >
        <img :src="`${API_BASE}${article.thumbnail.url}`" class="h-40" />
        <div class="font-bold">{{ article.title }}</div>
        <div>{{ article.summary }}</div>
      </router-link>
    </div>
  </div>
</template>

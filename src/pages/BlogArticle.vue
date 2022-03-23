<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useBlogStore } from "../stores/blog-store";

const route = useRoute();

const props = defineProps({
  slug: { type: String, required: true },
});

const store = useBlogStore();
const entry = computed(() => store.getEntryBySlug(props.slug));
const date = computed(() => entry.value != null ? new Date(entry.value.date) : null);

if (route.query['token'] != null) {
  store.fetchPreview(props.slug, route.query['token'] as string);
} else {
  store.fetchEntry(props.slug);
}
</script>

<template>
<div class="flex flex-col flex-center items-center px-5">
  <div>This is the page that shows a specific blog article!</div>
  <div>
    <div class="mt-20 font-bold text-lg">{{ entry?.title }}</div>
    <div class="text-right w-full text-xs italic">{{ date?.toDateString() }}</div>
  </div>
  
  <div class="grid grid-cols-2 grid-flow-row text-red-400 gap-x-16 mt-10">
    <div class="text-center text-white font-bold">The Markdown!</div>
    <div class="text-center text-white font-bold">The Render!</div>

    <div class="grow shrink-0">{{ entry?.content }}</div>
    <div class="grow" v-html="entry?.content"></div>
  </div>
</div>
</template>

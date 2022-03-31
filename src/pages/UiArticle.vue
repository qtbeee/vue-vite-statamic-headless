<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useUiStore } from '../stores/ui-store';

const route = useRoute();
const props = defineProps({
  slug: { type: String, required: true },
});

const store = useUiStore();
const entry = computed(() => store.getEntryBySlug(props.slug));
const isRed = computed(() => entry.value?.red_background ?? false);

if (route.query['token'] != null) {
  store.fetchEntry(props.slug, route.query['token'] as string);
} else {
  store.fetchEntry(props.slug);
}
</script>

<template>
<div class="flex flex-col flex-center items-center px-5" :class="{ 'bg-red-900': isRed, 'bg-green-900': !isRed }">
  <div>This is the page that shows a specific blog article!</div>
  <div>
    <div class="mt-20 font-bold text-lg">{{ entry?.title }}</div>
  </div>
  <div>This page {{ isRed ? 'has': "doesn't have" }} a red background.</div>
</div>
</template>

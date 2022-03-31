<script setup lang="ts">
import { useUiStore } from '../stores/ui-store';

const uiStore = useUiStore();
uiStore.fetch();
</script>

<template>
  <div>
    <div>
      This be the ui collection page!
    </div>
    <div>
      <router-link v-for="p in uiStore.list" class="text-white" :to="`/ui/${p.slug}`">
        {{ p.title }}
      </router-link>
    </div>
  </div>
</template>

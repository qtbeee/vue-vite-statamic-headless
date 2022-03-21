import { defineStore } from "pinia";
import type { BlogEntry } from "../domain/BlogEntry";
import { getBlogEntries } from "../service/blog";

interface State {
  entries: BlogEntry[];
}

export const useBlogStore = defineStore("blog", {
  state: (): State => ({
    entries: [],
  }),
  getters: {
    list: (state) => state.entries,
    getEntryBySlug: (state) => {
      return (slug: string) => state.entries.find((entry) => entry.slug === slug);
    },
  },
  actions: {
    async fetch() {
      this.entries = await getBlogEntries();
    }
  }
});

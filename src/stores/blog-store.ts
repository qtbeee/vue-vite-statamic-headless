import { defineStore } from "pinia";
import type { BlogEntry } from "../domain/BlogEntry";
import { getBlogEntries, getBlogEntry } from "../service/blog";

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
    },
    async fetchEntry(slug: string, livePreviewToken?: string) {
        const entry = await getBlogEntry(slug, livePreviewToken);
        const index = this.entries.findIndex((blog) => blog.slug === slug);
        if (index != -1) {
          this.entries[index] = entry;
        } else {
          this.entries.push(entry);
        }
    },
  }
});

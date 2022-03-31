import { defineStore } from "pinia";
import type { UiEntry } from "../domain/UiEntry";
import { getUiEntries, getUiEntry } from "../service/ui";

interface State {
  entries: UiEntry[];
}

export const useUiStore = defineStore("ui", {
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
      this.entries = await getUiEntries();
  },
  async fetchEntry(slug: string, livePreviewToken?: string) {
      const entry = await getUiEntry(slug, livePreviewToken);
      const index = this.entries.findIndex((blog) => blog.slug === slug);
      if (index != -1) {
        this.entries[index] = entry;
      } else {
        this.entries.push(entry);
      }
  },
  }
});

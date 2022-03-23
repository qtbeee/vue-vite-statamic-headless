import { BlogEntry, blogEntryFields } from "../domain/BlogEntry";
import { getEntries, getEntry, getEntryPreview } from "./entry";

export async function getBlogEntries(): Promise<BlogEntry[]> {
  return await getEntries<BlogEntry>('blog', blogEntryFields, { 'filter[status:is]': 'published' });  
}

export async function getBlogEntry(slug: string): Promise<BlogEntry> {
  return await getEntry<BlogEntry>('blog', blogEntryFields, slug);  
}

export async function getBlogEntryPreview(slug: string, livePreviewToken: string): Promise<BlogEntry> {
  return await getEntryPreview<BlogEntry>('blog', blogEntryFields, slug, livePreviewToken);  
}

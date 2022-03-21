import type { BlogEntry } from "../domain/BlogEntry";
import { getEntries } from "./entry";

export async function getBlogEntries(): Promise<BlogEntry[]> {
  return await getEntries<BlogEntry>('blog', 'title,thumbnail,summary,date,slug,content', { 'status': 'published' });  
}

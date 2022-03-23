export const blogEntryFields = "title,thumbnail,summary,date,slug";

export interface BlogEntry {
  // id: string, // do we need this?
  title: string,
  thumbnail: StatamicImage,
  summary: string,
  date: string, // this is in iso format
  slug: string,
  // status: string, // we only care about "published" ones
  content: string, // this is html
}

export interface StatamicImage {
  id: string,
  url: string,
}

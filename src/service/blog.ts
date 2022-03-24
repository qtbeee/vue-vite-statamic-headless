import { gql } from "graphql-request";
import type { BlogEntry } from "../domain/BlogEntry";
import { graphqlRequest } from "./graphql";

export async function getBlogEntries(): Promise<BlogEntry[]> {
  const query = gql`
  query {
    entries(collection: "blog", filter: { status : "published" }) {
      data {
        id
        title
        slug
        date
        ... on Entry_Blog_Blog {
          summary
          thumbnail {
            url
          }
          content
        }
      }
    } 
  }`;
  
  const response = await graphqlRequest<{ entries: { data: BlogEntry[] } }>(query);

  return response.entries.data;
}

export async function getBlogEntry(slug: string, livePreviewToken?: string): Promise<BlogEntry> {
  const query = gql`
  query Entry($slug: String) {
    entry(collection: "blog", slug: $slug, filter: { status : "published" }) {
      id
      title
      slug
      date
      ... on Entry_Blog_Blog {
        summary
        thumbnail {
          url
        }
        content
      }
    } 
  }`;

  const response = await graphqlRequest<{ entry: BlogEntry  }>(query, { slug }, livePreviewToken);
  console.log(response.entry);
  return response.entry;
}

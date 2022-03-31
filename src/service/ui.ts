import { gql } from "graphql-request";
import type { UiEntry } from "../domain/UiEntry";
import { graphqlRequest } from "./graphql";

export async function getUiEntries(): Promise<UiEntry[]> {
  const query = gql`
  query {
  entries(collection: "cp_ui") {
    data {
      slug
      title
      ... on Entry_CpUi_CpUi {
        id
        red_background
      }
    }
  }
}
  `;

  const response = await graphqlRequest<{ entries: { data: UiEntry[] }}>(query);
  
  return response.entries.data;
}

export async function getUiEntry(slug: string, livePreviewToken?: string): Promise<UiEntry> {
  const query = gql`
  query Entry($slug: String) {
  entry(collection: "cp_ui", slug: $slug, filter: {status: "published"}) {
    ... on Entry_CpUi_CpUi {
      red_background
    }
    title
    slug
    id
  }
}`;

  const response = await graphqlRequest<{ entry: UiEntry  }>(query, { slug }, livePreviewToken);
  console.log(response.entry);
  return response.entry;
}

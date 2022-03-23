import axios from "axios";

export const API_BASE = import.meta.env["VITE_API_BASE"] as string;

export async function getEntries<T>(collection: string, fields: string, filters: Record<string, string>): Promise<T[]> {
  console.log(filters);
  const params = new URLSearchParams(filters);
  if (fields.length > 0) {
    params.append("fields", fields);
  }

  const response = await axios.get<{ data: T[] }>(`${API_BASE}/api/collections/${collection}/entries`, {
    params,
  });

  return response.data.data;
}

export async function getEntry<T>(collection: string, fields: string, slug: string): Promise<T> {
  // NOTE: We have to get the id of the entry first, cause the slug isn't enough to fetch the entry from Statamic >:C
  const entries = await getEntries<{ id: string, slug: string }>(collection, "id", { 'filter[slug:is]': slug });
  if (entries.length != 1) {
    throw Error(`entry with slug ${slug} was not found`);
  }
  const entryId = entries[0]!.id;

  // Now that we have the id, let's actually fetch the entry properly, with preview
  const response = await axios.get<{ data: T }>(`${API_BASE}/api/collections/${collection}/entries/${entryId}`, {
    params: {
      'fields': fields,
    },
  });
  console.log(response);

  return response.data.data;
}

export async function getEntryPreview<T>(collection: string, fields: string, slug: string, livePreviewToken: string): Promise<T> {
  // NOTE: We have to get the id of the entry first, cause the slug isn't enough to fetch the entry from Statamic >:C
  const entries = await getEntries<{ id: string, slug: string }>(collection, "id,slug", { 'filter[slug:is]': slug });
  if (entries.length != 1) {
    throw Error(`entry with slug ${slug} was not found`);
  }
  const entryId = entries[0]!.id;

  // Now that we have the id, let's actually fetch the entry properly, with preview
  const response = await axios.get<{ data: T }>(`${API_BASE}/api/collections/${collection}/entries/${entryId}`, {
    params: {
      'token': livePreviewToken,
      'fields': fields,
    },
  });
  console.log(response);

  return response.data.data;
}

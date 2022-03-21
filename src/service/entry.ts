import axios from "axios";

export const API_BASE = import.meta.env["VITE_API_BASE"] as string;

export async function getEntries<T>(collection: string, fields: string, filters: Record<string, string>): Promise<T[]> {
  const params = new URLSearchParams(filters);
  if (fields.length > 0) {
    params.append("fields", fields);
  }

  const response = await axios.get<{ data: T[] }>(`${API_BASE}/api/collections/${collection}/entries`, {
    params,
  });
  console.log(response);

  return response.data.data;
}

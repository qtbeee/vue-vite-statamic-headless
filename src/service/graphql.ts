import request from "graphql-request";

export const API_BASE = import.meta.env["VITE_API_BASE"] as string;

export async function graphqlRequest<T>(query: string, variables?: Record<string, string>, token?: string): Promise<T> {
  let url = `${API_BASE}/graphql`;
  if (token != null) {
    url += `?token=${token}`;
  }

  return await request(url, query, variables ?? {});
}

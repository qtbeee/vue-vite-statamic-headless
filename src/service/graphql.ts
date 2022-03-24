import request from "graphql-request";
import { API_BASE } from "./entry";

export async function graphqlRequest<T>(query: string, variables?: Record<string, string>, token?: string): Promise<T> {
  let url = `${API_BASE}/graphql`;
  if (token != null) {
    url += `?token=${token}`;
  }

  return await request(url, query, variables ?? {});
}

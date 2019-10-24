import { request } from "graphql-request";

export function fetchData(query) {
  const BASE_URL = "https://graphql-pokemon.now.sh";
  return request(BASE_URL, query);
}

import { ApiType } from "../interfaces/api.interface";
import { ApiSlugs, USER_ROLE } from "./constant";

// // Function to access a specific slug
// export function getSlug(apiType: ApiType, slugName: string): string {
//   console.log(ApiSlugs[apiType], slugName);
//   return ApiSlugs[apiType][slugName];
// }

export function statusObject(s: boolean): string {
  return s ? 'hoạt động' : 'không hoạt động';
}
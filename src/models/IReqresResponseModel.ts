import type {IUser} from "./IUser.ts";

export interface Support {
  url: string;
  text: string;
}

export interface IReqresResponseModel {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: Support;
}
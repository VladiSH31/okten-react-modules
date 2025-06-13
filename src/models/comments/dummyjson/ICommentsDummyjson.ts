import type {User} from "./IUserCommentsDummyjson.ts";

export interface ICommentsDummyjson {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}
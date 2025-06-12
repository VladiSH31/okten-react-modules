import type {Reactions} from "./IReactionsDummyJson.ts";


export interface IPostDummyJson {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions;
    views: number;
    userId: number;
}
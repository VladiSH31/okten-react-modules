import type {Geo} from "./IGeoJSONPlaceHolder.ts";

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}


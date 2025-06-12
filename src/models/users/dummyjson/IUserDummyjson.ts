import type {crypto} from "./ICryptoDummyjson.ts";
import type {Company} from "./ICompanyDummyjson.ts";
import type {Address} from "./IAddressDummyjson.ts";
import type {Bank} from "./IBankDummyjson.ts";
import type {Hair} from "./IHairDummyjson.ts";


export interface IUserDummyjson {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: crypto;
    role: string;
}
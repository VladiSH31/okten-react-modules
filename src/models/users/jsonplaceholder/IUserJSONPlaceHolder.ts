import type {Company} from "./ICompanyJSONPlaceHolder.ts";
import type {Address} from "./IAddressJSONPlaceHolder.ts";


export interface IUserJSONPlaceHolder {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
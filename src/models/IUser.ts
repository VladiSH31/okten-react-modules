export interface IUser {
    id: number;
    name: string;
    email: string;
    address: {
        city: string;
    };
}
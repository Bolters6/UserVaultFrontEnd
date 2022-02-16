import { Items } from "./Items";
import { Role } from "./Role";


export interface User{
    userName: string;
    password: string;
    email: string;
    dataNascita: Date;
    vault: Items;
    roles: Role[];
}
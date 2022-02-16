import { Potion } from "./Potion";
import { Sword } from "./Sword";

export interface Items{
    idv: number;
    denaro:number;
    souls:number;
    bless:number;
    wings:string;
    swords: Sword[];
    potions: Potion[];
}
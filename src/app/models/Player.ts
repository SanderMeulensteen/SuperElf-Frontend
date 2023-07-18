import { Club } from "./Club";

export class Player{
    playerId?: string;
    playerName: string | undefined;
    club: Club | undefined;
    position: string | undefined;
    price: number | undefined;

    constructor(playerName: string, club: Club, position: string, price: number){
        this.playerName = playerName;
        this.club = club;
        this.position = position;
        this.price = price;
    }

}
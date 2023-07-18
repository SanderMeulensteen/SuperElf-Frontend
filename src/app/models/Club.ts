import { Competition } from "./Competition";

export class Club{
    clubId?: string;
    clubName: string | undefined;
    competition: Competition | undefined;
    logo: string | undefined

    constructor(clubName: string, competition: Competition, logo: string){
        this.clubName = clubName;
        this.competition = competition;
        this.logo = logo;
    }

}

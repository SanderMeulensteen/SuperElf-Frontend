export class Competition{
    competitionId?: string;
    competitionName: string | undefined;
    country: string | undefined;

    constructor(competitionName: string, country: string){
        this.competitionName = competitionName;
        this.country = country;
    }

}

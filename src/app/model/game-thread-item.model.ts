
export class GameThreadItem {
    tytul: string;
    opis: string;
    tickets: number;
    mode: number;
    id : number;
    twittLink: string;

    constructor(id: number, tytul: string, opis: string, tickets: number, mode: number, twittLink: string) {
        this.id = id;
        this.tytul = tytul;
        this.opis = opis;
        this.tickets = tickets;
        this.mode = mode;
        this.twittLink = twittLink;
    }
}

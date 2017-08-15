/**
 * Created by MVRM on 28/11/2016.
 */

export class GameItem {
    uuid: number;
    text: string;
    tytul: string = "null";
    completed: boolean = false;
    twittLink: string = "brak";

    constructor(text: string) {
        this.text = text;
        this.uuid = new Date().getTime();
    }
}

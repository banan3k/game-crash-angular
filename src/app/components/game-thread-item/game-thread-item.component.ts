import {Component, Input, EventEmitter, Output} from "@angular/core";
import {GameThreadItem} from "../../model/game-thread-item.model";

import {GameStoreService} from "../../services/game-store.service";

@Component({
    selector: 'game-thread-item',
    templateUrl: './game-thread-item.component.html',
    styleUrls: ['./game-thread-item.component.css']
})
export class GameThreadItemComponent {

    @Input()
    item: GameThreadItem;

    @Output()
    done = new EventEmitter<GameThreadItem>();

    store: GameStoreService;
    constructor(store: GameStoreService) {
      this.store = store;
    }

    ticketClicked() {
      this.item.tickets ++;
    }

    doneClicked() {
        this.done.emit(this.item);

        var gameNameTemp = window.location.href.split('/');
        var gameName = gameNameTemp[gameNameTemp.length-1];
      //  alert(gameName);

        var gameGlobalName = gameName.replace("%20", " ");
        this.store.removeThread(this.item, gameGlobalName);
    }

    showGameThread() {
      //  alert("a");
        document.getElementById("test").innerHTML=this.item.id.toString();
//        document.getElementById("det").innerHTML=this.item.tytul+" : "+this.item.opis;
document.getElementById("det").innerHTML=this.item.opis;
document.getElementById("detTittle").innerHTML=this.item.tytul;
    }

    changeName() {
      this.item.tytul = "x";
    }


}

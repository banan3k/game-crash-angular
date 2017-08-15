import {Component} from "@angular/core";
import {GameStoreService} from "../../services/game-store.service";

@Component({
    selector: 'new-game',
    templateUrl: './new-game.component.html',
    styleUrls: ['new-game.component.css']
})
export class NewGameComponent {

    newItemText = '';
    store: GameStoreService;

    constructor(store: GameStoreService) {
        this.store = store;
    }

    addItem() {
        if (this.newItemText) {
            this.store.addItem(this.newItemText);
            this.newItemText = '';
        }
    }

}

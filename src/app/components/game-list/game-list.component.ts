import {Component} from "@angular/core";
import {GameStoreService} from "../../services/game-store.service";
import {GameItem} from "../../model/game-item.model";

@Component({
    selector: 'game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css']
})



export class GameListComponent {

    store: GameStoreService;



    constructor(store: GameStoreService) {
        this.store = store;
        if(this.store.loaded.length==0)
          this.store.loadAll();
    }

    removeItem(item: GameItem) {
        this.store.removeItem(item);
    }
}

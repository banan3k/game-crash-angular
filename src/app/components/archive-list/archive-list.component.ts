import {Component} from "@angular/core";
import {GameStoreService} from "../../services/game-store.service";

@Component({
    selector: 'archive-list',
    templateUrl: './archive-list.component.html',
    styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent {

    store: GameStoreService;

    constructor(store: GameStoreService) {
        this.store = store;
    }

}

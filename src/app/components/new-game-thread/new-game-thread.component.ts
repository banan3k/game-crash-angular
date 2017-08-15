import {Component} from "@angular/core";
import {GameStoreService} from "../../services/game-store.service";

@Component({
    selector: 'new-game-thread',
    templateUrl: './new-game-thread.component.html',
    styleUrls: ['new-game-thread.component.css']
})
export class NewGameThreadComponent {

    newGameThreadText = '';
    store: GameStoreService;

    constructor(store: GameStoreService) {
        this.store = store;
    }

    addGameThread() {
        if (this.newGameThreadText) {
          var gameNameTemp = window.location.href.split('/');
          var gameName = gameNameTemp[gameNameTemp.length-1].replace("%20", " ");
      this.store.addThread(gameName, this.newGameThreadText);
          this.newGameThreadText = '';
        }
    }

}

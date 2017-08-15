import {Component} from "@angular/core";
import {GameStoreService} from "../../services/game-store.service";

@Component({
    selector: 'game-thread-list',
    templateUrl: './game-thread-list.component.html',
    styleUrls: ['./game-thread-list.component.css']
})




export class GameThreadListComponent {

    store: GameStoreService;

    gameGlobalName : String;

    

    constructor(store: GameStoreService) {

        var gameNameTemp = window.location.href.split('/');
        var gameName = gameNameTemp[gameNameTemp.length-1];
      //  alert(gameName);

        this.gameGlobalName = gameName.replace("%20", " ");


        this.store = store;
            this.store.gameToCheck = this.gameGlobalName;

  //      this.store.loaded
  //alert(this.store.gamethread[this.gameGlobalName.toString()][0].opis);

  //document.getElementById("det").innerHTML=this.store.gamethread[this.gameGlobalName.toString()][0].opis;
  //document.getElementById("detTittle").innerHTML=this.store.gamethread[this.gameGlobalName.toString()][0].tytul;
    }

}

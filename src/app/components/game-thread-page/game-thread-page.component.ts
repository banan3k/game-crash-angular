import {
  Component
} from "@angular/core";

import {
  GameStoreService
} from "../../services/game-store.service";


@Component({
  selector: 'app-game-thread-page',
  templateUrl: './game-thread-page.component.html',
  styleUrls: ['./game-thread-page.component.css']
})
export class GameThreadPageComponent {

  store: GameStoreService;

  gameGlobalName: String;

  firstTittle: String;
  firstOpis: String;

  firstUrl: String;

  constructor(store: GameStoreService) {
    this.store = store;
    var gameNameTemp = window.location.href.split('/');
    var gameName = gameNameTemp[gameNameTemp.length - 1];
    //  alert(gameName);

    this.gameGlobalName = gameName.replace("%20", " ");

    if (this.store.gamethread[this.gameGlobalName.toString()] == null)
      this.store.loadAll();

      this.firstTittle=this.store.gamethread[this.gameGlobalName.toString()][0].tytul;
      this.firstOpis = this.store.gamethread[this.gameGlobalName.toString()][0].opis;

      this.firstUrl = this.store.gamethread[this.gameGlobalName.toString()][0].twittLink;
  //    alert(this.store.gamethread[this.gameGlobalName.toString()][0].opis);
    //this.store.loadAll();
    /*   var tittleElem = document.createElement("div");
      // tittleElem.class = "tittleElem";
      tittleElem.id = "tittleElem";
    //tittleElem.name="tittleElem";
            tittleElem.innerHTML="<center><h1>"+this.gameGlobalName.toString()+"</h1></center>";
            document.body.insertBefore(tittleElem, document.body.firstChild);*/
    //        document.body.appendChild(tittleElem);
    //alert(document.getElementById("gameTittle").textContent);
    //        document.getElementById("gameTittle").textContent = this.gameGlobalName.toString();

    var myScript = document.createElement('script');
    document.body.appendChild(myScript);
    myScript.src = "//platform.twitter.com/widgets.js";



  }
  changedUrl() {
    var localId = document.getElementById("test").textContent;
    if (this.store.gamethread[this.gameGlobalName.toString()] && this.store.gamethread[this.gameGlobalName.toString()][localId]) {
      this.store.gamethread[this.gameGlobalName.toString()][localId].twittLink = document.getElementById("twittUrl").textContent;
    }
    console.log("a " + localId);
  }
  changedText() {
    var localId = document.getElementById("test").textContent;
    if (this.store.gamethread[this.gameGlobalName.toString()] && this.store.gamethread[this.gameGlobalName.toString()][localId]) {
      this.store.gamethread[this.gameGlobalName.toString()][localId].opis = document.getElementById("det").textContent;
    }
    console.log("a " + localId);
  }
  changedTittle() {
    //  alert("d "+document.getElementById("opis").textContent);
    var localId = document.getElementById("test").textContent;
    if (this.store.gamethread[this.gameGlobalName.toString()] && this.store.gamethread[this.gameGlobalName.toString()][localId]) {
      this.store.gamethread[this.gameGlobalName.toString()][localId].tytul = document.getElementById("detTittle").textContent;
      //  document.getElementById("detTittle").innerHTML=this.store.gamethread[this.gameGlobalName.toString()][localId].tytul;

      //  document.getElementById("det").innerHTML=this.store.gamethread[this.gameGlobalName.toString()][localId].tytul+" : "+this.store.gamethread[this.gameGlobalName.toString()][localId].opis;

      //document.getElementById("det").innerHTML=this.store.gamethread[this.gameGlobalName.toString()][localId].opis;
    }
    console.log("b " + localId);
  }



}

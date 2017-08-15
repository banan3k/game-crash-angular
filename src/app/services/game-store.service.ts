import {
  Injectable
} from "@angular/core";
import {
  Http
} from '@angular/http';
import {
  GameItem
} from "../model/game-item.model";

import {
  GameThreadItem
} from "../model/game-thread-item.model";


import {
  BAR
} from 'assets/GameConfig';

import {
  THREADS
} from 'assets/enderal';


@Injectable()
export class GameStoreService {
  //  alert("c");
  items: GameItem[] = [];
  archive: GameItem[] = [];
  loaded: GameItem[] = [];

  gamethread: GameThreadItem[][] = [];

  loadAll() {
    if (this.items.length == 0) {
      this.loaded.push(new GameItem("start"));
      let bar = BAR;
      for (var i = 0; i < bar.length; i++) {
        let gameitem = new GameItem(bar[i].name);
        this.items.push(gameitem);

        this.gamethread[bar[i].name] = new Array < GameThreadItem > ();
        let threads = THREADS;
        for (var i2 = 0; i2 < threads.length; i2++) {
          let gameItem2 = new GameThreadItem(i2, "tytul" + i2, "opis", 0, 1, "https://twitter.com/Interior/status/864226355898089478");
          this.gamethread[bar[i].name].push(gameItem2);
        }
      }
    }
    //    alert(this.gamethread["lets dance"][0]);
    //    alert(bar.length);
  }
  updateItem(item: GameItem, text: string) {
    let index = this.items.indexOf(item);
    this.items[index].text = text;
  }

  addThread(gra: string, tytul: string) {
    let gameItem2 = new GameThreadItem(this.gamethread[gra].length - 1, tytul, "Wprowadź tekst", 0, 0, "brak");
    this.gamethread[gra].push(gameItem2);
  }
  removeThread(item: GameThreadItem, gra: string) {
    let index = this.gamethread[gra].indexOf(item);
    if (index > -1) {
      let removed = this.gamethread[gra].splice(index, 1)[0];
      //removed.completed = true;
      console.log("lol removed");
    }
  }

  addItem(text: string) {
    let gameitem = new GameItem(text);
    this.items.push(gameitem);
  }

  removeItem(item: GameItem) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      let removed = this.items.splice(index, 1)[0];
      removed.completed = true;
      this.archive.push(removed);
    }
  }

  get isEmpty() {
    return this.items.length === 0;
  }

  get isLazy() {
    return this.archive.length === 0;
  }

  setStringGame(game: String) {
    this.gameToCheck = game;
  }
  gameToCheck: String;
  get noProblematic() {
    //      console.log("lazy "+this.gameToCheck.toString());
    return this.gamethread[this.gameToCheck.toString()].length === 0;
    //return true;

  }
}

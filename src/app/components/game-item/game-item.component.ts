import {Component, Input, EventEmitter, Output} from "@angular/core";
import {GameItem} from "../../model/game-item.model";

@Component({
    selector: 'game-item',
    templateUrl: './game-item.component.html',
    styleUrls: ['./game-item.component.css']
})
export class GameItemComponent {

    @Input()
    item: GameItem;

    @Output()
    done = new EventEmitter<GameItem>();

    doneClicked() {
        this.done.emit(this.item);
    }

    showGameThread() {
    //    alert("a");
  //      this.routerLink = "aa";
    //  window.location.assign("/gamethread/"+this.item.text);
    }

    changeName() {
      this.item.text = "a";
    }


}

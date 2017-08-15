import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./components/app-root/app.component";
import {GamePageComponent} from "./components/game-page/game-page.component";
import {ArchivePageComponent} from "./components/archive-page/archive-page.component";
import {GameListComponent} from "./components/game-list/game-list.component";
import {GameItemComponent} from "./components/game-item/game-item.component";
import {GameThreadItemComponent} from "./components/game-thread-item/game-thread-item.component";
import {GameStoreService} from "./services/game-store.service";
import {ArchiveListComponent} from "./components/archive-list/archive-list.component";
import {NewGameComponent} from "./components/new-game/new-game.component";
import {NewGameThreadComponent} from "./components/new-game-thread/new-game-thread.component";

import {GameThreadPageComponent} from "./components/game-thread-page/game-thread-page.component";
import {GameThreadListComponent} from "./components/game-thread-list/game-thread-list.component";

import { FacebookModule } from 'ng2-facebook-sdk';

const appRoutes: Routes = [
    {path: 'game', component: GamePageComponent},
    {path: 'archive', component: ArchivePageComponent},
    {path: 'gamethread/:name', component: GameThreadPageComponent},
    {path: '**', component: GamePageComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        GamePageComponent,
        GameListComponent,
        GameItemComponent,
        GameThreadItemComponent,
        NewGameComponent,
        NewGameThreadComponent,
        ArchivePageComponent,
        ArchiveListComponent,
        GameThreadPageComponent,
        GameThreadListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        FacebookModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    providers: [GameStoreService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

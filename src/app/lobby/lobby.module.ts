import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {LobbyComponent} from "./lobby.component";
import {UIRouterModule} from "@uirouter/angular";
import {LOBBY_STATES} from "./lobby.routes";
import {uiRouterConfigFn} from "../router.config";


@NgModule({
    declarations: [
        LobbyComponent
    ],
    imports: [
        BrowserModule,
        UIRouterModule.forChild({
            states: LOBBY_STATES,
            config: uiRouterConfigFn
        })
    ],
    providers: [],
    exports: [LobbyComponent],
})
export class LobbyModule {
}

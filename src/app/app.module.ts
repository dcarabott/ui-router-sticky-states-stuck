import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {APP_STATES} from "./app.routes";
import {ShellModule} from "./shell/shell.module";
import {UIRouterModule, UIView} from "@uirouter/angular";
import {MainModule} from "./main/main.module";
import {FullPageModule} from "./full-page/full-page.module";
import {OverlayModule} from "./overlay/overlay.module";
import {LobbyModule} from "./lobby/lobby.module";
import {GameCategoryModule} from "./game-category/game-category.module";
import {ContentModule} from "./content/content.module";
import {DialogModule} from "./dialog/dialog.module";
import {HomeModule} from "./home/home.module";
import {uiRouterConfigFn} from "./router.config";
import {NgModule} from "@angular/core";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        UIRouterModule.forRoot({
            states: APP_STATES,
            deferInitialRender: true,
            config: uiRouterConfigFn
        }),

        ShellModule,
        MainModule,
        FullPageModule,
        OverlayModule,
        LobbyModule,
        GameCategoryModule,
        ContentModule,
        DialogModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [UIView]
})
export class AppModule {
}

import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {UIRouterModule} from "@uirouter/angular";
import {GameCategoryComponent} from "./game-category.component";
import {GAME_CATEGORY_STATES} from "./game-category.routes";
import {uiRouterConfigFn} from "../router.config";


@NgModule({
    declarations: [
        GameCategoryComponent
    ],
    imports: [
        BrowserModule,
        UIRouterModule.forChild({
            states: GAME_CATEGORY_STATES,
            config: uiRouterConfigFn
        })
    ],
    providers: [],
    exports: [GameCategoryComponent],
})
export class GameCategoryModule {
}

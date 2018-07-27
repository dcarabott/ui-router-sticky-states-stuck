import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {UIRouterModule} from "@uirouter/angular";

import {MAIN_STATES} from "./main.routes";
import {MainComponent} from "./main.component";
import {uiRouterConfigFn} from "../router.config";

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        BrowserModule,
        UIRouterModule.forChild({
            states: MAIN_STATES,
            config: uiRouterConfigFn
        })
    ],
    providers: [],
    exports: [MainComponent],
})
export class MainModule {
}

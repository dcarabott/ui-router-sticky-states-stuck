import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {UIRouterModule} from "@uirouter/angular";
import {FULL_PAGE_STATES} from "./full-page.routes";
import {FullPageComponent} from "./full-page.component";
import {uiRouterConfigFn} from "../router.config";


@NgModule({
    declarations: [
        FullPageComponent
    ],
    imports: [
        BrowserModule,
        UIRouterModule.forChild({
            states: FULL_PAGE_STATES,
            config: uiRouterConfigFn
        })
    ],
    providers: [],
    exports: [FullPageComponent],
})
export class FullPageModule {
}

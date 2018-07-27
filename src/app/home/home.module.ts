import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {UIRouterModule} from "@uirouter/angular";
import {HOME_STATES} from "./home.routes";
import {HomeComponent} from "./home.component";
import {uiRouterConfigFn} from "../router.config";


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        UIRouterModule.forChild({
            states: HOME_STATES,
            config: uiRouterConfigFn
        })
    ],
    providers: [],
    exports: [HomeComponent],
})
export class HomeModule {
}

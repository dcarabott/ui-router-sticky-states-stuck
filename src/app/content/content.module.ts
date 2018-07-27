import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {UIRouterModule} from "@uirouter/angular";
import {CONTENT_STATES} from "./content.routes";
import {ContentComponent} from "./content.component";
import {uiRouterConfigFn} from "../router.config";


@NgModule({
    declarations: [
        ContentComponent
    ],
    imports: [
        BrowserModule,
        UIRouterModule.forChild({
            states: CONTENT_STATES,
            config: uiRouterConfigFn
        })
    ],
    providers: [],
    exports: [ContentComponent],
})
export class ContentModule {
}

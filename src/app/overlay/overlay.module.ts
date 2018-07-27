import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {OverlayComponent} from "./overlay.component";
import {UIRouterModule} from "@uirouter/angular";
import {OVERLAY_STATES} from "./overlay.routes";
import {uiRouterConfigFn} from "../router.config";


@NgModule({
    declarations: [
        OverlayComponent
    ],
    imports: [
        BrowserModule,
        UIRouterModule.forChild({
            states: OVERLAY_STATES,
            config: uiRouterConfigFn
        })
    ],
    providers: [],
    exports: [OverlayComponent]
})
export class OverlayModule {
}

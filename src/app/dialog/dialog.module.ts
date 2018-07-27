import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {UIRouterModule} from "@uirouter/angular";
import {DialogComponent} from "./dialog.component";
import {DIALOG_STATES} from "./dialog.routes";
import {uiRouterConfigFn} from "../router.config";

@NgModule({
    declarations: [
        DialogComponent
    ],
    imports: [
        BrowserModule,
        UIRouterModule.forChild({
            states: DIALOG_STATES,
            config: uiRouterConfigFn
        })
    ],
    providers: [],
    exports: [DialogComponent],
})
export class DialogModule {
}

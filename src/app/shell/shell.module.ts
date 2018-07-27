import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {UIRouterModule} from "@uirouter/angular";

import {ShellComponent} from "./shell.component";
import {SHELL_STATES} from "./shell.routes";
import {uiRouterConfigFn} from "../router.config";


@NgModule({
    declarations: [
        ShellComponent
    ],
    imports: [
        BrowserModule,
        UIRouterModule.forChild({
            states: SHELL_STATES,
            config: uiRouterConfigFn
        })
    ],
    exports: [ShellComponent],
    providers: [],
})
export class ShellModule {
}

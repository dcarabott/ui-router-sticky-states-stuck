import {UIRouter} from "@uirouter/angular";
import {Visualizer} from "@uirouter/visualizer";
import {StickyStatesPlugin} from "@uirouter/sticky-states";

export function uiRouterConfigFn(router: UIRouter) {
    router.urlService.config.strictMode(false);
    router.plugin(StickyStatesPlugin);
    router.plugin(Visualizer);
}


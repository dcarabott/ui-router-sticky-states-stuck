import {OverlayComponent} from "./overlay.component";

export let OVERLAY_STATES = [
    {
        name: "app.overlay",
        url: "overlay",
        abstract: true,
        views: {
            "overlay-view": {component: OverlayComponent}
        }
    }
];

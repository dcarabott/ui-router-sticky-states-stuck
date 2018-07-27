import {FullPageComponent} from "./full-page.component";

export let FULL_PAGE_STATES = [
    {
        name: "app.shell.full-page",
        url: "/full-page",
        abstract: true,
        views: {
            "full-page-view": {component: FullPageComponent}
        }
    }
];


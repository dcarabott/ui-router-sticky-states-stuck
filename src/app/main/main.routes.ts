import {MainComponent} from "./main.component";

export let MAIN_STATES = [
    {
        name: "app.shell.main",
        url: "/main",
        abstract: true,
        views: {
            "main-view": {component: MainComponent}
        },
    }
];


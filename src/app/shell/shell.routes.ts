import {ShellComponent} from "./shell.component";

export let SHELL_STATES = [
    {
        name: "app.shell",
        url: "/shell",
        abstract: true,
        sticky: true,
        views: {
            "app-view": {component: ShellComponent}
        }
    }
];


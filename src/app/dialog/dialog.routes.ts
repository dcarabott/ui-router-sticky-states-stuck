import {DialogComponent} from "./dialog.component";

export let DIALOG_STATES = [
    {
        name: "app.overlay.dialog",
        url: "/dialog",
        views: {
            $default: {component: DialogComponent}
        }
    }
];


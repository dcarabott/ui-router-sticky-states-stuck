import {ContentComponent} from "./content.component";

export let CONTENT_STATES = [
    {
        name: "app.shell.main.content",
        url: "/content",
        views: {
            "content": {component: ContentComponent}
        }
    }
];


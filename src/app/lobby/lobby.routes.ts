import {LobbyComponent} from "./lobby.component";

export let LOBBY_STATES = [
    {
        name: "app.shell.main.lobby",
        url: "/lobby",
        abstract: true,
        views: {
            "lobby": {component: LobbyComponent}
        }
    }
];


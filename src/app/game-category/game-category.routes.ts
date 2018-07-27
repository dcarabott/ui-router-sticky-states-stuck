import {GameCategoryComponent} from "./game-category.component";

export let GAME_CATEGORY_STATES = [
    {
        name: "app.shell.main.lobby.all",
        url: "/all",
        views: {
            $default: {component: GameCategoryComponent}
        }
    },
    {
        name: "app.shell.main.lobby.others",
        url: "/others",
        views: {
            $default: {component: GameCategoryComponent}
        }
    }
];


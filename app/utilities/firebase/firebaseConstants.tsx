export enum TREE_NODES {
    ROOM_CODE = "{roomCode}",
    QNA = "q&a",
    USERS = "users",
    QUESTION = "question{number}",
    USER = "{userId}"
}

export enum ROOM_KEY {
    GAME_PHASE = "gamePhase",
    TURN = "turn",
    USERS = "users",
    CURR_ROOM_SIZE = "currentRoomSize",
    QNA = "q&a"
}

export enum QNA_KEY {
    QUESTION = "question{number}"
}

export enum QUESTION_KEY {
    QUESTION = "Q",
    ANSWER = "A"
}

export enum USER_KEY {
    NAME = "name",
    NICKNAME = "nickname",
    SCORE = "score"
}

export enum USERS_KEY {
    USER = "{userId}"
}

export enum GAME_PHASE {
    START = "start",
    IN_GAME = "in-game",
    END = "end"
}
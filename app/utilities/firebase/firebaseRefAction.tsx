import firebase from "./firebase"
import {TREE_NODES,} from "./firebaseConstants"

export const getRoomRef = (roomKey: string,) => {
    return firebase.database().ref(`${roomKey}`);
}

export const getUsersRef = (roomKey: string,) => {
    return firebase.database().ref(`${roomKey}/${TREE_NODES.USERS}`);
}

export function getUserREF (roomKey: string, currentUserId: string) {
    return firebase.database().ref(`${roomKey}/${TREE_NODES.USERS}/${currentUserId}`);
}

export function getQNARef (roomKey: string) {
    return firebase.database().ref(`${roomKey}/${TREE_NODES.QNA}`);
}

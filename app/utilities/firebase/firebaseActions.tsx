import firebase from "./firebase"
import {GAME_PHASE, QUESTION_KEY, ROOM_KEY, TREE_NODES, USERS_KEY, USER_KEY} from "./firebaseConstants"

export function createRoom () {
  // ROOT
  var ref = firebase.database().ref("/")
  // Save this key some where
  return ref.push({
    [ROOM_KEY.GAME_PHASE]: GAME_PHASE.START,
    [ROOM_KEY.TURN]: 0,
    [ROOM_KEY.QNA]: "",
    [ROOM_KEY.CURR_ROOM_SIZE]: 0
  }).then (snap => {
    return snap.key;
  });
}

export function getCurrentRoomSize (roomKey: string) {
  var roomRef = firebase.database().ref(`${roomKey}`)
  return roomRef.get()
    .then(data => {return data.val()[ROOM_KEY.CURR_ROOM_SIZE]})
}

export function incrementRoomSize (roomKey: string) {
  firebase.database().ref(`${roomKey}`).child(ROOM_KEY.CURR_ROOM_SIZE).set(firebase.database.ServerValue.increment(1))
}

export function updateGamePhase (roomKey: string) {
  var roomRef = firebase.database().ref(`${roomKey}`)
  roomRef.update({[ROOM_KEY.GAME_PHASE]: GAME_PHASE.IN_GAME});
}

export function addUser (roomKey: string, name:string, nickname:string){
  var usersRef = firebase.database().ref(`${roomKey}/${TREE_NODES.USERS}`)
  // Save this for later
  return usersRef.push({
    [USER_KEY.NAME]: name,
    [USER_KEY.NICKNAME]: nickname,
    [USER_KEY.SCORE]: 0
  }).then(snap => {return snap.key})
}

export function getUsersData (roomKey: string) {
  return firebase.database().ref(`${roomKey}/${TREE_NODES.USERS}`).get()
    .then(data => {return data.val()});
}

export function getSpecificUser (roomKey: string, currentUserId: string) {
  return firebase.database().ref(`${roomKey}/${TREE_NODES.USERS}/${currentUserId}`).get()
    .then(data => {return data.val()})
}

export function updateScore (roomKey: string, currentUserId:string, score:number) {
  var userRef = firebase.database().ref(`${roomKey}/${TREE_NODES.USERS}/${currentUserId}`);
  userRef.update({[USER_KEY.SCORE]: score});
}

export function getTurn (roomKey: string) : any{
  var roomRef = firebase.database().ref(`${roomKey}`);
  return roomRef.get().then(data => {return data.val().turn});
}


export function incrementTurn (roomKey: string) {
  firebase.database().ref(`${roomKey}`).child(ROOM_KEY.TURN).set(firebase.database.ServerValue.increment(1))
}

export async function addQuestion (roomKey: string, question: string) {
  var qnaRef = firebase.database().ref(`${roomKey}/${TREE_NODES.QNA}/${TREE_NODES.QUESTION.replace("{number}", await getTurn(roomKey))}`)
  qnaRef.update({[QUESTION_KEY.QUESTION]: question});
}

export async function addAnswer (roomKey: string, answer: string) {
  var qnaRef = firebase.database().ref(`${roomKey}/${TREE_NODES.QNA}/${TREE_NODES.QUESTION.replace("{number}", await getTurn(roomKey))}`)
  qnaRef.update({[QUESTION_KEY.ANSWER]: answer})
}

export function getAllQNA (roomKey: string) {
  var qnaRef = firebase.database().ref(`${roomKey}/${TREE_NODES.QNA}`)
  return qnaRef.get().then(data => {return data.val()})
}
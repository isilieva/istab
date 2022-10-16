import { child, get, getDatabase, ref, set } from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);


// CARDS 

export function ajoutCards(userId, card) {
    return new Promise((res, rej) => {

        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}`)
        console.log(refUser);
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            console.log(data);
            data.push(card)
            set(refUser, data);
            res(true)
        }).catch(err => rej(err.message))
    })

}

export function deleteCards(userId, card) {
    return new Promise((res, rej) => {

        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}`)
        console.log(refUser);
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            console.log(data);
            data.delete(card)
            set(refUser, data);
            res(true)
        }).catch(err => rej(err.message))
    })

}

export function updateCards(userId, name) {
    return new Promise((res, rej) => {

        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}`)
        console.log(refUser);
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            console.log(data);
            data.put(card)
            set(refUser, data);
            res(true)
        }).catch(err => rej(err.message))
    })

}

export function getMesCards(userId) {
    return new Promise((res, rej) => {
        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}`)
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            res(data)
        }).catch(err => rej(err.message))
    })
}

// Boards

export function getMesBoards(userId) {
    return new Promise((res, rej) => {
        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}`)
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            res(data)
        }).catch(err => rej(err.message))
    })
}

export function ajoutBoards(userId, bords) {
    return new Promise((res, rej) => {

        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}`)
        console.log(refUser);
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            console.log(data);
            data.push(bords)
            set(refUser, data);
            res(true)
        }).catch(err => rej(err.message))
    })

}

export function deleteBoards(userId, bords) {
    return new Promise((res, rej) => {

        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}`)
        console.log(refUser);
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            console.log(data);
            data.delete(bords)
            set(refUser, data);
            res(true)
        }).catch(err => rej(err.message))
    })

}

export function updateBoards(userId, bords) {
    return new Promise((res, rej) => {

        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}`)
        console.log(refUser);
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            console.log(data);
            data.put(bords)
            set(refUser, data);
            res(true)
        }).catch(err => rej(err.message))
    })

}
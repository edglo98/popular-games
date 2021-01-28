import { firebase, googleAuth } from "../firebase";

export const startGoogleLogin = async() => {
    return await firebase.auth().signInWithPopup( googleAuth )
}

export const createNewUser = async(email, password) => {
    return await firebase.auth().createUserWithEmailAndPassword( email, password );
}

export const loginUser = async(email, password) => {
    return await firebase.auth().signInWithEmailAndPassword( email, password );
}
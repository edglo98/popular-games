import { firebase, auth } from "../firebase";

export const startGoogleLogin = async() => {
    await firebase.auth().signInWithPopup( auth.GoogleAuthProvider() )
        .then( auth => console.log(auth) )
}

export const createNewUser = async(email, password) => {
    await firebase.auth().createUserWithEmailAndPassword( email, password );
}
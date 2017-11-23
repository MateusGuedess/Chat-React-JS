import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARpn6GhUXCjANxI-sMiBcxiW8j18auyIc",
    authDomain: "comentarios-ed943.firebaseapp.com",
    databaseURL: "https://comentarios-ed943.firebaseio.com",
    projectId: "comentarios-ed943",
    storageBucket: "",
    messagingSenderId: "916216532482"
})

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers ={
    'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()

export default base
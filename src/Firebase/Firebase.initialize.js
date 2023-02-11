import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const  FirebaseInitializeApp=()=>{
    return initializeApp(firebaseConfig)
}
export default FirebaseInitializeApp
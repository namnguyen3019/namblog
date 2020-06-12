import { db, auth } from "../config/firebase";
import { LOGIN, SIGN_UP, LOG_OUT } from "./type";

export const login = (user) => {
    auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
        console.log("login");
    });
};

export const signup = (user) => {
    return (dispatch) => {
        auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
            console.log("create new users");
            dispatch({
                type: SIGN_UP
            })

        })
        .catch((err) => console.log(err));
    }
   
};

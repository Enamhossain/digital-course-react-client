import { createContext, useEffect, useState } from "react"
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from "../Firebase/Firebase-config";

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider =({children}) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   

   
  


    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser)
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { user, providerLogin, logOut, createUser, signIn,setLoading, };
    return (
       <AuthContext.Provider value = {authInfo}>
          {children}
       </AuthContext.Provider>
    )
}

export default AuthProvider
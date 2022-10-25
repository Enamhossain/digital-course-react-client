import { createContext } from "react"
import {createUserWithEmailAndPassword, getAuth, signInWithPopup} from 'firebase/auth'
import app from "../Firebase/Firebase-config";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider =({children}) =>{
  

  const loginProvider = (provider) =>{
     return signInWithPopup(auth,provider)
  }

  const createuser  = (email,password) => {
     return createUserWithEmailAndPassword(email,password)
  }



   const authinfo = {loginProvider,createuser}

    return (
       <AuthContext.Provider value = {authinfo}>
          {children}
       </AuthContext.Provider>
    )
}

export default AuthProvider
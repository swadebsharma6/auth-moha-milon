import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      // Create User
      const createUser = (email, password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email, password);
      }
      // Login User
      const loginUser =(email, password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }
      // logOut
      const logOut =()=>{
            setLoading(true)
            return signOut(auth);
      }

      // Observer
      useEffect(()=>{
          const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
                  setUser(currentUser);
                  console.log('Observer', currentUser);
                  setLoading(false);
            });
             return ()=>{
                  unsubscribe();
            }

      }, [])


      const authInfo = {
            user,
            createUser,
            loginUser,
            logOut,
            loading,
      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

AuthProvider.propTypes ={
      children: PropTypes.node
}

export default AuthProvider;
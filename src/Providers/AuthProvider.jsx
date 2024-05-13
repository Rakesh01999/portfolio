import { GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import axios from "axios";
// import { FacebookAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const signInWithFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // observe auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoading(false);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            console.log('Current value of the current user', currentUser);
            // if user exists then issue a token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.PropTypes = {
    children: PropTypes.node
}
// AuthProvider.propTypes = {
//     children: PropTypes.node
// }
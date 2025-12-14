import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
GoogleAuthProvider,
GithubAuthProvider,
signInWithPopup
} from 'firebase/auth';


export const AuthContext = createContext();


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
const googleLogin = () => signInWithPopup(auth, googleProvider);
const githubLogin = () => signInWithPopup(auth, githubProvider);
const logout = () => signOut(auth);


useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, currentUser => {
setUser(currentUser);
setLoading(false);
});
return () => unsubscribe();
}, []);


return (
<AuthContext.Provider value={{ user, register, login, logout, googleLogin, githubLogin, loading }}>
{children}
</AuthContext.Provider>
);
};
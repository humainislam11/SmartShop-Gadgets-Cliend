import { createContext, useEffect, useState } from "react";
import app from "../Firebase-config/firebase";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup, 
    onAuthStateChanged, 
    updateProfile
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {  // corrected 'Children' to 'children'
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const LogOut = () => {
        return signOut(auth);
    };

    const updateUserProfile = (name,photo) => {
       
        return updateProfile(auth.currentUser, {
             displayName: name, 
             photoURL: photo
           });
     };

    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User in auth state changed:', currentUser);
            setUser(currentUser);
            if(currentUser){
                 axios.post(`https://gadget-shop-sarver.vercel.app/authentication`,{email:currentUser.email,}).then(data=>{
                    if(data.data){
                        localStorage.setItem('access-token',data?.data?.token);
                        setLoading(false);
                    }
                 })
            }else{
                localStorage.removeItem('access-token');
                setLoading(false)
            }
          
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        Login,
        LogOut,
        GoogleLogin,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

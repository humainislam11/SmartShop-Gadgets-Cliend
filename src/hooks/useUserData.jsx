import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";

const useUserData = () => {
    const {user , loading} = useAuth();
    const [userData, SetUserData] = useState();
    useEffect(()=>{
        const fetchUserData = async ()=>{
            const res = await axios.get(`https://gadget-shop-sarver.vercel.app/user/${user.email}`);
            SetUserData(res.data)
        }
        if(user?.email && !loading){
            fetchUserData()
        }
        
    },[user,loading])
    return userData;
    
    
    
};

export default useUserData;
import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, SetProducts] = useState();
    useEffect(()=>{
        const fetchUserData = async ()=>{
            const res = await axios.get(`https://gadget-shop-sarver.vercel.app/allProduct`);
            SetProducts(res.data)
        }
        
            fetchUserData()
        
        
    },[])
    return products;
};

export default useProducts;
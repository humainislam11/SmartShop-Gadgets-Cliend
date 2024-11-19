import axios from "axios";
import { useEffect, useState } from "react";
import useUserData from "../../../hooks/useUserData";
import ProductCard from "../../../Components/home/ProductCard";
import Loading from "../../Loading";

const MyWishList = () => {
    const [wishlist,setWishlist] = useState([]);
    const userData = useUserData();
    const [latestData , setLatestData] = useState(true)
    const [loading,setLoading] = useState(false)
    const token = localStorage.getItem('access-token')
    useEffect(()=>{
    const fetchWishlist = async()=>{
        setLoading(true)
        await axios.get(`https://gadget-shop-sarver.vercel.app/wishlist/${userData?._id}`,{
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((res)=> {setWishlist(res.data);setLoading(false)})
    }
    if(userData?._id && token){
        fetchWishlist()
    }
    },[token,userData?._id, latestData]);
    return (
        <div>
            <h1 className="text-2xl text-center font-bold mb-6">My WishList</h1>
            <div>
               {
                loading? ( <Loading></Loading> ): (<>
                 {
                    wishlist.length > 0?
                     <div  className="grid lg:grid-cols-3">{ 
                        wishlist.map((product)=>
                        <ProductCard key={product._id} product={product} isInWishlist={setLatestData} setLatestData={setLatestData} latestData></ProductCard>)
                    }
                        </div>
                      : 
                     <div>
                        <h1 className="text-2xl font-bold text-center">No Product in Your WishList</h1>
                     </div>
                }</>)
               }
            </div>
        </div>
    );
};

export default MyWishList;
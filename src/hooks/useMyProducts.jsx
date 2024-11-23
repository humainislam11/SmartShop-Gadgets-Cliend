import axios from "axios";
import useAuth from "./useAuth";
import { useEffect, useState } from "react";
import useProducts from "./useProducts";

const useMyProducts = () => {
    const { user } = useAuth();
  const [myProducts, setMyProducts] = useState([]);
  const products = useProducts();
  console.log(products)

  useEffect(() => {
    const fetchMyProduct = async () => {
      if (user?.email) {
       
      
          const response = await axios.get(
            `https://gadget-shop-sarver.vercel.app/allProduct/${user?.email}`
          );
          setMyProducts(response.data);
        
      }
    };
    fetchMyProduct();
  }, [user?.email]);
    return myProducts;
};

export default useMyProducts;
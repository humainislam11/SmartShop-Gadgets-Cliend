import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const FeaturedProduct = () => {
    const [products, setProducts] = useState([]); // Default to an empty array
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            
                const response = await axios.get("https://gadget-shop-sarver.vercel.app/allProduct");

                
                if (Array.isArray(response.data.products)) {
                    setProducts(response.data.products.slice(0,6));
                } else {
                    throw new Error(" products is not an array");
                }
            
            
                setLoading(false); 
            
        };

        fetchProduct();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

   

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-4 ml-8">
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard product={product} key={product._id} />
                ))
            ) : (
                <div>No products found.</div>
            )}
        </div>
    );
};

export default FeaturedProduct;

import { useEffect, useState } from "react";
import FilterBar from "../Components/products/FilterBar";
import SearchBar from "../Components/SearchBar";
import SortByPrice from "../Components/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../Components/home/ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("asc");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [uniqueBrand, setUniqueBrand] = useState([]);
    const [uniqueCategory, setUniqueCategory] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(1)

    console.log({ brand, category, sort, search });

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://gadget-shop-sarver.vercel.app/allProduct?productTitle=${search}&page=${page}&limit=${9}&sort=${sort}&brand=${brand}&category=${category}`
                );

                console.log("Fetched data:", response.data);

                if (response.data) {
                    setProducts(response.data.products || []);
                    setUniqueBrand(response.data.brands || []);
                    setUniqueCategory(response.data.categories || []);
                    setTotalPages(Math.ceil(response.data.totalProducts/9))
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [search, sort, brand, category,page]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.search.value.trim());
        e.target.search.value = "";
    };

    const handleReset = () => {
        setSearch("");
        setBrand("");
        setCategory("");
        setSort("asc");
    };
    const handlePageChange = (newPage) =>{
        if(newPage>0 && newPage <= totalPages) {
         setPage(newPage);
         window.scrollTo({top:0, behavior:'smooth'})
        }

    }

    return (
        <div className="container mx-auto">
            <h1 className="text-center pt-28 font-semibold text-2xl">All Product</h1>

            <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-gray-300  w-[250px] z-[1] mt-3  p-2 shadow">
       
                <SearchBar handleSearch={handleSearch} />
                <SortByPrice setSort={setSort} />
                <FilterBar
                        setBrand={setBrand}
                        setCategory={setCategory}
                        handleReset={handleReset}
                        uniqueBrand={uniqueBrand}
                        uniqueCategory={uniqueCategory}
                    />

      </ul>
    </div>
            <div className="hidden lg:flex w-full justify-between items-center">
                <SearchBar handleSearch={handleSearch} />
                <SortByPrice setSort={setSort} />
            </div>

            <div className="grid grid-cols-12 mt-6 gap-2">
                {/* Filter Bar */}
                <div className="hidden lg:flex col-span-2">
                    <FilterBar
                        setBrand={setBrand}
                        setCategory={setCategory}
                        handleReset={handleReset}
                        uniqueBrand={uniqueBrand}
                        uniqueCategory={uniqueCategory}
                    />
                </div>

                {/* Product Display */}
                <div className="col-span-10">
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            {products.length === 0 ? (
                                <div className="flex items-center w-full h-full justify-center">
                                    <h1 className="text-3xl font-bold">No Product Found</h1>
                                </div>
                            ) : (
                                <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-2">
                                    {products.map((product) => (
                                        <ProductCard product={product} key={product._id} />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                     <div className="flex items-center justify-center gap-2 my-8">
                      <button onClick={()=> handlePageChange(page -1)}><FaArrowLeft /></button>
                      <p>page {page} of {totalPages}</p>
                      <button onClick={()=> handlePageChange(page +1)}><FaArrowRight /></button>
                </div>
                </div>
                {/* ////////////// */}

               
            </div>
        </div>
    );
};

export default Product;

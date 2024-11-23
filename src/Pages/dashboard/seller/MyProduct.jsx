import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";

const MyProduct = () => {
  const { user } = useAuth();
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const products = useProducts();
  console.log(products)

  useEffect(() => {
    const fetchMyProduct = async () => {
      if (user?.email) {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://gadget-shop-sarver.vercel.app/allProduct/${user?.email}`
          );
          setMyProducts(response.data);
        } catch (error) {
          console.error("Error fetching products:", error.message);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchMyProduct();
  }, [user?.email]);

  const handleDelete = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://gadget-shop-sarver.vercel.app/allProduct/${productId}`)
          .then((response) => {
            if (response.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
              });
              setMyProducts((prevProducts) =>
                prevProducts.filter((product) => product._id !== productId)
              );
            }
          })
          .catch((error) => {
            console.error("Error deleting product:", error.message);
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-5">My Products</h1>
      <p className="text-center font-semibold">Explore our exclusive collection of premium products, tailored to meet all your needs. Browse by category, brand, or price and find the perfect item today!</p>
      {loading && <p>Loading...</p>}

      {myProducts.length > 0 ? (
        <ul className="grid grid-cols-1 lg:grid-cols-3">
          {myProducts.map((product) => (
            <div key={product._id} className="w-[315px] border border-black">
              <figure>
                <img
                  src={product.image}
                  alt="Product"
                  className="w-[400px] h-[230px]"
                />
              </figure>

              <div className="card-body bg-[#E8E8E8]">
                <h2 className="card-title -mt-7 font-bold">
                  {product.productTitle}
                </h2>
                <p className="font-semibold text-[14px]">
                  {product.shortDescription.length < 50
                    ? product.shortDescription
                    : `${product.shortDescription.slice(0, 50)}...`}
                </p>

                <div className="text-start">
                  <h1 className="font-semibold">Brand: {product.brand}</h1>
                  <h1 className="font-semibold">
                    Category: {product.category}
                  </h1>
                  <h1 className="font-semibold">Stock: {product.stock}</h1>
                  <p className="font-semibold text-orange-500">
                    Price: ${product.price}
                  </p>
                </div>

                <div className="flex gap-5">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn bg-red-500 font-bold w-[100px] text-white"
                  >
                    <MdDelete /> Delete
                  </button>
                  {product && product._id && (
            <Link to={`/dashboard/updateProduct/${product._id}`}>
              <button className="btn bg-lime-500 font-bold w-[100px] text-white">
                <FaRegEdit /> Edit
              </button>
            </Link>
          )}

                </div>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        !loading && <p>No products found.</p>
      )}
    </div>
  );
};

export default MyProduct;

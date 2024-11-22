/* eslint-disable react/prop-types */
import axios from "axios";
import useUserData from "../../hooks/useUserData";
import Swal from "sweetalert2";

const ProductCard = ({ product, isInWishlist, setLatestData, latestData }) => {
  const { productTitle, category, brand, price, stock, shortDescription, image } = product;

  const userData = useUserData();
  const userEmail = userData?.email;

  const handleWishList = async () => {
    try {
      const res = await axios.patch("https://gadget-shop-sarver.vercel.app/wishlist/add", {
        userEmail: userEmail,
        productId: product._id,
      });

      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Success!",
          text: "Product added to your WishList",
          icon: "success",
          confirmButtonText: "Okay",
        });
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  const handleRemoveWishList = async () => {
    try {
      const res = await axios.patch("https://gadget-shop-sarver.vercel.app/wishlist/remove", {
        userEmail: userEmail,
        productId: product._id,
      });

      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Success!",
          text: "Product removed from your WishList",
          icon: "success",
          confirmButtonText: "Okay",
        });
        setLatestData(!latestData);
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  return (
    <div className="w-[315px] border border-black">
      <figure>
        <img
          src={image}
          alt="Product"
          className="w-[400px] h-[230px]"
        />
      </figure>

      <div className="card-body bg-[#E8E8E8]">
        <h2 className="card-title -mt-7 font-bold">{productTitle}</h2>
        <p className="font-semibold text-[14px]">
          {shortDescription.length < 50
            ? shortDescription
            : `${shortDescription.slice(0, 50)}...`}
        </p>

        <div className="text-start">
          <h1 className="font-semibold">Brand: {brand}</h1>
          <h1 className="font-semibold">Category: {category}</h1>
          <h1 className="font-semibold">Stock: {stock}</h1>
          <p className="font-semibold text-orange-500">Price: ${price}</p>
        </div>

        <div className="card-actions flex items-center justify-center">
          {isInWishlist ? (
            <button
              onClick={handleRemoveWishList}
              className="btn bg-red-500 font-bold w-[250px] text-white"
            >
              Remove From WishList
            </button>
          ) : (
            userData?.role === "buyer" && (
              <button
                onClick={handleWishList}
                className="btn w-[250px] bg-lime-500 font-bold text-white"
              >
                Add To WishList
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

/* eslint-disable react/prop-types */
import axios from "axios";
import useUserData from "../../hooks/useUserData";
import Swal from "sweetalert2";

const ProductCard = ({product,isInWishlist ,setLatestData,latestData}) => {
  const {productTitle,category,brand,price,stock,shortDescription,image,sellerEmail} = product;

  const userData = useUserData();
 const userEmail = userData?.email;
 console.log(userEmail);

 const handleWishList= async()=>{
   await axios.patch("https://gadget-shop-sarver.vercel.app/wishlist/add", {userEmail: userEmail,
    productId : product._id
    }).then((res)=>{
      if(res.data.modifiedCount){
        Swal.fire({
          title: "Success!",
          text: "Product added to your WishList",
          icon: "success",
          confirmButtonText: "Okay",
        });
      }
    })
 };




 const handleRemoveWishList= async()=>{
 
  await axios.patch("https://gadget-shop-sarver.vercel.app/wishlist/remove", {userEmail: userEmail,
   productId : product._id
   }).then((res)=>{
     if(res.data.modifiedCount){
       Swal.fire({
         title: "Success!",
         text: "Product Remove from your WishList",
         icon: "success",
         confirmButtonText: "Okay",
       });
       setLatestData(!latestData);
     }
   })
}
    return (
      <div className="  w-[315px] border border-black">
      <figure className=" ">
      <h1 className="font-semibold">Brand : {brand}</h1>
        <img
          src={image}
          alt="photo"
          className="w-[400px] h-[230px]" />
         
      </figure>
      
          <div className="card-body bg-[#E8E8E8] items-center text-center">
          <div className="flex gap-6">
  <h2 className="card-title font-bold bg-gra">{productTitle}</h2>
  <p className="font-semibold text-orange-500">${price}</p>
  </div>
        <p className="font-semibold text-[14px]">{shortDescription.length <50 ? `${shortDescription}` : `${shortDescription.slice(0,50)}...` }</p>

        <div className="">
          <h1 className="-ml-32 font-semibold">Category : {category}</h1>
          <h1 className="ml-[150px] -mt-[22px] font-semibold">Stock : {stock}</h1>
        </div>
        <div className="card-actions flex items-center justify-center">
          
         {
          isInWishlist ? ( <button onClick={handleRemoveWishList} className="btn bg-red-500 font-bold text-white">Remove From WishList</button>)
          : (
            <button onClick={handleWishList} className="btn bg-[#E8E8E8] text-[#BB8506] border-b-4 border-[#BB8506]">Add To WishList</button>
          )
         }
        </div>
      </div>
    </div>
    );
};

export default ProductCard;
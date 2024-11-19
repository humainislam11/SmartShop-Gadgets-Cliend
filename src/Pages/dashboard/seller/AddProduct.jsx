import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddProduct = () => {
    const {user} = useAuth()
    const handleAddProduct = async (event) =>{
        event.preventDefault();
        const from = event.target;
        const productTitle = from.productTitle.value;
        const category = from.category.value;
        const brand = from.brand.value;
        const price = from.price.value;
        const stock = from.stock.value;
        const image = from.image.value;
        
        const shortDescription = from.shortDescription.value;
       

        const newProduct = { productTitle,category,brand,price,stock,sellerEmail:user.email,shortDescription,image};
        try {
            const token = localStorage.getItem("access-token");
      
            const response = await axios.post(
              "https://gadget-shop-sarver.vercel.app/addProduct",
              newProduct,
              {
                headers: {
                  Authorization: `Bearer ${token}`, 
                },
              }
            );
      
            if (response.data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Product added successfully",
                icon: "success",
                confirmButtonText: "Okay",
              });
            }
          } catch (error) {
            Swal.fire({
              title: "Error",
              text: error.response?.data?.message || "Failed to add product",
              icon: "error",
              confirmButtonText: "Okay",
            });}

    }
    return (
        <div className="bg-base-100 px-4 sm:px-8 md:px-16 lg:px-24 py-8 rounded-xl max-w-6xl mx-auto">
           

            <div className="text-center">
                <h1 className="text-3xl lg:text-4xl mb-4 lg:mb-7 font-bold"> Add product</h1>
               
            </div>

            <form onSubmit={handleAddProduct} >

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[17px] text-lime-600 font-semibold">Product Title</span>
                        </label>
                        <input type="text" placeholder="Product Title" name="productTitle" className="input input-bordered w-full required" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[17px] text-lime-600 font-semibold">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full required" />
                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[17px] text-lime-600 font-semibold">Brand</span>
                        </label>
                        <input type="text" placeholder="Brand" name="brand" className="input input-bordered w-full required" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[17px] text-lime-600 font-semibold">Price</span>
                        </label>
                        <input type="number" placeholder="Price" name="price" className="input input-bordered w-full required" />
                    </div>

                </div>




                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[17px] text-lime-600 font-semibold">Stock</span>
                        </label>
                        <input type="number" placeholder="Stock" name="stock" className="input input-bordered w-full required" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[17px] text-lime-600 font-semibold">Image</span>
                        </label>
                        <input type="text" placeholder="Image" name="image" className="input input-bordered w-full required" />
                    </div>

                   
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-[17px] text-lime-600 font-semibold">Short Description</span>
                    </label>
                    <input type="text" name="shortDescription" placeholder="Add short description" className="input input-bordered w-full h-16" />
                </div>

               

                <input type="submit" value=" Add Product" className="btn btn-block mt-4 lg:mt-7 text-white bg-lime-700" />
            </form>
        </div>
    );
};

export default AddProduct;
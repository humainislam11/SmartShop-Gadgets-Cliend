import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { user } = useAuth();
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  console.log(id)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://gadget-shop-sarver.vercel.app/allProduct/${id}`);
        const data = await response.json();
        setProduct(data); // Populate the form with existing product data
      } catch (error) {
        console.error("Error fetching product:", error.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdateProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const productTitle = form.productTitle.value;
    const category = form.category.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const stock = form.stock.value;
    const image = form.image.value;
    const shortDescription = form.shortDescription.value;

    const updatedProduct = {
      productTitle,
      category,
      brand,
      price,
      stock,
      sellerEmail: user.email,
      shortDescription,
      image,
    };

    try {
      const response = await fetch(`https://gadget-shop-sarver.vercel.app/allProduct/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      const data = await response.json();

      if (response.ok && data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Product updated successfully.",
          icon: "success",
          confirmButtonText: "Cool",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to update the product. Try again.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }
    } catch (error) {
      console.error("Error updating product:", error.message);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while updating the product.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="bg-base-100 px-4 sm:px-8 md:px-16 lg:px-24 py-8 rounded-xl max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl lg:text-4xl mb-4 lg:mb-7 font-bold">
          Update Product
        </h1>
      </div>

      <form onSubmit={handleUpdateProduct}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[17px] text-lime-600 font-semibold">
                Product Title
              </span>
            </label>
            <input
              type="text"
              placeholder="Product Title"
              name="productTitle"
              className="input input-bordered w-full required"
              defaultValue={product.productTitle}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-[17px] text-lime-600 font-semibold">
                Category
              </span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input input-bordered w-full required"
              defaultValue={product.category}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[17px] text-lime-600 font-semibold">
                Brand
              </span>
            </label>
            <input
              type="text"
              placeholder="Brand"
              name="brand"
              className="input input-bordered w-full required"
              defaultValue={product.brand}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-[17px] text-lime-600 font-semibold">
                Price
              </span>
            </label>
            <input
              type="number"
              placeholder="Price"
              name="price"
              className="input input-bordered w-full required"
              defaultValue={product.price}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[17px] text-lime-600 font-semibold">
                Stock
              </span>
            </label>
            <input
              type="number"
              placeholder="Stock"
              name="stock"
              className="input input-bordered w-full required"
              defaultValue={product.stock}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-[17px] text-lime-600 font-semibold">
                Image
              </span>
            </label>
            <input
              type="text"
              placeholder="Image"
              name="image"
              className="input input-bordered w-full required"
              defaultValue={product.image}
            />
          </div>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-[17px] text-lime-600 font-semibold">
              Short Description
            </span>
          </label>
          <input
            type="text"
            name="shortDescription"
            placeholder="Add short description"
            className="input input-bordered w-full h-16"
            defaultValue={product.shortDescription}
          />
        </div>

        <input
          type="submit"
          value="Update Product"
          className="btn btn-block mt-4 lg:mt-7 text-white bg-lime-700"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;

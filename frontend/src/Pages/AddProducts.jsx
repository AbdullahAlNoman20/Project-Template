import { useForm } from "react-hook-form";
import UseAuth from "../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";


const AddProducts = () => {
    const {user} = UseAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        
        const title = data.title
        const description = data.description
        const price = parseFloat(data.price)
        const sellerEmail = user.email
        const product = {title,description,price,sellerEmail}

        const token = localStorage.getItem("access-token")

        axios.post("http://localhost:5000/addProducts", product,{
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res)=>{
            if(res.data.insertedId){
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Product Added Successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            console.log(res);
        });
      };



    return (
        <div>
            <div className="">
            <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6"
          >
            <div className="space-y-1">
              <label htmlFor="Title" className="block text-sm">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500 font-bold ">Required Field</p>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="description" className="block text-sm">
                Description
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <p className="text-red-500 font-bold ">Required Field</p>
              )}
            </div>

            <div className="space-y-1">
              <label htmlFor="Price" className="block text-sm">
                Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-red-500 font-bold ">Price is Required</p>
              )}
            </div>



            
            
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
            >
             <i className="fa fa-plus-circle" aria-hidden="true"></i> Add Product 
            </button>
          </form>
            </div>
        </div>
    );
};

export default AddProducts;
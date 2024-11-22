import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import UseAuth from "../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from 'sweetalert2'

const Register = () => {
  const { createUser } = UseAuth();
  // console.log(createUser)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate;

  const onSubmit = (data) => {
    const email = data.email;
    const role = data.role;
    const status = role === "buyer" ? "approved" : "pending";
    const wishlist = [];
    const userData = {email,role,status,wishlist}

    createUser(data.email, data.password)
    .then(()=>{
      axios.post("http://localhost:5000/users", userData )
      .then((res) => {
        console.log(res)
        if(res.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/");
        }
      })
    })
    console.log(userData);
  };

  return (
    <div>
      <ToastContainer />
      <section className="flex justify-center p-5">
        <div className="border w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Register Now</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="noman@gmail.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 font-bold ">Required Field</p>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Phone Number
              </label>
              <input
                type="text"
                name="number"
                id="phone_number"
                placeholder="Phone Number"
                className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                User Role 
              </label>
              <select className="select select-bordered w-full"
              {...register("role",{required:true})}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                
              </select>
              {errors.role && (
                <p className="text-red-500 font-bold ">Select Role</p>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 font-bold ">Required Field</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 font-bold ">At least 6 characters</p>
              )}
              <label htmlFor="password" className="block dark:text-gray-600">
                Conform Password
              </label>
              <input
                type="password"
                name="Conform_password"
                id="Conform_password"
                placeholder="Conform Password"
                className="border w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("Conform_password", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "Password do not match";
                    }
                  },
                })}
              />
              {errors.Conform_password && (
                <p className="text-red-500 font-bold ">
                  Both Password must match
                </p>
              )}
              <div className="flex justify-end text-xs dark:text-gray-600">
                <a
                  className="text-red-500 underline"
                  rel="noopener noreferrer"
                  href="#"
                >
                  ! Rules
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600"
            >
              Register Now <i className="fa-regular fa-registered"></i>
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Already have an account?
            <NavLink to="/Login">
              <a
                rel="noopener noreferrer"
                href="#"
                className="ml-2 text-sky-500 underline"
              >
                Sign in
              </a>
            </NavLink>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;

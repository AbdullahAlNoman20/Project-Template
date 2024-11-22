import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import Products from "../Components/Products";
import UserReview from "../Components/UserReview";
import Faq from "../Components/Faq";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* Banner */}
      <div className="">
        <Banner></Banner>
      </div>
 {/* Product section */}
      <div className="mx-auto">
        <div className="m-10">
          <h1 className="font-extrabold text-3xl text-center">Featured Products</h1>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            distinctio ex officiis obcaecati officia? Numquam rerum laborum
            voluptatum, delectus consectetur deserunt! Nisi nostrum esse non
            quibusdam eius necessitatibus quasi quos?
          </p>
        </div>
        <Products></Products>
      </div>
      {/* Review section */}
      <div className="mx-auto">
        <div className="m-10">
          <h1 className="font-extrabold text-3xl text-center">Happy Users</h1>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            distinctio ex officiis obcaecati officia? Numquam rerum laborum
            voluptatum, delectus consectetur deserunt! Nisi nostrum esse non
            quibusdam eius necessitatibus quasi quos?
          </p>
        </div>
            <UserReview></UserReview>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto">
        <div className="m-10">
          <h1 className="font-extrabold text-3xl text-center">Your Question</h1>
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            distinctio ex officiis obcaecati officia? Numquam rerum laborum
            voluptatum, delectus consectetur deserunt! Nisi nostrum esse non
            quibusdam eius necessitatibus quasi quos?
          </p>
        </div>
           <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;

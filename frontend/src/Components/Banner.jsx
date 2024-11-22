import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/group-casually-dressed-business-people-discussing-ideas-office_7861-1634.jpg?t=st=1731688506~exp=1731692106~hmac=456d93a78754ac4817f36cc3f3da7126a23587fbdfa39c301fe7d3482d1c6dc2&w=826)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 "></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                <span>
                  <Typewriter
                    words={["Welcome", "To", "Project Name"]}
                    loop={""}
                    cursor
                    cursorStyle="✒️"
                    typeSpeed={20}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-outline btn-warning">
                Get Started <i className="fa-solid fa-arrow-trend-up"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

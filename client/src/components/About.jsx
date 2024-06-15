/* eslint-disable react/prop-types */
function About({data}) {
const server = import.meta.env.VITE_SERVER_URL
  return (
    <div className="lg:h-[98vh] h-auto">
      {/* About */}
      <div className="heading relative mb-4 mt-20 md:mt-36 flex  justify-center items-center">
        <h1 className="text-2xl md:text-4xl text-white">
          ABOUT <span className="text-red-600">ME</span>{" "}
        </h1>
        <img
          data-aos="zoom-in"
          className="absolute z-[-5] w-60 md:w-[350px] h-20 md:h-24 ml-2"
          src=".././images/brush.png"
          alt="brush"
        />
      </div>

      {/* Skill */}
      <div className="skill flex flex-col items-center gap-4">
        <div className="title">
          <h1 data-aos="zoom-in" data-aos-delay="200" className="text-lg md:text-xl">
            Technology Resently I Am Working With :
          </h1>
        </div>
        <div className="btn grid lg:grid-cols-10 grid-cols-4 gap-2 md:gap-4 md:py-2">
          {data.technologies.map((technology) => (
            <button
              key={technology}
              data-aos="zoom-in"
              data-aos-delay="200"
              className="skillBtn"
            >
              {technology}
            </button>
          ))}
        </div>
      </div>

      {/* Intro */}
      <div className="intro flex flex-col md:flex-row items-center md:justify-center lg:gap-32 md:gap-20 mt-16">
        <div
          data-aos={window.innerWidth < 767 ? "zoom-in" : "fade-right"}
          data-aos-delay="200"
          className="img border-8 border-primary w-[280px] h-[410px] rounded-3xl p-4"
        >
          <img
            className="w-full h-full "
            src={`${server}/About-Image/${data.about}`}
            alt="picture-2"
          />
        </div>
        <div
          data-aos={window.innerWidth < 767 ? "zoom-out" : "fade-left"}
          data-aos-delay="200"
          className="text w-full md:w-[40%] flex flex-col justify-center p-8 md:p-0"
        >
          <h2 className="text-2xl text-red-600">Education</h2>
          <p className="text-justify">
            {data.education}
          </p>
          <br />
          <h2 className="text-2xl text-red-600">Skill</h2>
          <p className="text-justify">
          {data.skill}
          </p>
          <br />
          <h2 className="text-2xl text-red-600 md:hidden lg:block">Passion</h2>
          <p className="text-justify md:hidden lg:block">
          {data.passion}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

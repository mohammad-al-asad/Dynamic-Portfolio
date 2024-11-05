/* eslint-disable react/prop-types */
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const server = import.meta.env.VITE_SERVER_URL;

function Project({ data }) {

  data.splice(-1,data.length-6);
  
  return (
    <div className="lg:h-[95vh] h-auto">
      <div className="heading relative mb-8 md:mb-6 mt-32 flex justify-center items-center">
        <h1 className="text-2xl md:text-4xl text-white">
          Lastest <span className="text-red-600">Projects</span>
        </h1>
        <img
          data-aos="zoom-in"
          className="absolute z-[-5] w-[300px] md:w-[400px] h-20 md:h-28 ml-1"
          src=".././images/brush.png"
          alt="brush"
        />
      </div>

      <div className="projects grid justify-items-center">
        <div className="container grid lg:grid-cols-3 grid-cols-2 gap-4 md:gap-8 p-6 md:p-8">

          {data.map((project) =>(
            <div key={project.title} data-aos="zoom-out" data-aos-delay="200" className="box group">
              <img
                className="w-full h-full group-hover:opacity-70 group-hover:scale-[1.1] transition-all"
                src={`${server}/Project-Image/${project.project}`}
                alt={project.title}
              />
              <div className="layer">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link}>
                  <FaArrowUpRightFromSquare />
                </a>
              </div>
            </div>)
          )}

        </div>
      </div>
    </div>
  );
}

export default Project;

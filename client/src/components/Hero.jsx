/* eslint-disable react/prop-types */
import { Typewriter, Cursor } from "react-simple-typewriter";
const server = import.meta.env.VITE_SERVER_URL;

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { IconContext } from "react-icons";
function Hero({data}) {

    return (
      <div className="hero flex items-center justify-between px-6 md:px-[50px] border-b-8 border-primary h-[50vh] lg:h-[88vh] md:h-[70vh] bg-[url('../images/bg-2.jpg')] bg-cover">
        <div data-aos="fade-down" className="description space-y-3">
          <div className="text  md:space-y-3">
            <h2 className="text-lg md:text-3xl">Hi, Myself</h2>
            <h1 className="text-xl md:text-5xl">M.A. Asad</h1>
            <h2 className="text-sm md:text-2xl">
              And I'm A{" "}
              <span className="text-primary">
                <Typewriter loop={0} words={data.professions} />
              </span>
              <Cursor cursorColor="red" />
            </h2>
            <p className="text-gray-500 w-[80%] md:w-[70%] text-xs">
              {data.description}
            </p>
          </div>
          <IconContext.Provider
            value={{
              className:
                "text-primary border-[2.5px] border-primary rounded-full text-2xl md:text-3xl p-[3.5px] transition-all hover:scale-125",
            }}
          >
            <div className="links flex gap-4">
              <a target="blank" href="https://github.com/mohammad-al-asad">
                <FaGithub />
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/mohammad-al-asad/"
              >
                <FaLinkedinIn />
              </a>
              <a target="blank" href="https://x.com/maasad11914">
                <FaTwitter />
              </a>
              <a target="blank" href="https://www.facebook.com/maasad11914">
                <FaFacebookF />
              </a>
              <a target="blank" href="https://www.instagram.com/maasad11914">
                <FaInstagram />
              </a>
            </div>
          </IconContext.Provider>
        </div>
        <div
          data-aos="fade-left"
          className="img w-50 h-[350px] md:w-[350px] md:h-[550px] max-h-[90%] lg:mr-8 self-end"
        >
          <img
            className="w-full h-full"
            src={`${server}/Hero-Image/${data.hero}`}
            alt="picture"
          />
        </div>
      </div>
    );
  }
  
export default Hero;

/* eslint-disable react/prop-types */
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Nav from "../components/Nav.jsx";
import Project from "../components/Project.jsx";

import Loader from "../components/Loader.jsx";

function Home({ data, isLoading }) {
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div>
        <Nav data={data.CvObj} />
        <Hero data={data.heroObj} />
        <About data={data.aboutObj} />
        <Project data={data.projectObjs} />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;

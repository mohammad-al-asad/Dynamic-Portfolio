/* eslint-disable react/prop-types */
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import { useEffect } from "react";
const server = import.meta.env.VITE_SERVER_URL;
function Admin({ data, isLoading }) {
  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      location.href = "/login";
    }
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  const { heroObj, aboutObj, projectObjs } = data;

  function logout(){
    localStorage.removeItem("admin");
    location.href="/"
  }

  async function handleHero(e) {
    e.preventDefault();
    const fromData = new FormData(e.target);
    let professions = fromData.get("professions");
    const filteredProfessions = professions.split(",");
    fromData.set("professions", JSON.stringify(filteredProfessions));
    try {
      const response = await axios.put(`${server}/portfolio/hero`, fromData);
      const showToastSuccessMessage = () => {
        toast.success(response.data.success);
      };
      showToastSuccessMessage();
      e.target.reset()
    } catch (error) {
      const showToastFailMessage = () => {
        toast.error(error.response.data.error);
      };
      showToastFailMessage();
    }
  }

  async function handleAbout(e) {
    e.preventDefault();
    const fromData = new FormData(e.target);
    let technologies = fromData.get("technologies");
    const filteredTechnologies = technologies.split(",");
    fromData.set("technologies", JSON.stringify(filteredTechnologies));
    try {
      const response = await axios.put(`${server}/portfolio/about`, fromData);
      const showToastSuccessMessage = () => {
        toast.success(response.data.success);
      };
      showToastSuccessMessage();
      e.target.reset()
    } catch (error) {
      const showToastFailMessage = () => {
        toast.error(error.response.data.error);
      };
      showToastFailMessage();
    }
  }

  async function handleCV(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await axios.put(`${server}/portfolio/CV`, formData);
      const showToastSuccessMessage = () => {
        toast.success(response.data.success);
      };
      showToastSuccessMessage();
      e.target.reset()
    } catch (error) {
      const showToastFailMessage = () => {
        toast.error(error.response.data.error);
      };
      showToastFailMessage();
    }
  }

  async function handleProject(e) {
    e.preventDefault();
    const fromData = new FormData(e.target);
    try {
      const response = await axios.put(`${server}/portfolio/project`, fromData);
      const showToastSuccessMessage = () => {
        toast.success(response.data.success);
      };
      showToastSuccessMessage();
      e.target.reset()
    } catch (error) {
      const showToastFailMessage = () => {
        toast.error(error.response.data.error);
      };
      showToastFailMessage();
    }
  }
  return (
    <>
      <ToastContainer />
      <button
            className="logout fixed left-5 top-5 z-30 bg-red-600 border-red-600 text-white font-[300] md:px-10 p-3 rounded-2xl transition-all hover:bg-red-800 hover:border-red-800 hover:scale-105 grid place-content-center shadow-xl"
            onClick={logout}
          >
            Logout
          </button>
      <div className="admin">
        {/* Hero */}
        <form onSubmit={handleHero}>
          <h1 className=" text-3xl mt-10 font-semibold">Hero Section</h1>
          <label htmlFor="professions">Professions:</label>
          <input
            name="professions"
            type="text"
            placeholder="x,y,z..."
            required
            defaultValue={heroObj.professions}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            type="text"
            placeholder="Lorem ipsum amet..."
            required
            defaultValue={heroObj.description}
          />
          <label htmlFor="hero">Image:</label>
          <input
            className="bg-white m-auto"
            type="file"
            name="hero"
            id="hero"
            required
          />
          <button
            className="bg-primary text-white font-[300] p-2 mt-5 rounded-xl transition-all hover:bg-[#316799] hover:border-[#316799] hover:scale-105 grid place-content-center"
            type="submit"
          >
            Apply
          </button>
        </form>

        {/* About */}
        <form onSubmit={handleAbout}>
          <h1>About Section</h1>
          <label htmlFor="technologies">Technologies:</label>
          <input
            name="technologies"
            type="text"
            placeholder="x,y,z..."
            required
            defaultValue={aboutObj.technologies}
          />
          <label htmlFor="education">Education:</label>
          <textarea
            name="education"
            type="text"
            placeholder="Lorem ipsum amet..."
            required
            defaultValue={aboutObj.education}
          />
          <label htmlFor="skill">Skill:</label>
          <textarea
            name="skill"
            type="text"
            placeholder="Lorem ipsum amet..."
            required
            defaultValue={aboutObj.skill}
          />
          <label htmlFor="passion">Passion:</label>
          <textarea
            name="passion"
            type="text"
            placeholder="Lorem ipsum amet..."
            required
            defaultValue={aboutObj.passion}
          />
          <label htmlFor="about">Image:</label>
          <input
            className="bg-white m-auto"
            type="file"
            name="about"
            id="about"
            required
          />
          <button
            className="bg-primary text-white font-[300] p-2 mt-5 rounded-xl transition-all hover:bg-[#316799] hover:border-[#316799] hover:scale-105 grid place-content-center"
            type="submit"
          >
            Apply
          </button>
        </form>

        {/* Project */}
        <form onSubmit={handleProject}>
          <h1>Project Section</h1>
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            type="text"
            placeholder="React App"
            required
            defaultValue={projectObjs[0]?.title}
          />
          <label htmlFor="description">Description:</label>
          <input
            name="description"
            type="text"
            placeholder="Lorem ipsum amet..."
            required
            defaultValue={projectObjs[0]?.description}
          />
          <label htmlFor="link">Link:</label>
          <input
            name="link"
            type="text"
            placeholder="https://xyz.com/abc"
            required
            defaultValue={projectObjs[0]?.link}
          />
          <label htmlFor="project">Image:</label>
          <input
            className="bg-white m-auto"
            type="file"
            name="project"
            id="project"
            required
          />
          <button
            className="bg-primary text-white font-[300] p-2 mt-5 rounded-xl transition-all hover:bg-[#316799] hover:border-[#316799] hover:scale-105 grid place-content-center"
            type="submit"
          >
            Apply
          </button>
        </form>

        {/* CV */}
        <form onSubmit={handleCV}>
          <h1 className="mb-2">CV</h1>
          <input className="bg-white" type="file" name="CV" id="CV" required />
          <button
            className="bg-primary text-white font-[300] p-2 mt-5 rounded-xl transition-all hover:bg-[#316799] hover:border-[#316799] hover:scale-105 grid place-content-center"
            type="submit"
          >
            Apply
          </button>
        </form>
        
      </div>
    </>
  );
}

export default Admin;

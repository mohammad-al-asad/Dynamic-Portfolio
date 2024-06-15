import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const server = import.meta.env.VITE_SERVER_URL;

function Login() {
  async function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await axios.post(`${server}/login`, formData, {
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.data.data) {
        toast.success(response.data.message);
        localStorage.setItem("admin", response.data.data);
        setTimeout(()=>{
            location.href = "/admin";
        },1000)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="grid place-items-center h-[100vh]">
      <ToastContainer />
      <div className="login absolute w-[70%] md:w-1/2 lg:w-[40%] rounded-xl flex items-center justify-center bg-primary h-72 md:h-80 shadow-xl">
        <form
          className="w-full flex flex-col gap-5 justify-center items-center"
          onSubmit={handleLogin}
        >
          <div className="mb-3">
            <h1 className="text-2xl md:text-3xl text-center border-red-600 border-l-4 md:border-l-[6px] px-3 text-white font-bold">
              Login <span className="text-red-600 font-bold">Required</span>
            </h1>
          </div>

          <input
            placeholder="Enter Your Name"
            type="text"
            name="name"
            required
          />
          <input
            placeholder="Enter Your Password"
            type="password"
            name="password"
            required
          />
          <button
            className="bg-red-600 border-red-600 text-white font-[300] p-2 rounded-xl transition-all hover:bg-red-800 hover:border-red-800 hover:scale-105 grid place-content-center"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

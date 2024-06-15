import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import axios from "axios";
const server = import.meta.env.VITE_SERVER_URL;
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Login from "./pages/Login.jsx";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    try {
      (async () => {
        const res = await axios.get(`${server}/portfolio`);
        setData(res.data);
        setIsLoading(false);
      })();
    } catch (error) {
      console.log("There was an error");
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} isLoading={isLoading} />} />
        <Route path="/login" element={<Login data={data} isLoading={isLoading} />} />
        <Route path="/admin" element={<Admin data={data} isLoading={isLoading} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

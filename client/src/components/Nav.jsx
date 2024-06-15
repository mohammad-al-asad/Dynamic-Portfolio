/* eslint-disable react/prop-types */
const server = import.meta.env.VITE_SERVER_URL;

function Nav({data}) {
  return (
    <div className="bg-primary flex justify-between items-center h-10 md:h-[60px] px-2 md:p-5 lg:px-8 w-full">
      <div className="name">
        <h1 className="text-white text-xl md:text-4xl font-bold [word-spacing:4px] md:[word-spacing:10px]">
          <span className="text-red-600 font-semibold  pr-2">|</span>Mohammad Al{" "}
          <span className="text-red-600 font-bold">Asad</span>
        </h1>
      </div>
      <div className="btn cursor-pointer bg-red-600 hover:scale-105 transition-all hover:bg-red-800 text-white font-[300] p-2 rounded-sm text-[10px] md:text-xl">
        <a href={`${server}/CV/${data.CV}`} download>
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Nav;

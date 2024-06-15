import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const showToastSuccessMessage = () => {
    toast.success("Successfully Sent !");
  };
  const showToastFailMessage = () => {
    toast.error("Somthing Went Wrong !");
  };
  const showToastInfoMessage = () => {
    toast.info("Wait For a Second !");
  };

  const onSubmit = async (event) => {
    showToastInfoMessage();
    
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "665806ce-6706-43b1-8e1f-3295a508c1eb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset()
      showToastSuccessMessage();

    }else{
      showToastFailMessage();
    }
  };

  return (
    <div className="lg:h-[95vh] h-auto">
      <ToastContainer />

      {/* Not for Small device */}
      <div className="heading hidden relative mb-10 md:mb-4 mt-20 md:mt-36 md:flex justify-center items-center">
        <h1 className="text-2xl md:text-4xl text-white">
          Contact <span className="text-red-600">Information</span>
        </h1>
        <img
          data-aos="zoom-in"
          className="absolute z-[-5] w-[300px] md:w-[500px] h-20 md:h-28 ml-1"
          src=".././images/brush.png"
          alt="brush"
        />
      </div>

      {/* For Small device */}
      <div className="heading md:hidden flex relative mb-10 mt-20 justify-center items-center">
        <h1 className="text-2xl text-white">
          Contact <span className="text-red-600">Me</span>
        </h1>
        <img
          data-aos="zoom-in"
          className="absolute z-[-5] w-[250px] h-[70px] ml-1"
          src=".././images/brush.png"
          alt="brush"
        />
      </div>
      

      <div className="contact md:flex px-10 mt-8">
        <div className="form md:w-1/2 flex items-center justify-center">
          <form
            className=" bg- w-full h-[88%] flex flex-col gap-5 justify-center items-center rounded-[30px]"
            onSubmit={onSubmit}
          >
            <div className="hidden heading relative mb-4 border-primary border-b-8  h-[50px] p-4 pb-6 rounded-3xl md:flex justify-center items-center">
              <h1 className="text-4xl text-center text-black">
                Contact <span className="text-red-600">Me</span>
              </h1>
            </div>

            <input
              placeholder="Enter Your Name"
              type="text"
              name="name"
              required
            />
            <input
              placeholder="Enter Your Email"
              type="email"
              name="email"
              required
            />
            <textarea
              className="h-20 md:h-28"
              placeholder="Your Message...."
              name="message"
              required
            ></textarea>
            <button
              className="bg-primary text-white font-[300] p-2 rounded-xl transition-all hover:bg-[#316799] hover:border-[#316799] hover:scale-105 grid place-content-center"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="img w-1/2 p-14 mt-4 hidden md:block">
          <img
            className="h-full w-full"
            src=".././images/contact.png"
            alt="contact me"
          />
        </div>
      </div>
    </div>
  );
}
export default Contact;

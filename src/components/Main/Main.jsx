
import corporate from "./assets/A1.jpg";
import marketing from "./assets/A1.jpg";
import operations from "./assets/A1.jpg";
import product from "./assets/A1.jpg";
import uj from "./assets/uj-logo-1.jpg";
import uk from "./assets/ukzn-logo.png";
import wits from "./assets/wits-logo-1.png";

const Main = () => {
  return (
    <section className="bg-black h-full opacity-90 p-2">
      <div className="text-center mb-10">
        <h1 className="text-white text-xl font-semibold">
          FS-Direct Organisational Structure
        </h1>
        <p className="text-gray-400 p-4">
          As of 17 Jul 2024, Futurescore will operate under 32 business
          functions, separated into four categories; Corporate, Marketing,
          Operations, and Product Development.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        <div className="text-center">
          <h2 className="text-white mb-2">Corporate</h2>
          <img
            src={corporate}
            alt="Corporate"
            className="w-32 max-w-xs h-auto object-cover mx-auto rounded-md"
          />
        </div>
        <div className="text-center">
          <h2 className="text-white mb-2">Marketing</h2>
          <img
            src={marketing}
            alt="Marketing"
            className="w-32 max-w-xs h-auto object-cover mx-auto rounded-md"
          />
        </div>
        <div className="text-center">
          <h2 className="text-white mb-2">Operations</h2>
          <img
            src={operations}
            alt="Operations"
            className="w-32 max-w-xs h-auto object-cover mx-auto rounded-md"
          />
        </div>
        <div className="text-center">
          <h2 className="text-white mb-2">Product Dev</h2>
          <img
            src={product}
            alt="Product Development"
            className="w-32 max-w-xs h-auto object-cover mx-auto rounded-md"
          />
        </div>
      </div>
      <section className="mt-2">
        <div className="items-center text-center justify-center">
          <h2 className="text-white  text-2xl pb-4 font-bold text-center">
            Available Universities
          </h2>
          <div className="flex gap-2 p-2 pb-8">
            <div className="animate-fade-out-in-sequence delay-[0s]">
              
              
              <img src={uj} className="w-32" alt="UJ Logo" />
            </div>
            <div className="animate-fade-out-in-sequence delay-[4s]">
            
            
              <img src={uk} className="w-32" alt="UKZN Logo" />
            </div>
            <div className="animate-fade-out-in-sequence delay-[8s]">
            
            
              <img src={wits} className="w-32" alt="WITS Logo" />
            </div>
            <hr/>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-gray-500 rounded-md opacity-60 w-full">
        <div>
        <h1 className="text-white t text-2xl text-center font-bold pb-4 pt-4">Contact Us</h1>
        <div className="text-center">
        <input
           type="text"
           label="Name"
           placeholder="Email subject"
           className="p-2 rounded-lg  bg-gray-300"
          />
          <br/>
          <br/>
          <input
           type="text"
           label="Name"
           placeholder="Enter email"
           className="p-2 rounded-lg  bg-gray-300"
          />

          <textarea
           type="textArea"
           label="Name"
           placeholder="Enter message"
           className="mt-4 px-4 bg-gray-300"
          > </textarea>
          <br/>
          <div className="p-4">
          <button className="bg-red-600 p-2 text-black rounded-lg opacity-60 w-[100px] h-[32px]">Submit</button>
          </div>
          
        </div>
        </div>
            

      </section>
    </section>
  );
};

export default Main;

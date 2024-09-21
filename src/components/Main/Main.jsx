
import corporate from "./assets/newCorporate.jpeg";
import marketing from "./assets/newMarketing.jpeg";
import operations from "./assets/newOperations.jpg";
import product from "./assets/newDevelopmnet.webp";
import uj from "./assets/uj-logo-1.jpg";
import uk from "./assets/ukzn-logo.png";
import wits from "./assets/wits-logo-1.png";

const Main = () => {
  return (
    <section className="bg-black h-full opacity-90 p-2">
      <div className="text-center mb-10 mt-8 md:mt-14">
        <h1 className="text-white text-xl font-semibold md:text-2xl">
          FS-Direct Organisational Structure
        </h1>
        <p className="text-gray-400 p-4">
          As of 17 Jul 2024, Futurescore will operate under 32 business
          functions, separated into four categories; Corporate, Marketing,
          Operations, and Product Development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4">
  <div className="text-center bg-gray-800 rounded-lg overflow-hidden">
    <h2 className="text-white mb-2 md:hidden">Corporate</h2>
    <img
      src={corporate}
      alt="Corporate"
      className="w-full h-48 object-cover pb-2"
    />
    <h2 className="text-white mb-2 p-2">Corporate</h2>
    <p className="text-white p-2">
      Corporate refers to large companies or organizations, recognized as
      separate legal entities, involved in business activities, management,
      and strategic operations.
    </p>
  </div>

  <div className="text-center bg-gray-800 rounded-lg overflow-hidden">
    <h2 className="text-white mb-2 md:hidden">Marketing</h2>
    <img
      src={marketing}
      alt="Marketing"
      className="w-full h-48 object-cover"
    />
    <h2 className="text-white mb-2 p-2">Marketing</h2>
    <p className="text-white p-2">
      Marketing refers to the strategies and tactics
       used by companies to promote their products or services to customers.
    </p>
  </div>

  <div className="text-center bg-gray-800 rounded-lg overflow-hidden">
    <h2 className="text-white mb-2 md:hidden">Operations</h2>
    <img
      src={operations}
      alt="Operations"
      className="w-full h-48 object-cover"
    />
    <h2 className="text-white mb-2 p-2">Operations</h2>
    <p className="text-white p-2">
      Operations involve the processes that ensure a company 
      efficiently produces and delivers products or services.
    </p>
  </div>

  <div className="text-center bg-gray-800 rounded-lg overflow-hidden">
    <h2 className="text-white mb-2 md:hidden">Product Dev</h2>
    <img
      src={product}
      alt="Product Development"
      className="w-full h-48 object-cover"
    />
    <h2 className="text-white mb-2 p-2">Product Dev</h2>
    <p className="text-white p-2">
      Product Development focuses on the creation and improvement of products
       to meet customer needs and market demands.
    </p>
  </div>
</div>

<section className="mt-2 md:mt-8">
  <div className="flex flex-col items-center justify-center text-center">
    <h2 className="text-white text-2xl pb-4 font-bold">
      Available Universities
    </h2>
    <div className="flex gap-4 p-2 pb-8 justify-center items-center">
      <div className="animate-fade-out-in-sequence delay-[0s]">
        <img 
          src={uj} 
          className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 object-contain mx-auto" 
          alt="UJ Logo" 
        />
      </div>
      <div className="animate-fade-out-in-sequence delay-[4s]">
        <img 
          src={uk} 
          className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 object-contain mx-auto" 
          alt="UKZN Logo" 
        />
      </div>
      <div className="animate-fade-out-in-sequence delay-[8s]">
        <img 
          src={wits} 
          className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 object-contain mx-auto" 
          alt="WITS Logo" 
        />
      </div>
    </div>
  </div>
</section>
<section id="contact" className="bg-black rounded-md pb-8 w-full p-6 md:p-12">
  <div className="max-w-3xl mx-auto">
    <h1 className="text-white text-2xl text-center font-bold pb-4">Contact Us</h1>
    <div className="flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder="Email subject"
        className="w-full max-w-lg p-3 rounded-lg bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
      />
      <input
        type="email"
        placeholder="Enter email"
        className="w-full max-w-lg p-3 rounded-lg bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
      />
      <textarea
        placeholder="Enter message"
        className="w-full max-w-lg p-3 h-32 rounded-lg bg-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
      />
      <div className="pt-4">
        <button className="bg-red-600 p-2 text-white rounded-lg opacity-90 w-[120px] h-[40px] hover:bg-red-700 transition">
          Submit
        </button>
      </div>
    </div>
  </div>
</section>

    </section>
  );
};

export default Main;

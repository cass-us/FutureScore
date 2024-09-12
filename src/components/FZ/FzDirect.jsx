import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/swiper-bundle.css"; 
 
import "./swiper-custom.css"; 
import alg from "./assets/alg2.jpg";
import reports from "./assets/reports.jpg";
import algo1 from "./docs/algo.pdf";
import algo2 from "./docs/algo2.pdf";
import algo3 from "./docs/algo3.png";
import report from "./docs/report1s.jpg";
import market from "./docs/market.pdf";
import dev from "./docs/dev4.jpg";
import dev1 from "./docs/dev5.jpg";
import one from "./docs/two.jpg";
import two from "./docs/two.jpg";
import three from "./docs/two.jpg";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FzDirect = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="pt-16">
      {/* Reports Section */}
      <section id="reports" className="min-h-screen bg-gray-200 p-8 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4">Reports</h2>
        <Swiper

          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full max-w-lg"
        >
          <SwiperSlide>
            <div className="text-center">
              <img src={reports} alt="Report Image" className="w-full max-w-md mb-6" />
              <p className="text-center pb-4">Weekly Report; 10 – 15 September 2023</p>
              <a href={report} download className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-blue-700">
                Download Report PDF
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

    
      <section id="market-watch" className="min-h-screen bg-gray-300 p-8 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4">Market Watch</h2>
        <Swiper
          modules={[Navigation, Pagination]} 
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full max-w-lg"
        >
          <SwiperSlide>
            <div className="text-center">
              <img src={reports} alt="Market Watch" className="w-full max-w-md mb-6" />
              <p className="text-center font-bold pb-4">Market Watch PDF: 25 July 2023</p>
              <a href={market} download className="px-4 py-4 bg-gray-700 text-white rounded hover:bg-blue-700">
                Download Market PDF
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      
      <section id="research-development" className="min-h-screen bg-gray-400 p-8 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4">Research & Development</h2>
        <Swiper
          modules={[Navigation, Pagination]} 
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full max-w-lg"
        >
          <SwiperSlide>
            <img src={dev} alt="Research 1" className="h-[400px] w-[350px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dev1} alt="Research 2" className="h-[400px] w-[350px]" />
          </SwiperSlide>
        </Swiper>
      </section>

      
      <section id="algorithms" className="min-h-screen bg-gray-500 p-8 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4">Algorithms</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full max-w-lg"
        >
          <SwiperSlide>
            <img src={alg} alt="Algorithm Image" className="w-full max-w-md mb-6 rounded-lg pb-4 bg-black opacity-80" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center pb-4">
              <p className="text-center pb-4 font-bold">Neural Network Briefing</p>
              <a href={algo1} download className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-red-600">
                Download Algorithm PDF
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <p className="text-center pb-4">Neural Network Design & Integration</p>
              <a href={algo2} download className="text-center items-center justify-center pb-4 px-8 py-2 bg-gray-600 text-white rounded hover:bg-blue-700">
                Download Algorithm PDF
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className="p-2">Spatial Probability Distribution Equation</h2>
            <img src={algo3} alt="Algorithm Equation" className="w-full max-w-md mb-6" />
          </SwiperSlide>
        </Swiper>
      </section>

     
      <section id="meetings" className="min-h-screen bg-gray-600 p-8 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4">1-on-1 Meetings</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full max-w-lg"
        >
          <SwiperSlide>
            <img src={one} alt="Meeting 1" className="p-2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={two} alt="Meeting 2" className="p-2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={three} alt="Meeting 3" className="p-2" />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default FzDirect;

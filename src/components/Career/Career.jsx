import { useState, useEffect } from 'react';
import jobsData from './Jobs/Jobs.json'; // Import the JSON file
<<<<<<< HEAD
// import background from "./assets/career.jpg";
=======

>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  useEffect(() => {
    setJobs(jobsData.jobs);
  }, []);
  
<<<<<<< HEAD
  // Handle search input changes
=======
  
>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

<<<<<<< HEAD
  // Handle category filter change
=======
 //filer
>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter and search jobs
  const filteredJobs = jobs
    .filter((category) => selectedCategory === "All" || category.category === selectedCategory)
    .map((category) => ({
      ...category,
      roles: category.roles.filter((role) =>
        role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }));

  return (
    <section>
     
      <div
        className="bg-cover bg-center bg-no-repeat bg-black opacity-90"
       
      >
        <div className="bg-black bg-opacity-70 p-6">
          <h1 className="text-white text-3xl font-bold text-center">Careers at Futurescore</h1>
<<<<<<< HEAD
{/*           
           <p className="text-gray-400 text-center mt-40">
            Open positions
            These are the opportunities available at Futurescore. 
            It’s important to note that these are volunteer opportunities 
            as per Futurescore’s open-source policy.
            However, if you are deciding to apply through this portal instead 
            of joining our membership, then you will be expected to contribute at least 10 hours 
            a week to the course. Lack of output early on is immediate dismissal.
          </p> */}
=======
         
>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216
        </div>
      </div>

      
      <div className="bg-black bg-opacity-80 p-6">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6">
        
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search for jobs..."
              className="rounded-md p-2 bg-black text-white  opacity-65 w-full sm:w-1/2 mb-4 sm:mb-0"
            />
      
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="rounded-md p-2 bg-black text-white"
            >
              <option value="All">All Categories</option>
              {jobs.map((category, index) => (
                <option key={index} value={category.category}>
                  {category.category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

<<<<<<< HEAD
    
=======
      {/* Jobs section */}
>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216
      <div className="bg-black bg-opacity-80 container mx-auto p-6">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">Job Opportunities</h1>
        {filteredJobs.map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-white text-2xl text-center font-semibold mb-4">{category.category}</h2>
            <div className="space-y-4">
              {category.roles.map((role, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-black opacity-70 shadow-md rounded-md flex flex-col lg:flex-row justify-between items-start lg:items-center"
                >
                  <div>
                    <h3 className="text-white text-xl font-semibold">{role.title}</h3>
                    <p className="text-white">{role.description}</p>
                  </div>
                  <a
                    href="#"
                    className="text-red-500 font-semibold mt-4 lg:mt-0"
                  >
                    {role.apply_link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;

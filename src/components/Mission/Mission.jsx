import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import mission from "./assets/mission.webp";
import ukzn from "./assets/UKZN-logo.jpg";
import uj from "./assets/universityOfJhb.png";
import wits from "./assets/witsUniv.jpeg";
<<<<<<< HEAD
import coursesData from '../../data/data.json'; // Import the JSON data
=======
import coursesData from '../../data/data.json'; 
>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216

const Mission = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
<<<<<<< HEAD
  const [selectedCourse, setSelectedCourse] = useState(null); // State to handle course selection
  const [universities, setUniversities] = useState([]);

  // Handle search input changes
=======
  const [selectedCourse, setSelectedCourse] = useState(null); 
  const [universities, setUniversities] = useState([]);

  
>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    console.log(universities);
<<<<<<< HEAD
    // Filter courses based on search term
=======
   
>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216
    if (value) {
      const results = {};
      coursesData.universities.forEach((university) => {
        university.faculties.forEach((faculty) => {
          faculty.courses.forEach((course) => {
            if (course.name.toLowerCase().includes(value.toLowerCase())) {
              if (!results[university.name]) {
                results[university.name] = [];
              }
              results[university.name].push({
                ...course,
                facultyName: faculty.name,
              });
            }
          });
        });
      });
      setFilteredCourses(results);
    } else {
      setFilteredCourses({});
    }
  };

<<<<<<< HEAD
  // Handle course click to display detailed card
  const handleCourseClick = (course) => {
    setSelectedCourse(course); // Set selected course for display
  };

  useEffect(() => {
    // Set universities data from JSON
=======
 
  const handleCourseClick = (course) => {
    setSelectedCourse(course); 
  };

  useEffect(() => {
   
>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216
    setUniversities(coursesData.universities);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white">
<<<<<<< HEAD
      {/* Background Image */}
=======
     
>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216
      <div
        className="absolute inset-0 bg-cover bg-center bg-black opacity-50"
        style={{ backgroundImage: `url(${mission})` }}
      ></div>
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 opacity-80"></div>

<<<<<<< HEAD
      {/* Search section */}
=======
     
>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216
      <div className=" p-4 mt-[62px]  bg-opacity-50 bg-black w-full fixed top-0 left-0 z-10">
        <div className="flex space-x-2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="e.g Information Technology"
            className="rounded-md p-2 bg-white text-red-700 w-full sm:w-[250px]"
          />
          <SearchIcon className="text-white m-2" />
        </div>
      </div>

<<<<<<< HEAD
      {/* Main Content */}
      <div className="relative pt-[60px] pb-[200px] z-0">
        {/* Display search results */}
=======
    
      <div className="relative pt-[60px] pb-[200px] z-0">
       
>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216
        {Object.keys(filteredCourses).length > 0 && (
          <div className="bg-black text-white p-4 rounded-lg mx-auto w-full sm:justify-center mb-8 sm:w-[350px] mt-8">
            <h2 className="text-lg font-semibold mb-12">Search Results:</h2>
            {Object.entries(filteredCourses).map(([universityName, courses]) => (
              <div key={universityName} className="mb-6">
                <h3 className="font-bold text-xl mb-2">{universityName}</h3>
                {courses.slice(0, 3).map((course) => ( // Show up to 3 courses per university
                  <div
                    key={course.id}
                    className="mb-4 cursor-pointer hover:bg-gray-100 p-2"
                    onClick={() => handleCourseClick(course)} // Clicking on the result
                  >
                    <h4 className="font-bold">{course.name}</h4>
                    <p><strong>Faculty:</strong> {course.facultyName}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

<<<<<<< HEAD
        {/* Display detailed card if a course is selected */}
=======
       
>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216
        {selectedCourse && (
          <div className="relative mx-auto  text-white p-6 rounded-lg shadow-lg w-full sm:w-[300px] mt-24">
            <h2 className="text-2xl font-semibold mb-4">{selectedCourse.name}</h2>
            <p><strong>Faculty:</strong> {selectedCourse.facultyName}</p>
            <p><strong>Minimum Points:</strong> {selectedCourse.minimum_requirements.points}</p>
            <p><strong>Required Subjects:</strong> {selectedCourse.minimum_requirements.subjects_required.join(", ")}</p>
            <p><strong>Required Level:</strong> {selectedCourse.minimum_requirements.level_required}</p>
            <p><strong>Careers:</strong> {selectedCourse.careers.join(", ")}</p>
<<<<<<< HEAD
            {/* <a  href={}></a> */}
          </div>
        )}

        {/* Mission Section */}
=======
           
          </div>
        )}

       
>>>>>>> 3f5bc636f0c7c71d5c57de4b72d77163b08ff216
        <div className=" p-8 text-center text-white w-full mt-16">
          <h1 className="text-xl mb-4">Universities</h1>
          <div className="flex justify-center gap-2 mb-4">
            <div className="items-center justify-center">
              <a href="https://ukzn.ac.za/schools/schools/">
                <img
                  src={ukzn}
                  className="transition-transform duration-500 ease-in-out hover:scale-110 h-[100px] w-[100px] sm:h-[40px] sm:w-[40px]"
                  alt="UKZN Logo"
                />
              </a>
              <h1 className="font-bold mt-2 gap-4 text-gray-300 text-sm sm:text-base"></h1>
            </div>

            <div className="items-center justify-center">
              <a href="https://www.uj.ac.za/faculties/">
                <img
                  src={uj}
                  className="transition-transform duration-500 ease-in-out hover:scale-110 h-[100px] w-[100px] sm:h-[100px] sm:w-[100px]"
                  alt="UJ Logo"
                />
              </a>
              <h1 className="font-bold mt-2  text-gray-300 text-sm sm:text-base"></h1>
            </div>

            <div className="items-center justify-center">
              <a href="https://www.wits.ac.za/">
                <img
                  src={wits}
                  className="transition-transform duration-500 ease-in-out hover:scale-110 h-[100px] w-[100px] sm:h-[100px] sm:w-[100px]"
                  alt="Wits Logo"
                />
              </a>
              <h1 className="font-bold  text-gray-300 mt-2 text-sm sm:text-base"></h1>
            </div>
          </div>
             <div className="mt-8 w-full sm:w-3/4 mx-auto">
  <h1 className="font-semibold pb-2 relative">
    Mission
    <div className=""></div> 
  </h1>

            <p className="text-white font-bold mt-4">
              We invite all students, whether in college or university, including anyone taking a gap year or those just looking to switch careers. 
              Join us in the effort to improve the quality of learning for the real world. 
              Employers will be provided with a more qualified pool with project experience, and the youth will have access to resources and tools to build new innovations for the academic sector.
            </p>
            <hr className='p-8 m-4 pb-8'/>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default Mission;

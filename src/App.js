import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Filter from "./Component/Filter";
import Cards from "./Component/Cards";
import {apiUrl, filterData} from "./data";
import Spinner from "./Component/Spinner";
import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
       let response = await fetch(apiUrl);
       let output = await response.json();
       // Output -->
        setCourses(output.data);       // printing on console
    }
    catch(error) {
        toast.error("Wifi on kr beee Chuutiyee !!!");
    }
    setLoading(false);
  }

  useEffect( ()=> {
    fetchData();
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
         <Navbar />
      </div>

      <div className="bg-bgDark2 ">

        <div>
          <Filter
           filterData={filterData} 
           category={category}
           setCategory={setCategory}
           />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            Loading ? (<Spinner />) : (<Cards courses= {courses} category={category}/>)
          }
        </div>
        
        </div>

    </div>
  );
};

export default App;

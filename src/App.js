import React from "react";
import Sidebar from "./Components/Sidebar";
import Maindash from "./Components/Maindash";
import Righthai from "./Rightside/Righthai";

function App(){
  
  return(
    <div className="flex justify-center h-full w-full items-center p-5">
         <div className="w-[95%] md:w-[98%] rounded-md flex p-2 flex-col md:flex-row bg-red-100 gap-[2rem]">
             <div className="w-full md:w-[18%]"><Sidebar/></div>
             <div className="w-full md:w-[60%]"><Maindash/></div>
             <div className="w-full md:w-[22%]"><Righthai/></div>
         </div>
    </div>
  );

};
export default App;
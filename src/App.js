import React, { useState } from "react";



import RichTextEditor from "./Components/RichTextEditor";

import "./App.css";
import Navbar from "./Components/Navbar";

const App = () => {
  
 

  const [value, setValue] = useState("");

  const getValue = (value) => {
    setValue(value);
  };
 

  return (
    <>
<Navbar/>


     <div className="row">
       <div className="col-md-6" style={{ margin: "auto", marginTop: "50px" }}>
         <div style={{ textAlign: "center" }}>
           <h3>WRITE YOUR BLOG</h3>
         </div>
         <RichTextEditor initialValue="" getValue={getValue} />
         <br />
        
         
         {/* <div>{value}</div> */}
       </div>
     </div>
    </>
  );
};

export default App;

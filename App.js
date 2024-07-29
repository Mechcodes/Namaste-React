import React from "react";
import ReactDOM from "react-dom/client";


// React Element
const title =(    
    <div>
        <h1 className="head"> 
             Namaste react using jsx
        </h1>
    </div> 
            
            
);
// React Component

const HeadingComponent = () => (
    <div>
        {/* <Heading/> If item is a React component. */}
        {title}
        <h1 className="headingComponent">
        This is Heading Component
        </h1>
    </div>   
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
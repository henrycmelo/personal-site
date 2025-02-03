import * as React from "react";


const ButtonLink = ({ children, onClick }) => {


  return (
  
        <button onClick={onClick} style={{textDecoration:'underline', cursor:'pointer', background:'none', border:'none'}}
        aria-label={typeof children === "string" ? children : "button link"}
        
        >
            {children}
        </button>

  );
};

export default ButtonLink;
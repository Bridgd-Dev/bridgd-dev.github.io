import React, { useEffect } from "react";
import './GetStarted.css';

const GetStarted = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="coming-soon">
      <h1>Coming Soon!</h1>
    </div>
  );
};

export default GetStarted;
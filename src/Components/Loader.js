import React from "react";

const Loader = () => {
  return (
    <div className="preloader">
      <img src={require(`../assets/images/loader.gif`)} />
    </div>
  );
};

export default Loader;

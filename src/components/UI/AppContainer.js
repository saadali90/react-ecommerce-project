import React from "react";
import "./AppContainer.css";

const AppContainer = (props) => {
  const containerFluid = props.width;

  return (
    <div className={`${containerFluid ? `${containerFluid}` : "container"}`}>
      <div className="row"> {props.children}</div>
    </div>
  );
};

export default AppContainer;

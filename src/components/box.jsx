import React from "react";
import Drumpads from "./drumpads";
function Box() {
  return (
    <div className="col-6 ">
      <div className="container">
        <div className="row-12 d-flex flex-row  ">
          <Drumpads data={["Q", "W", "E"]} />
        </div>

        <div className="row-12 d-flex flex-row ">
          <Drumpads data={["A", "S", "D"]} />
        </div>
        <div className="row-12 d-flex flex-row ">
          <Drumpads data={["Z", "X", "C"]} />
        </div>
      </div>
    </div>
  );
}

export default Box;

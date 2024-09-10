import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { powerOn, powerOff, changeDisplay } from "../actions";
import store from "../store";
import { useEffect } from "react";
function Display() {
  const dispatch = useDispatch();
  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState("");
  useEffect(() => {
    dispatch(powerOn());
  }, []);
  const handlePower = () => {
    setPower(!power);
    if (power) {
      dispatch(powerOff());
    } else {
      dispatch(powerOn());
    }
  };
  store.subscribe(() => {
    switch (store.getState().display) {
      case "Q":
        setDisplay("Heater-1");
        break;
      case "W":
        setDisplay("Heater-2");
        break;
      case "E":
        setDisplay("Heater-3");
        break;
      case "A":
        setDisplay("Heater-4");
        break;
      case "S":
        setDisplay("Clap");
        break;
      case "D":
        setDisplay("Kick-n-Hat");
        break;
      case "Z":
        setDisplay("Kick");
        break;
      case "X":
        setDisplay("Closed-HH");
        break;
      case "C":
        setDisplay("Open-HH");
        break;
      default:
        setDisplay("");
    }
  });
  return (
    <div className="col-6 fs-2 text-center d-flex flex-column border border-1 border-black align-items-center rounded">
      <div id="power" className="mt-1 fs-2 text-primary">
        power
      </div>
      <div className="d-flex flex-row  flex-nowrap w-25 m-3">
        <div
          onClick={handlePower}
          className={
            power
              ? "btn btn-dark w-50 rounded-0 user-select-none border border-1 border-black"
              : "btn btn-primary w-50 rounded-0 user-select-none border border-1 border-black"
          }
        >
          &nbsp;
        </div>
        <div
          onClick={handlePower}
          className={
            power
              ? "btn btn-primary rounded-0 w-50 user-select-none border border-1 border-black"
              : "btn btn-dark w-50 rounded-0 user-select-none border border-1 border-black"
          }
        >
          &nbsp;
        </div>
      </div>
      <div
        id="display"
        className=" fs-2 text-center text-white bg-primary border border-black rounded mb-4 w-75 "
      >
        {display === "" ? "\u00A0" : display}
      </div>
    </div>
  );
}

export default Display;

import React from "react";
import store from "../store";
import { changeDisplay } from "../actions";
function Drumpads(props) {
  const array = props.data;
  const handleClick = (pad) => {
    const audio = document.getElementById(pad);
    if (store.getState().power) {
      audio.play();
      store.dispatch(changeDisplay(pad));
    }
  };
  return (
    <>
      {array.map((pad) => (
        <div
          key={pad}
          onClick={() => handleClick(pad)}
          className="drum-pad btn btn-primary col-4 text-center border border-black rounded fs-2 mt-1 me-1 mb-1"
        >
          {pad}
          <audio
            className="clip"
            id={pad}
            src={`/audio/${pad.toLowerCase()}.mp3`}
          />
        </div>
      ))}
    </>
  );
}

export default Drumpads;

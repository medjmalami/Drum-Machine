export const powerOn = () => {
  return {
    type: "POWERON",
  };
};

export const powerOff = () => {
  return {
    type: "POWEROFF",
  };
};
export const changeDisplay = (payload) => {
  return {
    type: "CHANGING",
    payload,
  };
};

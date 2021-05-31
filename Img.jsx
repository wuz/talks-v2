import React from "react";

const style = {
  maxHeight: "50%"
};

const Img = ({ src }) => {
  return <img src={src} style={style} />;
};

export default Img;

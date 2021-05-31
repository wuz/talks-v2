/** @jsx createElement */
import { createElement } from "../utils";

export const Canvas = ({ children }) => {
  const canvas = <canvas />;
  const ctx = canvas.getContext("2d");
  children.forEach(child => {
    console.log(child[0](ctx));
  });
  return canvas;
};

export const FillRect = ({ x, y, h, w, color = "black" }) => {
  return ctx => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  };
};

/** @jsx createElement */

import { Canvas, FillRect } from "./functions/Canvas";
import "./styles.css";
import { createElement } from "./utils";

const Header = ({ className, children }) => {
  return <header className={className}>{children}</header>;
};

const page = (
  <div>
    <Canvas>
      <FillRect x={0} y={0} h={10} w={10} color={"red"} />
    </Canvas>
  </div>
);

const app = document.getElementById("app");
app.innerHTML = "";
app.appendChild(page);

import React, { unstable_Profiler as ReactProfiler } from "react";
const Profiled = ({ children }) => (
  <ReactProfiler id={"Profiler Identifier"} onRender={handleProfiler}>
    {children}
  </ReactProfiler>
);

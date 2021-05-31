// example Layout.js
import React from "react";
import { Box, Flex } from "rebass";

export default ({ children }) => (
  <Flex
    style={{
      width: "100vw",
      height: "100vh",
      fontSize: "16px",
      display: "relative"
    }}
    alignItems="center"
    justifyContent="center"
  >
    <Box style={{ maxWidth: "960px", width: "100%" }}>{children}</Box>
  </Flex>
);

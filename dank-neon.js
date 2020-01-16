// theme.js
import React from "react";
import { Prism } from "react-syntax-highlighter";
import dankNeon from "./dank-neon-syntax";

export const getLanguage = className => {
  const match = /language-(\w*)/.exec(className || "language-javascript");
  let lang = "javascript";
  if (match.length > 1) {
    lang = match[1];
  }
  return lang;
};

export const pre = props => props.children;

export const createCode = (opts = {}) => props => {
  const language = getLanguage(props.className);
  return <Prism {...opts} language={language} style={dankNeon} {...props} />;
};

export default {
  // add a custom font
  font: "Public Sans, sans-serif",
  monospace: "Dank Mono",
  colors: {
    text: "#EFF0F6",
    background: "#191B2A",
    link: "#FF476E"
  },
  components: {
    pre,
    code: createCode()
  }
};

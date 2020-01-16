// dank-neon-syntax

export default {
  'code[class*="language-"]': {
    color: "#eff0f6",
    background: "none",
    fontSize: "16px",
    fontFamily:
      "'Dank Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.25",
    tabSize: 4,
    hyphens: "none"
  },
  'pre[class*="language-"]': {
    color: "#eff0f6",
    background: "none",
    fontSize: "16px",
    fontFamily:
      "'Dank Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.25",
    tabSize: 4,
    hyphens: "none"
  },
  'pre[class*="language-"]::-moz-selection': {
    color: "inherit",
    background: "#4f5987",
    textShadow: "none"
  },
  'pre[class*="language-"] ::-moz-selection': {
    color: "inherit",
    background: "#4f5987",
    textShadow: "none"
  },
  'code[class*="language-"]::-moz-selection': {
    color: "inherit",
    background: "#4f5987",
    textShadow: "none"
  },
  'code[class*="language-"] ::-moz-selection': {
    color: "inherit",
    background: "#4f5987",
    textShadow: "none"
  },
  'pre[class*="language-"]::selection': {
    color: "inherit",
    background: "#4f5987",
    textShadow: "none"
  },
  'pre[class*="language-"] ::selection': {
    color: "inherit",
    background: "#4f5987",
    textShadow: "none"
  },
  'code[class*="language-"]::selection': {
    color: "inherit",
    background: "#4f5987",
    textShadow: "none"
  },
  'code[class*="language-"] ::selection': {
    color: "inherit",
    background: "#4f5987",
    textShadow: "none"
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#191b2a",
    padding: ".1em",
    borderRadius: ".3em"
  },
  comment: {
    color: "#a5abca",
    fontStyle: "italic"
  },
  prolog: {
    color: "#a5abca",
    fontStyle: "italic"
  },
  cdata: {
    color: "#a5abca",
    fontStyle: "italic"
  },
  delimiter: {
    color: "#94bfff"
  },
  boolean: {
    color: "#94bfff"
  },
  keyword: {
    color: "#94bfff"
  },
  selector: {
    color: "#94bfff"
  },
  important: {
    color: "#94bfff"
  },
  atrule: {
    color: "#94bfff"
  },
  operator: {
    color: "#eff0f6"
  },
  punctuation: {
    color: "#eff0f6"
  },
  "attr-name": {
    color: "#eff0f6"
  },
  tag: {
    color: "#ff476e"
  },
  "tag .punctuation": {
    color: "#ff476e"
  },
  doctype: {
    color: "#ff476e"
  },
  builtin: {
    color: "#ff476e"
  },
  entity: {
    color: "#6897bb"
  },
  number: {
    color: "#6897bb"
  },
  symbol: {
    color: "#6897bb"
  },
  property: {
    color: "#ffee7a"
  },
  constant: {
    color: "#ffee7a"
  },
  variable: {
    color: "#ffee7a"
  },
  string: {
    color: "#39ffba"
  },
  char: {
    color: "#6a8759"
  },
  "attr-value": {
    color: "#a5c261"
  },
  "attr-value .punctuation": {
    color: "#a5c261"
  },
  "attr-value .punctuation:first-child": {
    color: "#eff0f6"
  },
  url: {
    color: "#ffca7a"
  },
  function: {
    color: "#ff476e"
  },
  regex: {
    background: "#364135"
  },
  bold: {
    fontWeight: "bold"
  },
  italic: {
    fontStyle: "italic"
  },
  inserted: {
    background: "#294436"
  },
  deleted: {
    background: "#484a4a"
  },
  "code.language-css .token.property": {
    color: "#eff0f6"
  },
  "code.language-css .token.property + .token.punctuation": {
    color: "#eff0f6"
  },
  "code.language-css .token.id": {
    color: "#39ffba"
  },
  "code.language-css .token.selector > .token.class": {
    color: "#39ffba"
  },
  "code.language-css .token.selector > .token.attribute": {
    color: "#39ffba"
  },
  "code.language-css .token.selector > .token.pseudo-class": {
    color: "#39ffba"
  },
  "code.language-css .token.selector > .token.pseudo-element": {
    color: "#39ffba"
  }
};

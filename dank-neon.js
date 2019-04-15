// theme.js
import theme from 'mdx-deck/themes'
import {
    future
} from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import prismGo from 'react-syntax-highlighter/languages/prism/go'

export default {
  // extends the default theme
  ...theme,
  ...future,
  // add a custom font
  font: 'Public Sans, sans-serif',
  // custom colors
  colors: {
    text: '#EFF0F6',
    background: '#191B2A',
    link: '#FF476E'
  },
  prism: {
    style: okaidia,
    languages: {
        go: prismGo,}
  },
}

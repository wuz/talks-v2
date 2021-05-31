export const isElement = o =>
  typeof HTMLElement === "object"
    ? o instanceof HTMLElement //DOM2
    : o &&
      typeof o === "object" &&
      o !== null &&
      o.nodeType === 1 &&
      typeof o.nodeName === "string";

export const mapPropsToElem = elem => props => {
  Object.keys(props).map(propKey => {
    if (propKey === "className") {
      elem.classList = props[propKey];
    } else {
      elem.setAttribute(propKey, props[propKey]);
    }
  });
};

export const mapChildrenToElem = elem => children => {
  if (isElement(children)) {
    elem.appendChild(children);
  } else if (typeof children === "string") {
    const textNode = document.createTextNode(children);
    elem.appendChild(textNode);
  } else if (Array.isArray(children)) {
    children.forEach(mapChildrenToElem(elem));
  }
};

export const createElement = (element, props, ...children) => {
  if (typeof element === "string") {
    const docElem = document.createElement(element);
    if (props) mapPropsToElem(docElem)(props);
    mapChildrenToElem(docElem)(children);
    return docElem;
  } else if (typeof element === "function") {
    const docElem = element({ ...props, children });
    return docElem;
  }
};

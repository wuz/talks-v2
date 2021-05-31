const swap = (array, i, j) => {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

function bubbleSort(array) {
  if (!Array.isArray(array)) return;
  const innArr = array.slice();
  for (let i = 0; i < innArr.length; i++) {
    for (var j = 1; j < innArr.length; j++) {
      if (innArr[j - 1] > innArr[j]) {
        swap(innArr, j - 1, j);
      }
    }
  }
  return innArr;
}

const Sort = ({ children }) => bubbleSort(children);

export default Sort;

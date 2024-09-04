Array.customOf = function () {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr[i] = arguments[i];
  }
  return arr;
};

Array.customOf(1, 2, 3, 4);

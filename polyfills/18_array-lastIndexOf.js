Array.prototype.customLastIndexOf = function (
  searchElement,
  fromIndex = this.length - 1
) {
  if (fromIndex < 0) {
    fromIndex = this.length + fromIndex;
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === searchElement) {
      return i;
    }
  }

  // If element not found, return -1
  return -1;
};

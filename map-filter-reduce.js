let arr = [1, 2, 3];

const mapArr = arr.map((item) => item * 2);
console.log(mapArr);

Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i]));
  }
  return arr;
};

console.log(arr.myMap((item) => item * 2));

console.log(arr.filter((item) => item > 2));

Array.prototype.myFilter = function (cb) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      output.push(this[i]);
    }
  }
  return output;
};

console.log(arr.myFilter((item) => item > 2));


console.log(arr.reduce((a,b) => a+b, 0))

Array.prototype.myReduce = function (cb, initialVal) {
   
    let acc = initialVal!== 'undefined ' ?  initialVal :  this[0];
    for(i=0;i<this.length;i++){
        acc = cb(acc,this[i]);
    }
    return acc;
  };

  console.log(arr.myReduce((a,b) => a+b, 5))
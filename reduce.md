1. Sum of Numbers: Write a function that calculates the sum of all numbers in an array.

```
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.reduce((acc, item) => acc += item, 0))
  output = 15
```

2. **Calculate Frequency of Each Word in an Array**

```
const words = ['hello', 'world', 'hello', 'coding'];

let freq = words.reduce((acc, item) => {
  if(acc[item]){
    acc[item]++
  }else{
    acc[item] = 1
  }
  return acc;
}, {})

console.log(freq)
 Output : {
  "hello": 2,
  "world": 1,
  "coding": 1
}


```

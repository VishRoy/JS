1. **Sum of Numbers: Write a function that calculates the sum of all numbers in an array.**

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
Output : { "hello": 2, "world": 1, "coding": 1}

```

3. **Transform Key-Value Pairs into an Object : Convert an array of key-value pairs into an object. **

```
const pairs = [['name', 'Alice'], ['age', 25], ['city', 'Wonderland']];

const pairObj = pairs.reduce((acc, item) => {
  acc[item[0]] = item[1];
  return acc;
}, {})

console.log(pairObj) 
Output: { name: 'Alice', age: 25, city: 'Wonderland' }

```

### **Basics of Reduce**
1. **Sum of Numbers**:  
   Write a function that calculates the sum of all numbers in an array.  
   ```js
   const numbers = [1, 2, 3, 4, 5];
   ```

2. **Product of Numbers**:  
   Write a function that calculates the product of all numbers in an array.  
   ```js
   const numbers = [1, 2, 3, 4];
   ```

3. **Count Occurrences of a Value**:  
   Write a function that counts how many times a specific value appears in an array.  
   ```js
   const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
   ```

4. **Find Maximum Value**:  
   Write a function to find the maximum value in an array.  
   ```js
   const numbers = [3, 5, 7, 2, 8];
   ```

5. **Find Minimum Value**:  
   Write a function to find the minimum value in an array.  
   ```js
   const numbers = [4, 2, 9, 7, 1];
   ```

---

### **Advanced Array Transformations**
6. **Group By Key**:  
   Group an array of objects by a key.  
   ```js
   const items = [
       { category: 'fruit', name: 'apple' },
       { category: 'fruit', name: 'banana' },
       { category: 'vegetable', name: 'carrot' },
   ];
   ```

7. **Flatten a Nested Array**:  
   Write a function to flatten a 2D array into a 1D array.  
   ```js
   const nestedArray = [[1, 2], [3, 4], [5]];
   ```
  


8. **Calculate Frequency of Words**:  
   Count the frequency of each word in an array.  
   ```js
   const words = ['hello', 'world', 'hello', 'coding'];
   ```

9. **Transform Key-Value Pairs into an Object**:  
   Convert an array of key-value pairs into an object.  
   ```js
   const pairs = [['name', 'Alice'], ['age', 25], ['city', 'Wonderland']];
   ```

10. **Reverse a String**:  
    Reverse a string using `reduce`.  
    ```js
    const str = 'javascript';
    ```

---

### **More Complex Challenges**
11. **Sum of Even Numbers**:  
    Find the sum of all even numbers in an array.  
    ```js
    const numbers = [1, 2, 3, 4, 5, 6];
    ```

12. **Remove Duplicates**:  
    Remove duplicate values from an array.  
    ```js
    const array = [1, 2, 3, 2, 4, 3, 5];
    ```

13. **Concatenate Strings**:  
    Concatenate all strings in an array with a space between them.  
    ```js
    const strings = ['reduce', 'is', 'awesome'];
    ```

14. **Find Longest Word**:  
    Find the longest word in an array of strings.  
    ```js
    const words = ['reduce', 'method', 'is', 'powerful'];
    ```

15. **Partition Array into Even and Odd Numbers**:  
    Split an array into two subarrays: even numbers and odd numbers.  
    ```js
    const numbers = [1, 2, 3, 4, 5, 6];
    ```

---

### **Real-Life Scenarios**
16. **Calculate Total Price of Items**:  
    Calculate the total price of items in a shopping cart.  
    ```js
    const cart = [
        { item: 'apple', price: 2, quantity: 3 },
        { item: 'banana', price: 1, quantity: 5 },
        { item: 'milk', price: 4, quantity: 2 },
    ];
    ```

17. **Merge Multiple Objects**:  
    Merge an array of objects into a single object.  
    ```js
    const objects = [{ a: 1 }, { b: 2 }, { c: 3 }];
    ```

18. **Calculate Average of Numbers**:  
    Find the average of all numbers in an array.  
    ```js
    const numbers = [10, 20, 30, 40];
    ```

19. **Filter Out Falsy Values**:  
    Filter out falsy values (`false`, `0`, `null`, `undefined`, `NaN`, and `''`) from an array.  
    ```js
    const array = [0, 1, false, 2, '', 3, null, 4];
    ```

20. **Convert Array of Objects into a Lookup Table**:  
    Create a lookup table (object) where keys are one property of the object, and values are another property.  
    ```js
    const data = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
    ];
    ```

https://www.freecodecamp.org/news/javascript-slice-and-splice-how-to-use-the-slice-and-splice-js-array-methods/

### **Quizzes on `slice`**
1. **Basic Usage**:  
   ```javascript
   const arr = [1, 2, 3, 4, 5];
   console.log(arr.slice(1, 3));
   Output : [2,3]
   ```

2. **Negative Indexing**:  
   ```javascript
   const arr = ['a', 'b', 'c', 'd'];
   console.log(arr.slice(-3, -1));
   Output : ['b','c']
   ```

3. **No Second Parameter**:  
   ```javascript
   const arr = [10, 20, 30, 40, 50];
   console.log(arr.slice(2));
   Output : [30,40,50]
   ```

4. **Empty Slice**:  
   ```javascript
   const arr = ['x', 'y', 'z'];
   console.log(arr.slice(1, 1));
   // What is the output?
   ```

5. **Original Array Unchanged**:  
   ```javascript
   const arr = [1, 2, 3];
   arr.slice(1, 2);
   console.log(arr);
   // What is the output?
   ```

6. **String Slice**:  
   ```javascript
   const str = "HelloWorld";
   console.log(str.slice(0, 5));
   // What is the output?
   ```

7. **Slice Beyond Bounds**:  
   ```javascript
   const arr = [1, 2, 3];
   console.log(arr.slice(1, 10));
   // What is the output?
   ```

8. **Negative and Positive Index Combination**:  
   ```javascript
   const arr = [1, 2, 3, 4, 5];
   console.log(arr.slice(-3, 4));
   // What is the output?
   ```

9. **Array-Like Objects**:  
   ```javascript
   const obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
   console.log(Array.prototype.slice.call(obj, 1));
   // What is the output?
   ```

10. **Immutable Behavior**:  
    ```javascript
    const arr = ['a', 'b', 'c', 'd'];
    const newArr = arr.slice(1, 3);
    newArr[0] = 'z';
    console.log(arr);
    // What is the output?
    ```

11. **Nested Arrays**:  
    ```javascript
    const arr = [[1, 2], [3, 4]];
    const newArr = arr.slice(1);
    newArr[0][0] = 5;
    console.log(arr);
    // What is the output?
    ```

12. **Shallow Copy**:  
    ```javascript
    const arr = [1, 2, 3];
    const copy = arr.slice();
    console.log(copy === arr);
    // What is the output?
    ```

13. **Slice from Object Array**:  
    ```javascript
    const arr = [{ a: 1 }, { b: 2 }];
    const sliced = arr.slice(0, 1);
    sliced[0].a = 99;
    console.log(arr[0]);
    // What is the output?
    ```

14. **Combination with `.length`**:  
    ```javascript
    const arr = [10, 20, 30];
    console.log(arr.slice(0, arr.length - 1));
    // What is the output?
    ```

15. **Empty Array**:  
    ```javascript
    const arr = [];
    console.log(arr.slice(0, 2));
    // What is the output?
    ```

16. **Nested Structures**:  
    ```javascript
    const arr = [[1], [2, 3], [4]];
    console.log(arr.slice(0, 2));
    // What is the output?
    ```

17. **Slice with Undefined Arguments**:  
    ```javascript
    const arr = [1, 2, 3, 4];
    console.log(arr.slice(undefined, 2));
    // What is the output?
    ```

18. **Single Argument**:  
    ```javascript
    const arr = ['x', 'y', 'z'];
    console.log(arr.slice(-1));
    // What is the output?
    ```

19. **Multidimensional Array**:  
    ```javascript
    const arr = [[1, 2], [3, 4], [5, 6]];
    console.log(arr.slice(1, 3));
    // What is the output?
    ```

20. **Slice Over Stringified Array**:  
    ```javascript
    const arr = JSON.stringify([10, 20, 30]);
    console.log(arr.slice(1, 4));
    // What is the output?
    ```

---

### **Quizzes on `splice`**
1. **Basic Splice**:  
   ```javascript
   const arr = [1, 2, 3, 4];
   arr.splice(1, 2);
   console.log(arr);
   // What is the output?
   ```

2. **Extracted Elements**:  
   ```javascript
   const arr = [5, 10, 15];
   const removed = arr.splice(1, 1);
   console.log(removed);
   // What is the output?
   ```

3. **Adding Elements**:  
   ```javascript
   const arr = [1, 2, 4];
   arr.splice(2, 0, 3);
   console.log(arr);
   // What is the output?
   ```

4. **Replacing Elements**:  
   ```javascript
   const arr = ['a', 'b', 'd'];
   arr.splice(2, 1, 'c');
   console.log(arr);
   // What is the output?
   ```

5. **Negative Index**:  
   ```javascript
   const arr = [1, 2, 3];
   arr.splice(-1, 1);
   console.log(arr);
   // What is the output?
   ```

6. **Remove All Elements**:  
   ```javascript
   const arr = [10, 20, 30];
   arr.splice(0, arr.length);
   console.log(arr);
   // What is the output?
   ```

7. **Mixed Operations**:  
   ```javascript
   const arr = [1, 2, 3, 4];
   arr.splice(1, 2, 5, 6);
   console.log(arr);
   // What is the output?
   ```

8. **No Elements Removed**:  
   ```javascript
   const arr = ['x', 'y', 'z'];
   arr.splice(1, 0, 'a');
   console.log(arr);
   // What is the output?
   ```

9. **Empty Array Behavior**:  
   ```javascript
   const arr = [];
   arr.splice(0, 1, 'a');
   console.log(arr);
   // What is the output?
   ```

10. **Remove Elements Beyond Bounds**:  
    ```javascript
    const arr = [1, 2, 3];
    arr.splice(2, 10);
    console.log(arr);
    // What is the output?
    ```

11. **Return Value**:  
    ```javascript
    const arr = ['a', 'b', 'c'];
    const result = arr.splice(1, 1);
    console.log(result);
    // What is the output?
    ```

12. **Replace with Multiple Elements**:  
    ```javascript
    const arr = [1, 2, 3];
    arr.splice(1, 1, 'a', 'b', 'c');
    console.log(arr);
    // What is the output?
    ```

13. **Change Original Array**:  
    ```javascript
    const arr = [1, 2, 3];
    arr.splice(0, 2);
    console.log(arr);
    // What is the output?
    ```

14. **Combination with `.length`**:  
    ```javascript
    const arr = [10, 20, 30];
    arr.splice(arr.length - 1, 1);
    console.log(arr);
    // What is the output?
    ```

15. **Adding Elements at End**:  
    ```javascript
    const arr = ['a', 'b', 'c'];
    arr.splice(arr.length, 0, 'd');
    console.log(arr);
    // What is the output?
    ```

16. **Use Inside Loop**:  
    ```javascript
    const arr = [1, 2, 3, 4];
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 1);
    }
    console.log(arr);
    // What is the output?
    ```

17. **Multiple Additions**:  
    ```javascript
    const arr = [10, 20];
    arr.splice(1, 0, 15, 17);
    console.log(arr);
    // What is the output?
    ```

18. **Insert at Negative Index**:  
    ```javascript
    const arr = [1, 2, 3];
    arr.splice(-2, 0, 'x');
    console.log(arr);
    // What is the output?
    ```

19. **Multidimensional Array**:  
    ```javascript
    const arr = [[1], [2], [3]];
    arr.splice(1, 1, [4, 5]);
    console.log(arr);
    // What is the output?
    ```

20. **No Parameters**:  
    ```
    const arr = ['a', 'b', 'c'];
    arr.splice();
    console.log(arr);
    // What is the output?
    ```

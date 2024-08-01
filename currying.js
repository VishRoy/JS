// Implement a currying function for 4 arguments. When we have reached the limit, return the value.

// Example : sum(1,2,3,4) or sum(1)(2)(3)(4)

const sum = (...args) => {
    const store = [...args]
    if(store.length === 4){
        return store.reduce((acc,curr) => acc+curr , 0)
    }
    else {
        const temp = function(...args2){
            store.push(...args2)
            if(store.length === 4){
                return store.reduce((acc,curr) => acc+curr , 0)
            }
            else 
            return temp
        }
        return temp
    }
}

console.log(sum(1,2,3,4))
console.log(sum(1)(2)(3)(4))
console.log(sum(1,2)(3,4))
console.log(sum(1)(2,3,4))


// Implement a currying function which will return the value when invoked with empty arguments

const sum2 = (...args) => {
    const store = [...args]
    if(store.length === 0) return 0;
    else {
        const temp = function(...args2){
            store.push(...args2)
            if(args2.length === 0){
                return store.reduce((a,b) => a+b,0)
            }else {
                return temp
            }
        }
        return temp;
    }
}

console.log(sum2(1,2,3,4)())
console.log(sum2(1)(2)(3)(4)())
console.log(sum2(1,2)(3,4)())
console.log(sum2(1)(2,3,4)())


// Create a javascript function that will remember its previously passed values and return the sum of the current and previous value.
// add(5); // 5
// add(3); // 8
// add(4); // 12
// add(0); // 12


const curry = () => {
    let sum = 0;
    return function(num = 0){
        sum += num
        return sum;
    }
}

const add1 = curry();
console.log(add1(5))
console.log(add1(3))


// Write a function that satisfies the following.
// add(1)(2).value() = 3;
// add(1, 2)(3).value() = 6;
// add(1)(2)(3).value() = 6;
// add(1)(2) + 3 = 6;

function add(...current){
    let sum = current;
    function resultFn(...rest){
        sum = [...sum, ...rest]
        return resultFn
    }

    resultFn.valueOf = function(){
        return sum.reduce((a,b) => a+b , 0)
    }
    
    resultFn.value = resultFn.valueOf
    return resultFn;
}

console.log(add(1)(2).value());


// Implememt currySum(1)(2)(3)(4)..(n)() 

const currySum = (...args) => {
    const store = [...args];
    if(store.length === 0) return 0;
    else {
        const temp = function(...args2){
            store.push(...args2)
            if(args2.length === 0){
                return store.reduce((a,b) => a + b ,0)
            }else {
                return temp;
            }
        }
        return temp;
    }
}

console.log(currySum(1)(2)(3)(4)(5)())
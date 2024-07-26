// Object Cloning - Shallow and Deep

let obj1 = {name: 'Vishakha', city: 'Bangalore'};

// Shallow Copy

let obj2 = obj1;

let obj3 = Object.assign({}, obj1)

let obj4 = {...obj1} // as it doesn't create a deep copy of nested objects

// Deep Copy

let obj5 = JSON.parse(JSON.stringify(obj1)) // However, this is not recommended as it doesn't work for functions and dates

// 2nd way to create a deep copy is creating a recursive function

const parent = {
    source: function () {
      return 'parent';
    },
    type: 'obj',
    hello: {
      world: 'Hello World',
      state: 'Hello',
    },
};

const child = _deepClone(parent);
child.type = 'new obj';
child.hello.state = 'Hello State';
console.log('Parent', parent);
console.log('Child', child);

function _deepClone(obj){
    if(typeof obj !== 'object' || obj === null){
        return obj;
    }

    let newObj = Array.isArray(obj) ? [] : {}
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            newObj[key] = _deepClone(obj[key])
        }else {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}
function stringify(data){
    if(typeof data === 'number'){
        return String(data)
    }
    
    if(typeof data === 'boolean'){
      return String(data)
    }
    
   if(Array.isArray(data)){
     const elements = data.map(item => JSON.stringify(item)).join(',');
     return `[${elements}]`;
   }
  
  if(typeof data == 'string'){
    return `"${data.replace(/"/g, '\\"')}"`;
  }
  
  if(data.constructor === Object){
    const keys = Object.keys(data);
            const properties = keys.map(key => { 
            const keyStr = stringify(key); 
            const valueStr = stringify(data[key]);
            return `${keyStr}:${valueStr}`;
            }).join(',');
            return `{${properties}}`;
      }
  return data;
}



console.log('Number', stringify([1,2,3]), JSON.stringify([1,2,3]))
const obj = {name: 'V', age: 20}
console.log('Boolean', typeof true, stringify(false), JSON.stringify(null), JSON.stringify(NaN), JSON.stringify(obj), stringify(obj))

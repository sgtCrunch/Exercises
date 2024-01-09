// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    return keys.reduce((obj, val, idx) => {
        if(vals[idx] === undefined){
          obj[keys[idx]] = null; 
        }else{
          obj[keys[idx]] = vals[idx];
        }
        
        return obj;
    }, {});
}

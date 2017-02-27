module.exports = function flatten(array) { 
    let result = [];
    
    if (!array || !Array.isArray(array))
        return [];
    
    for (let key in array) 
        if (array[key] instanceof Array)
            Array.prototype.push.apply(result, flatten(array[key]));
        else
            result.push(array[key]);
    
    return result;
   
    
    // Another way:
    /*if (!array || !Array.isArray(array))
        return [];
    return array.reduce(function(previous, current) {
        if (Array.isArray(current))
            return previous.concat(flatten(current));
        return previous.concat(current);
    }, []);*/
}

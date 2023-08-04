function filterUniqueObjectsByProperty(propertyName) {
    const argArray = []
    return function(value, index, array) {
        if (typeof value !== "object") {
            throw new Error("Array contains non-objects")
        }
        if (value === null 
            || !value.hasOwnProperty(propertyName)
            || argArray.includes(value[propertyName])) {
            return false;
        }
        for (let i = index + 1; i < array.length; i++) {
            if (typeof array[i] !== "object" || array[i] === null) {
                continue;
            }
            if (array[i].hasOwnProperty(propertyName)
            && value[propertyName] === array[i][propertyName]) {
                argArray.push(value[propertyName])
                return false;
            }
        }
        return true;
    }
}
const customFilterUnique = (array, callback) => {
    if (!Array.isArray(array)) {
        throw new Error("Invalid array");
    }
    if (typeof callback !== "function") {
        throw new Error("Invalid function");
    }
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i])
        }
    }
    return result;
}

export {customFilterUnique, filterUniqueObjectsByProperty};
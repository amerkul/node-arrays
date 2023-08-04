const getArrayIntersection = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error("Invalid arguments");
    }
    const firstArray = arr1.length < arr2.length ? [...arr1] : [...arr2];
    const secondArray = arr1.length > arr2.length 
    ? JSON.parse(JSON.stringify(arr1)) 
    : JSON.parse(JSON.stringify(arr2));
    const result = [];
    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) {
                result.push(firstArray[i]);
                secondArray.splice(j, 1);
                break;
            }
        }
    }
    return result;
};

const getArrayUnion = (firstArray, secondArray) => {
    if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
        throw new Error("Invalid arguments");
    }
    const result = [];
    for (let item of firstArray) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    for (let item of secondArray) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
};

export {getArrayIntersection, getArrayUnion};
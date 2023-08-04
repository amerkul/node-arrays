const divideArrayOnBlocks = (array, blockSize) => {
    const parts = array.length % blockSize === 0 
    ? array.length / blockSize
    : ~~(array.length / blockSize) + 1
    const result = [];
    result.length = parts;
    let offset = 0;
    for(let i = 0; i < parts; i++) {
        result[i] = array.slice(offset, offset + blockSize);
        offset += blockSize;
    } 
    return result;
};

export {divideArrayOnBlocks};
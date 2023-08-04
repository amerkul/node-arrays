const customShuffle = (array) => {
    let result = [];
    const copy = JSON.parse(JSON.stringify(array));
    result.length = copy.length;
    let i = 0;
    while (copy.length !== 0) {
        let random = Math.floor(Math.random() * copy.length);
        result[i] = copy[random];
        copy.splice(random, 1);
        i++;
    }
    return result;
}

export {customShuffle};
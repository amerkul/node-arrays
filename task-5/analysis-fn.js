const measureArrayPerformance = (fn, ...fnArg) => {
    const start = Date.now();
    console.log(fn(...fnArg));
    const end = Date.now();
    console.log(`Execution time: ${end - start} ms`);
};

export {measureArrayPerformance};
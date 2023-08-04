import { customFilterUnique, filterUniqueObjectsByProperty } from "./task-1/advanced-filter.js";
import { divideArrayOnBlocks } from "./task-2/array-chunking.js";
import { customShuffle } from "./task-3/array-shuffling.js";
import { getArrayIntersection, getArrayUnion } from "./task-4/intersection-union-fn.js";
import { measureArrayPerformance } from "./task-5/analysis-fn.js";

const users = [
    {
        name: "Anna"
    },
    {
        name: "Akaki"
    },
    {
        name: "Anna"
    },
    {
        name: "Siarhei"
    },
    null,
    null, 
    {},
    {
        email: "anna.merkul...."
    },
];

console.log(customFilterUnique(users, filterUniqueObjectsByProperty("email")));

console.log(divideArrayOnBlocks([1,2,3,4,5,6,7,8,9,10], 3));

const array = [1,2,2,4,5,6,6,8,9,10];
const array2 = [1,1,1,3,3,3,2,2,5,6,6,7,78,100];

console.log(customShuffle(array));
console.log(array);

console.log(getArrayIntersection(array, array2));
console.log(array2);

console.log(getArrayUnion(array, array2));

measureArrayPerformance(customFilterUnique, users, filterUniqueObjectsByProperty("name"));
const start = Date.now();
console.log(users.filter(filterUniqueObjectsByProperty("name")));
const end = Date.now();
measureArrayPerformance(divideArrayOnBlocks, [1,2,3,4,5,6,7,8,9,10], 3);
measureArrayPerformance(customShuffle, array);
measureArrayPerformance(getArrayUnion, array, array2);
measureArrayPerformance(getArrayIntersection, array, array2);



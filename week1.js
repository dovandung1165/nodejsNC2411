const students = [
    {
        name: 'Nam',
        age: 24,
        gender: 'male',
    },
    {
        name: 'Mai',
        age: 22,
        gender: 'female',
    },
    {
        name: 'Trang',
        age: 23,
        gender: 'female',
    },
    {
        name: 'An',
        age: 20,
        gender: 'male',
    },
    {
        name: 'Thien',
        age: 27,
        gender: 'male',
    },
];

// Using ES6, count the number of male students and female students and output the results with console.log.

// const resultMale = students.filter(student => {
//     return student.gender == "male";
// })
// const resultFemale = students.filter(student => {
//     return student.gender == "female";
// })

// console.log(`Male: ${resultMale.length}`);
// console.log(`Female: ${resultFemale.length}`);


function resultG(ObjectArray, property) {
    return ObjectArray.reduce((acc, student) => {
        let key = student[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(student);
        // acc = acc[key] ? acc[key].push(student) : [];
        // Count = (curentCountByType || 0) + 1;
        return acc;
    }, {})
}


const result = students.length;

const male = resultG(students, "gender")["male"].length;
const female = resultG(students, "gender")["female"].length;
const total = male + female;

console.log(`Male: ${male}`);
console.log(`Female: ${female}`);
console.log(`Total: ${total}`);


// Using ES6, convert the students array to new array with just the names.
// Expected: ['Nam', 'Mai', 'Trang', 'An', 'Thien' ]

const arr = ['Nam', 'Mai', 'Trang', 'An', 'Thien'];
const arr1 = arr.map(name => name);
console.log(arr1);
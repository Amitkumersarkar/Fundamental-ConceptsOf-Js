const numbers = [80, 60, 70, 50];
const student = {
    name: 'Salman Khan',
    age: 55,
    movies: ['ek tha tiger', 'wanted'],
};
// create an template string

const about = `my name is ${student.name} 
age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

// arrow function

const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
// multi parameter arrow function 
const addThree = (x, y, z) => x + y + z;

// multi line arrow function

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator 
const newNumbers = numbers;
numbers.push(99);
console.log(newNumbers);
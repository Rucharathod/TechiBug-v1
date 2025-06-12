export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  content: {
    theory: string;
    examples: string[];
    practicalExercise: string;
    bestPractices: string[];
    miniProject: string;
  };
  quiz: QuizQuestion[];
  videoUrl?: string;
  cheatSheetSection: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  totalWeeks: number;
  stages: RoadmapStage[];
}

export interface RoadmapStage {
  id: string;
  title: string;
  week: number;
  description: string;
  lessons: string[];
  projects: string[];
  skills: string[];
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  platform: 'YouTube' | 'LinkedIn' | 'GitHub' | 'Twitter' | 'Stack Overflow';
  profileUrl: string;
  expertise: string[];
  followers: string;
  description: string;
  avatar: string;
}

export interface CodingGame {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  skills: string[];
  instructions: string;
  starterCode: string;
  solution: string;
  hints: string[];
}

// JavaScript Complete Curriculum
export const javascriptLessons: Lesson[] = [
  {
    id: 'js-001',
    title: 'Introduction to JavaScript',
    description: 'Learn what JavaScript is, its history, and why it\'s essential for web development',
    duration: '45 minutes',
    difficulty: 'Beginner',
    content: {
      theory: `
        JavaScript is a high-level, interpreted programming language that was originally created to make web pages interactive. Today, it's one of the most popular programming languages in the world, used for:

        • Frontend web development (making websites interactive)
        • Backend development (Node.js servers)
        • Mobile app development (React Native, Ionic)
        • Desktop applications (Electron)
        • Game development
        • IoT and embedded systems

        JavaScript was created by Brendan Eich in 1995 in just 10 days! Despite its rapid creation, it has evolved into a powerful, versatile language that powers the modern web.

        Key characteristics of JavaScript:
        • Dynamic typing - variables can hold different types of data
        • Interpreted language - no compilation step needed
        • Event-driven - responds to user interactions
        • Prototype-based object orientation
        • First-class functions - functions can be assigned to variables
      `,
      examples: [
        `// Your first JavaScript program
console.log("Hello, World!");

// Variables in JavaScript
let message = "Welcome to JavaScript!";
const year = 2024;
var isLearning = true;

console.log(message);
console.log("Current year:", year);
console.log("Am I learning?", isLearning);`,

        `// JavaScript can run in the browser
alert("This is a browser alert!");

// Or manipulate web page elements
document.getElementById("demo").innerHTML = "JavaScript changed this text!";

// Handle user interactions
function greetUser() {
    let name = prompt("What's your name?");
    alert("Hello, " + name + "!");
}`
      ],
      practicalExercise: `
        Create your first JavaScript program:
        1. Open your browser's developer console (F12)
        2. Type: console.log("My first JavaScript program!");
        3. Create variables for your name, age, and favorite color
        4. Use console.log to display them in a sentence
        5. Try using an alert() to show a welcome message
      `,
      bestPractices: [
        'Use meaningful variable names (userName instead of u)',
        'Add comments to explain complex code',
        'Use console.log() for debugging',
        'Keep your code organized and indented properly',
        'Test your code frequently as you write it'
      ],
      miniProject: 'Create a personal introduction program that asks for the user\'s name, age, and hobby, then displays a personalized welcome message using alert() and console.log()'
    },
    quiz: [
      {
        id: 'q1',
        question: 'Who created JavaScript and in what year?',
        options: ['Brendan Eich, 1995', 'Tim Berners-Lee, 1991', 'James Gosling, 1995', 'Guido van Rossum, 1991'],
        correctAnswer: 0,
        explanation: 'JavaScript was created by Brendan Eich in 1995 while he was working at Netscape.'
      },
      {
        id: 'q2',
        question: 'Which of the following is NOT a characteristic of JavaScript?',
        options: ['Dynamic typing', 'Compiled language', 'Event-driven', 'Interpreted language'],
        correctAnswer: 1,
        explanation: 'JavaScript is an interpreted language, not a compiled language. It runs directly in the browser or Node.js runtime.'
      },
      {
        id: 'q3',
        question: 'What does console.log() do?',
        options: ['Creates a popup alert', 'Prints output to the browser console', 'Saves data to a file', 'Sends data to a server'],
        correctAnswer: 1,
        explanation: 'console.log() prints output to the browser\'s developer console, which is useful for debugging and testing.'
      },
      {
        id: 'q4',
        question: 'Which keyword is used to declare a constant variable in JavaScript?',
        options: ['var', 'let', 'const', 'final'],
        correctAnswer: 2,
        explanation: 'The const keyword is used to declare constants - variables that cannot be reassigned after declaration.'
      },
      {
        id: 'q5',
        question: 'JavaScript can be used for which of the following?',
        options: ['Only frontend web development', 'Only backend development', 'Frontend, backend, mobile, and desktop development', 'Only mobile app development'],
        correctAnswer: 2,
        explanation: 'JavaScript is incredibly versatile and can be used for frontend web development, backend (Node.js), mobile apps (React Native), desktop apps (Electron), and more.'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
    cheatSheetSection: [
      '// Basic syntax',
      'console.log("Hello World");',
      'alert("Message");',
      'let variable = value;',
      'const constant = value;'
    ]
  },
  {
    id: 'js-002',
    title: 'Variables and Data Types',
    description: 'Master JavaScript variables, data types, and type conversion',
    duration: '60 minutes',
    difficulty: 'Beginner',
    content: {
      theory: `
        Variables are containers that store data values. In JavaScript, you can declare variables using three keywords:

        • let - for variables that can be reassigned (block-scoped)
        • const - for constants that cannot be reassigned (block-scoped)
        • var - older way to declare variables (function-scoped, avoid in modern code)

        JavaScript has several data types:

        Primitive Types:
        • Number - integers and floating-point numbers
        • String - text data enclosed in quotes
        • Boolean - true or false values
        • Undefined - variable declared but not assigned
        • Null - intentional absence of value
        • Symbol - unique identifier (ES6+)
        • BigInt - large integers (ES2020+)

        Non-Primitive Types:
        • Object - collections of key-value pairs
        • Array - ordered lists of values
        • Function - reusable blocks of code

        JavaScript is dynamically typed, meaning variables can hold different types of data during execution.
      `,
      examples: [
        `// Variable declarations
let userName = "Alice";
const PI = 3.14159;
var age = 25; // avoid using var

// Data types
let number = 42;
let decimal = 3.14;
let text = "Hello World";
let isActive = true;
let nothing = null;
let notDefined;

console.log(typeof number);    // "number"
console.log(typeof text);      // "string"
console.log(typeof isActive);  // "boolean"
console.log(typeof nothing);   // "object" (this is a known quirk)
console.log(typeof notDefined); // "undefined"`,

        `// Type conversion
let stringNumber = "123";
let actualNumber = Number(stringNumber);
let backToString = String(actualNumber);

console.log(stringNumber + 1);  // "1231" (string concatenation)
console.log(actualNumber + 1);  // 124 (numeric addition)

// Automatic type conversion (coercion)
console.log("5" * 2);    // 10 (string converted to number)
console.log("5" + 2);    // "52" (number converted to string)
console.log(true + 1);   // 2 (boolean converted to number)`
      ],
      practicalExercise: `
        Practice with variables and data types:
        1. Create variables for your personal information (name, age, city, isStudent)
        2. Use different data types for each variable
        3. Practice type conversion between strings and numbers
        4. Use typeof operator to check data types
        5. Experiment with automatic type conversion
      `,
      bestPractices: [
        'Use const by default, let when you need to reassign',
        'Avoid var in modern JavaScript',
        'Use descriptive variable names',
        'Be aware of automatic type conversion',
        'Use strict equality (===) instead of loose equality (==)'
      ],
      miniProject: 'Create a simple calculator that takes two string inputs, converts them to numbers, performs basic operations, and displays results with proper type checking'
    },
    quiz: [
      {
        id: 'q1',
        question: 'Which keyword should you use for a variable that will never change?',
        options: ['var', 'let', 'const', 'final'],
        correctAnswer: 2,
        explanation: 'Use const for variables that will never be reassigned. This makes your code more predictable and prevents accidental changes.'
      },
      {
        id: 'q2',
        question: 'What is the result of typeof null in JavaScript?',
        options: ['"null"', '"undefined"', '"object"', '"boolean"'],
        correctAnswer: 2,
        explanation: 'This is a famous JavaScript quirk. typeof null returns "object", which is considered a bug that has been kept for backward compatibility.'
      },
      {
        id: 'q3',
        question: 'What does "5" + 2 equal in JavaScript?',
        options: ['7', '"52"', '52', 'Error'],
        correctAnswer: 1,
        explanation: 'When using + with a string and number, JavaScript converts the number to a string and concatenates them, resulting in "52".'
      },
      {
        id: 'q4',
        question: 'Which of these is NOT a primitive data type in JavaScript?',
        options: ['String', 'Number', 'Array', 'Boolean'],
        correctAnswer: 2,
        explanation: 'Array is not a primitive data type. It\'s actually a special type of object in JavaScript.'
      },
      {
        id: 'q5',
        question: 'What happens when you declare a variable with let but don\'t assign a value?',
        options: ['Error occurs', 'Variable equals null', 'Variable equals undefined', 'Variable equals 0'],
        correctAnswer: 2,
        explanation: 'When you declare a variable without assigning a value, it automatically gets the value undefined.'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/9emXNzqCKyg',
    cheatSheetSection: [
      '// Variable declarations',
      'let variable = value;',
      'const CONSTANT = value;',
      '',
      '// Data types',
      'typeof variable;',
      'Number(string);',
      'String(number);',
      'Boolean(value);'
    ]
  },
  {
    id: 'js-003',
    title: 'Operators and Expressions',
    description: 'Learn arithmetic, comparison, logical, and assignment operators',
    duration: '50 minutes',
    difficulty: 'Beginner',
    content: {
      theory: `
        Operators are symbols that perform operations on operands (values or variables). JavaScript has several types of operators:

        Arithmetic Operators:
        • + (addition)
        • - (subtraction)
        • * (multiplication)
        • / (division)
        • % (modulus/remainder)
        • ** (exponentiation)
        • ++ (increment)
        • -- (decrement)

        Assignment Operators:
        • = (assignment)
        • += (add and assign)
        • -= (subtract and assign)
        • *= (multiply and assign)
        • /= (divide and assign)

        Comparison Operators:
        • == (loose equality)
        • === (strict equality)
        • != (loose inequality)
        • !== (strict inequality)
        • < (less than)
        • > (greater than)
        • <= (less than or equal)
        • >= (greater than or equal)

        Logical Operators:
        • && (AND)
        • || (OR)
        • ! (NOT)

        Understanding operator precedence is crucial for writing correct expressions.
      `,
      examples: [
        `// Arithmetic operators
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1 (remainder)
console.log(a ** b); // 1000 (10 to the power of 3)

// Increment and decrement
let counter = 5;
console.log(counter++); // 5 (post-increment)
console.log(counter);   // 6
console.log(++counter); // 7 (pre-increment)`,

        `// Comparison operators
console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict equality)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// Logical operators
let age = 25;
let hasLicense = true;

console.log(age >= 18 && hasLicense); // true
console.log(age < 18 || hasLicense);  // true
console.log(!hasLicense);             // false

// Assignment operators
let score = 100;
score += 10;  // score = score + 10
score *= 2;   // score = score * 2
console.log(score); // 220`
      ],
      practicalExercise: `
        Practice with operators:
        1. Create a simple calculator using arithmetic operators
        2. Compare different values using comparison operators
        3. Practice with logical operators for decision making
        4. Use assignment operators to modify variables
        5. Experiment with operator precedence
      `,
      bestPractices: [
        'Use === instead of == for comparisons',
        'Use parentheses to make operator precedence clear',
        'Be careful with automatic type conversion',
        'Use meaningful variable names in expressions',
        'Break complex expressions into smaller parts'
      ],
      miniProject: 'Build a grade calculator that takes test scores, calculates average, and determines letter grade using comparison and logical operators'
    },
    quiz: [
      {
        id: 'q1',
        question: 'What is the result of 10 % 3 in JavaScript?',
        options: ['3', '1', '0', '3.33'],
        correctAnswer: 1,
        explanation: 'The modulus operator (%) returns the remainder of division. 10 divided by 3 is 3 with remainder 1.'
      },
      {
        id: 'q2',
        question: 'What is the difference between == and === in JavaScript?',
        options: ['No difference', '== checks type, === doesn\'t', '=== checks type and value, == only checks value', '=== is faster'],
        correctAnswer: 2,
        explanation: '=== (strict equality) checks both type and value, while == (loose equality) performs type conversion before comparison.'
      },
      {
        id: 'q3',
        question: 'What does the expression true && false || true evaluate to?',
        options: ['true', 'false', 'undefined', 'Error'],
        correctAnswer: 0,
        explanation: 'Due to operator precedence, this evaluates as (true && false) || true, which is false || true, resulting in true.'
      },
      {
        id: 'q4',
        question: 'If x = 5, what is the value of x++ + ++x?',
        options: ['10', '11', '12', '13'],
        correctAnswer: 2,
        explanation: 'x++ returns 5 then increments x to 6. ++x increments x to 7 then returns 7. So 5 + 7 = 12.'
      },
      {
        id: 'q5',
        question: 'What does the expression "5" - 2 equal?',
        options: ['"3"', '3', '"52"', 'Error'],
        correctAnswer: 1,
        explanation: 'Unlike +, the - operator always performs numeric subtraction, so "5" is converted to 5, and 5 - 2 = 3.'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/FZzyij43A54',
    cheatSheetSection: [
      '// Arithmetic',
      '+ - * / % **',
      '++ --',
      '',
      '// Comparison',
      '=== !== < > <= >=',
      '',
      '// Logical',
      '&& || !',
      '',
      '// Assignment',
      '+= -= *= /='
    ]
  }
  // ... Continue with remaining 17+ lessons
];

export const javascriptRoadmap: Roadmap = {
  id: 'js-roadmap',
  title: 'JavaScript Mastery Roadmap',
  description: 'Complete path from JavaScript beginner to advanced developer',
  totalWeeks: 16,
  stages: [
    {
      id: 'stage-1',
      title: 'JavaScript Fundamentals',
      week: 1,
      description: 'Learn the basics of JavaScript syntax and core concepts',
      lessons: ['js-001', 'js-002', 'js-003'],
      projects: ['Personal Introduction App', 'Simple Calculator'],
      skills: ['Variables', 'Data Types', 'Operators', 'Basic I/O']
    },
    {
      id: 'stage-2',
      title: 'Control Flow',
      week: 2,
      description: 'Master conditional statements and loops',
      lessons: ['js-004', 'js-005', 'js-006'],
      projects: ['Number Guessing Game', 'Grade Calculator'],
      skills: ['If/Else', 'Switch', 'For Loops', 'While Loops']
    },
    {
      id: 'stage-3',
      title: 'Functions',
      week: 3,
      description: 'Learn to write reusable code with functions',
      lessons: ['js-007', 'js-008', 'js-009'],
      projects: ['Function Library', 'Calculator with Functions'],
      skills: ['Function Declaration', 'Parameters', 'Return Values', 'Scope']
    },
    {
      id: 'stage-4',
      title: 'Arrays and Objects',
      week: 4,
      description: 'Work with complex data structures',
      lessons: ['js-010', 'js-011', 'js-012'],
      projects: ['Todo List', 'Student Grade Book'],
      skills: ['Arrays', 'Objects', 'Methods', 'Iteration']
    }
    // ... Continue with remaining stages
  ]
};

export const javascriptMentors: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Kyle Simpson',
    title: 'Author of "You Don\'t Know JS" series',
    platform: 'GitHub',
    profileUrl: 'https://github.com/getify',
    expertise: ['JavaScript', 'Functional Programming', 'ES6+', 'Node.js'],
    followers: '50K+',
    description: 'Deep JavaScript expert and educator, author of the famous "You Don\'t Know JS" book series',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'mentor-2',
    name: 'Wes Bos',
    title: 'Full Stack Developer & Educator',
    platform: 'YouTube',
    profileUrl: 'https://youtube.com/@WesBos',
    expertise: ['JavaScript', 'React', 'Node.js', 'CSS'],
    followers: '500K+',
    description: 'Creates practical JavaScript courses and tutorials for developers',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'mentor-3',
    name: 'Dan Abramov',
    title: 'Co-creator of Redux, React Team',
    platform: 'Twitter',
    profileUrl: 'https://twitter.com/dan_abramov',
    expertise: ['React', 'Redux', 'JavaScript', 'Frontend Architecture'],
    followers: '400K+',
    description: 'Core React team member and creator of Redux state management library',
    avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'mentor-4',
    name: 'Traversy Media',
    title: 'Web Development Educator',
    platform: 'YouTube',
    profileUrl: 'https://youtube.com/@TraversyMedia',
    expertise: ['JavaScript', 'Full Stack', 'Web Development', 'Tutorials'],
    followers: '2M+',
    description: 'Comprehensive web development tutorials and crash courses',
    avatar: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'mentor-5',
    name: 'Academind',
    title: 'Programming Education Platform',
    platform: 'YouTube',
    profileUrl: 'https://youtube.com/@academind',
    expertise: ['JavaScript', 'React', 'Vue', 'Angular', 'Node.js'],
    followers: '1M+',
    description: 'In-depth programming courses and tutorials for modern web development',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const javascriptGames: CodingGame[] = [
  {
    id: 'game-1',
    title: 'Number Guessing Game',
    description: 'Create a game where the computer picks a random number and the user tries to guess it',
    difficulty: 'Beginner',
    estimatedTime: '30 minutes',
    skills: ['Variables', 'Loops', 'Conditionals', 'Random Numbers'],
    instructions: `
      Create a number guessing game with these features:
      1. Generate a random number between 1 and 100
      2. Ask the user to guess the number
      3. Provide hints (too high/too low)
      4. Count the number of attempts
      5. Congratulate when they guess correctly
    `,
    starterCode: `
// Number Guessing Game
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
    // Your code here
}

// Start the game
console.log("Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 100...");
    `,
    solution: `
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let hasWon = false;

function guessNumber() {
    while (!hasWon) {
        let guess = parseInt(prompt("Enter your guess (1-100):"));
        attempts++;
        
        if (guess === randomNumber) {
            alert(\`Congratulations! You guessed it in \${attempts} attempts!\`);
            hasWon = true;
        } else if (guess < randomNumber) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }
    }
}

console.log("Welcome to the Number Guessing Game!");
guessNumber();
    `,
    hints: [
      'Use Math.random() to generate random numbers',
      'Use parseInt() to convert string input to numbers',
      'Use a while loop to keep asking for guesses',
      'Track attempts with a counter variable'
    ]
  },
  {
    id: 'game-2',
    title: 'Rock Paper Scissors',
    description: 'Build the classic Rock Paper Scissors game against the computer',
    difficulty: 'Beginner',
    estimatedTime: '45 minutes',
    skills: ['Functions', 'Arrays', 'Conditionals', 'Random Selection'],
    instructions: `
      Create a Rock Paper Scissors game:
      1. Player chooses rock, paper, or scissors
      2. Computer makes a random choice
      3. Determine the winner based on rules
      4. Keep score over multiple rounds
      5. Display results after each round
    `,
    starterCode: `
// Rock Paper Scissors Game
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Return random choice
}

function playRound(playerChoice) {
    // Your game logic here
}

// Start the game
console.log("Let's play Rock Paper Scissors!");
    `,
    solution: `
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log(\`You chose: \${playerChoice}\`);
    console.log(\`Computer chose: \${computerChoice}\`);
    
    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("You win this round!");
        playerScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }
    
    console.log(\`Score - You: \${playerScore}, Computer: \${computerScore}\`);
}

// Example usage
playRound('rock');
    `,
    hints: [
      'Use an array to store the three choices',
      'Math.random() can help pick computer choice',
      'Use logical operators to determine winner',
      'Keep track of scores with variables'
    ]
  }
];

export const javascriptCheatSheet = {
  title: 'JavaScript Quick Reference',
  sections: [
    {
      title: 'Variables & Data Types',
      content: `
// Variable declarations
let variable = value;        // Reassignable
const CONSTANT = value;      // Non-reassignable
var oldStyle = value;        // Avoid in modern JS

// Data types
let number = 42;
let string = "Hello";
let boolean = true;
let array = [1, 2, 3];
let object = {key: "value"};
let nothing = null;
let notDefined = undefined;

// Type checking
typeof variable;
      `
    },
    {
      title: 'Operators',
      content: `
// Arithmetic
+ - * / % **
++ --

// Comparison
=== !== < > <= >=
== != (avoid these)

// Logical
&& || !

// Assignment
= += -= *= /= %=
      `
    },
    {
      title: 'Control Flow',
      content: `
// Conditionals
if (condition) {
    // code
} else if (condition) {
    // code
} else {
    // code
}

// Switch
switch (value) {
    case 'option1':
        // code
        break;
    default:
        // code
}

// Loops
for (let i = 0; i < 10; i++) {
    // code
}

while (condition) {
    // code
}
      `
    },
    {
      title: 'Functions',
      content: `
// Function declaration
function functionName(param1, param2) {
    return result;
}

// Function expression
const func = function(param) {
    return result;
};

// Arrow function
const arrowFunc = (param) => {
    return result;
};

// Short arrow function
const shortArrow = param => result;
      `
    },
    {
      title: 'Arrays',
      content: `
// Creating arrays
let arr = [1, 2, 3];
let empty = [];

// Common methods
arr.push(item);          // Add to end
arr.pop();               // Remove from end
arr.unshift(item);       // Add to beginning
arr.shift();             // Remove from beginning
arr.length;              // Get length
arr[index];              // Access element
arr.indexOf(item);       // Find index
arr.includes(item);      // Check if exists

// Iteration
arr.forEach(item => console.log(item));
arr.map(item => item * 2);
arr.filter(item => item > 5);
      `
    },
    {
      title: 'Objects',
      content: `
// Creating objects
let obj = {
    key: "value",
    number: 42,
    method: function() {
        return this.key;
    }
};

// Accessing properties
obj.key;
obj["key"];

// Adding/modifying
obj.newKey = "new value";
obj.key = "updated";

// Deleting
delete obj.key;

// Object methods
Object.keys(obj);        // Get all keys
Object.values(obj);      // Get all values
Object.entries(obj);     // Get key-value pairs
      `
    },
    {
      title: 'Common Built-in Methods',
      content: `
// String methods
str.length;
str.toUpperCase();
str.toLowerCase();
str.substring(start, end);
str.split(separator);
str.replace(old, new);
str.includes(substring);

// Number methods
Number(string);
parseInt(string);
parseFloat(string);
Math.random();
Math.floor(number);
Math.ceil(number);
Math.round(number);

// Console methods
console.log(message);
console.error(message);
console.warn(message);
console.table(array);
      `
    }
  ]
};
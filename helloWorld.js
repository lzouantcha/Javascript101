console.log('Hello World'); //print out information (debugging and checking aspects of your code)
//semi colon after every statment(line)

///------Variables------------

//Variables (store data in your code)
let name = 'lesly'; //(let initializes the variable)
let age = 23;

//let - set a variable, and then you want to change it later in your code
//const - ste a variable, and never change in your code
//var - never used (dont use it, but know it exists)

age = 24; ///updated age, but do not need to call let anymore 
age = 25; //updated the age again, do not need let
age = 30;

const isStudent = false; //can never change again..lesly can never be a studnet again

//storing data so that you can use it again later in your code

//Naming convention for valiables (rules of choosing variable names)
//Cannot start with uppercase letter
//Cannot start with a number
//Cannot have a space
//---if you want it to have multiple words then use below
//CamelCase ---- ex isFifty
//SnakeCase ---- ex is_a_girl
//cannot be a built in work --- 
const undefined = 'lesly'; //will fail because already a world in the system called undefined


//------Datatypes-----------------

//different data types you can store in a variable

//String (in qutoes)
const school = 'UMD';
const agee = 23;

//Number (no quotes, saving number value)
const year = 2024;
const height = 5.2; //can also save decimals 
console.log(typeof(height));

//Array (multiple items stored between brackets, seperated by a comma)
const colors = ['purple', 'red', 'blue']
const items = ['green', 56, 'True']
const numbers = [1, 33, 55, 66, 99]

//Object (item related to eachother, stored in key value pairs, within cruly braces) (each key value pair, is seperated by a comma)
const lesly = {
    age: 23, //age is the key, value is 23
    height: 5.2,
    colorOfCar: 'black'
};

const chris = {
    age: 26,
    height: 5.7,
    colorOfCar: 'silver'
};

//Boolean (true or false)
const isFifty = false;
const is_a_girl = true;

//Undefined
//null
///both mean the variable is invalid
const car = undefined; //car varibale is inavlid
const car2 = null; //car2 is invalid


//-----Operators------

//--Arithmatic--
console.log(2+2);
const x = 1;
const y = 2;
const z = x + y;
console.log(z);

//-,*,/,+
console.log(5-3);
console.log(5*5); //multiplication
console.log(5/1); //division


//---Comparison---(return true or false (boolean))

console.log(5>1); //print out true
//>,<,<=, >=, ==, ===
//>= (greater than OR equal to)
console.log(3>=3) //true
//<= (less than OR equal to)
console.log(4<=10) //true

//== vs. ===
console.log(5==5); //use double (same value)
//== (not strict) (can compare differentr data types)
console.log('5'=='5') //TRUE because same data type
console.log(5=='5') //TRUE even though it is different data types
console.log(6==5) //FALSE
console.log('10'==89) //FALSE
//=== (strict) (cant compare different data types)
console.log(5==='5') //FALSE (because differnt data types)
console.log(5===5) //TRUE (same data type and same value)
console.log('6'==='6') //TRUE (same data type and same value)

//----Logical---(returns true or false (boolean))
//&& (AND) (both expressions are equal)
//|| (OR) (atleast ONE of the expressions are equal)
//! (NOT) (not equal)

console.log(5>2 && 3>4) //FALSE
console.log('hello'=='hello' && '5'===5) //FALSE 

console.log(7>=3 || 4<10) //TRUE
console.log('Hello' || 'Lesly') //TRUE
const name2 = 'Lesly'; //not an empty string TRUE
const name3 = undefined //FALSE
console.log(!5>2) //negates the expression TRUE 



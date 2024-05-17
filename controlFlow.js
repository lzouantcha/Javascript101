//if...else statment

///----syntax of if else---

// if(condition){ //evaluates as TRUE or FALSE
//     ////code that executes if condition is true
// }else{
//     //code that executes if condition if false
// }

if(1<3){ //if this is true
    console.log('YAYYY') ///PRINT THIS IF 1 IS ACTUALLY LESS THEN 3
}else{//if it not true
    console.log('NOOOOO') //IF IT IS NOT!....THEN PRINT THIS
}

if(3>10){
    console.log('TRUUUEEE')
}else{
    console.log('FALSEEEE')
}

const temp = 67;

if(temp > 60){
    console.log('It is warm outside')
}else{
    console.log('It is cold outside')
}

let age = 23;
age = 52;

//23 < 30
//52 < 30
if(age < 30){
    console.log('She is in her 20s')
}else{
    console.log('She is getting old')
}


let carColor = 'red'
//'red' == 'red'
if(carColor == 'red'){
    console.log('Coool') //if it is true print this
}else{
    console.log('Not Coool') //if it is false print this
}


let money = 1000
let debt = 5000

money = 300000
if(debt >= money){ //block 1
    console.log('You are in trouble')
}else{ //block 2
    console.log('financial guru!')
}

if(debt > money){ //block 1
    console.log('You are in trouble')
}else if(debt == money){ //block 2 //else if (adding another condition, always goes after if) (have as many else if as you in want in)
    console.log('normal guy')
}else{ //block 3  //do not always have to finish if/else statment if else
    console.log('financial guru!')
}

//if can stand on it own
if(1>2){
    console.log('This works too')
}

//can have else if but do not have to include else

if(2<3){
    console.log('Yes')
}else if(5>4){
    console.log('No')
};

if(5 == 5){
    console.log('Sure')
};
if(6 == '6'){
    console.log('Noo')
}


const myAge = 45

if(age >= 0 && age <=12){ //goes through each condition 
    console.log('You are a child')
}else if(age >= 13 && age <= 19){
    console.log('You are a teenage')
    if(age == 16){ //nesting if block within block //can nest as much as you want
        console.log('Hope y ou enjoyed your sweet 16')
    }else if(age == 17){
        console.log('yes')
    }else if(age == 12){
        console.log('no')
    }
}else if(age >= 20 || age <= 64){
    console.log('You are an adult')
}
//----Switch Statements------
//alternative to if else statments
//check different conditions and excute a block of code if the conditon is TRUE


//--SYNTAX (how to write the code itself)
// switch(expression){
//     case value1: //each case is the condition and below if the code block you want to execute
//         console.log('Case 1 is true') //what action you want

//         break //key word in coding...LEAVE the switch block if the case is true...does not check the rest of the cases //OPTIONAL
//     case value2:
//         console.log('Case 2 is true')

//         break
//     case value3:
//         console.log('Case 3 is true')

//         break
//     default: //if ALL the conditions are false, execute the block below
//         console.log('Executing default code block')

// }
//expression == a combination of values, variables, and operators, which computes to a value
let fruit = "apple";
 
switch(fruit){ //expression is what you are trying to compare...compared against each case
    case "banana":
        console.log("The fruit is a banana");
        break;
    case "apple":
        console.log('The fruit is an apple');
        break;
    case "mange":
        console.log('The fruit is a mango')
        break;
    default:
        console.log('I dont know what the fruit is') //executed if the fruit is NOT a banana, apple, or mango
}

let age1 = 18;

switch(age1){
    case 23: //is age1 equal to the value of 23
        console.log('He is not 23, he is 18')
        break;
    case 50: //is age1 equal to the value of 50
        console.log('No he is not old, he is 18')
    default:
        console.log('I have no clue this mans age, maybe it is 88')
}

prompt('What is your name');

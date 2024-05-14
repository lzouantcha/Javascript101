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

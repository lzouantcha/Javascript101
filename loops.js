//loops
//for loops
//while loops
//essentially they do the same thing, but for loops are used more commonly

//for loops allow you to repeat a block of code a certain amount of time

console.log(1 + 1)
//i want execute this code 10 times, then i would use a loop to do that

i = 0 //les
//i + 1
i = 1 //chris
//i + 1
i = 2 //milo
const array1 = ['les', 'chris', 'milo'] //loop would allow you to go to each name in teh array and print out their last name
//console.log('hernandez') //loop through the LENGTH of the array to make sure you hit each item

//iterate (got to each item in the array, and excute that code block to every item in the array)

//---syntax of a loop (how to write a loop)

// for (initialization; condition; increment){
//     //code to execute 
// }

//initialization - basically starting a counter (keep track how how many times you are looping) (let i = 0)
//condition - how to evatuate each iten in an array. if the condition is true, then the loop continues. if it is false, the loop stops
//common example...checking the length of the array. (i < 11) (setting how many times you want the loop to happen)
//increment - increases the counter (i = 0, i = 1, i = 2) (i++ (i + 1 = i))

for (let i = 0; i < 10; i++){
    console.log(1 + 1)
}

for (let i = 0; i < 5; i++){
    console.log(1 + 1, i)
}

//array1.length is how to get length of an array. so nameOfArray.length
for (let i = 0; i < array1.length; i++){
    console.log(i) //print the increment
    console.log(array1[i], i) //print the array at that count
    console.log(array1[i] + '' + 'hernandez') //print out their last names
}
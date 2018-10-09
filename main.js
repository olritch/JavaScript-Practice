                            // QUESTION # 1

function printInt(n) {
for ( var i = 1; i <= n ; i++){
    console.log(i)
    }
}
printInt(10); //function call



                            // QUESTION # 2

function printIntRev(n){
    for ( var i = n; i >= 1 ; i--){
        console.log(i)
    }
}
printIntRev(10); //function call



                            // QUESTION # 3

function checkInput(x){
    if ( typeof x === "number"){
        return "number";
    } else if (typeof x === "string"){
        return "string";
    }else if (typeof x === "boolean"){
        return "boolean";
    }else {
        return "-1"
    }
}
console.log(checkInput([1,2,3,4]))  // function call



                            // QUESTION # 4

function simpleEvenAdding(num){
    var sum=0;
    for (var i = 1; i <= num ; i++ ){
        if(i % 2 == 0){
            sum= sum+i;
        }
    }
    console.log(sum)
}                 
simpleEvenAdding(11);  //function call



                            // QUESTION # 5
    //EXAMPLE #1
function letterCapitalize(str) {
    const word = [];
    for(char of str.split(' ')) {
        word.push(char[0].toUpperCase() + char.slice(1))
    }
    return word.join(' ');
}                           
console.log(letterCapitalize("this is a test"));     //function call

    //EXAMPLE # 2
function test(str) {
    var arrcapwords = [];
    var words = str.split(' ');
for ( word of words) {
        var capword = word[0].toUpperCase() + word.slice(1);
        arrcapwords.push(capword);
    }
    console.log(arrcapwords.join(' '));
}
//test("dad want to go home");   // function call



                            //QUESTION # 6
        //EXAMPLE # 1
function simpleReverse(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
  console.log(simpleReverse("vice"));    //function call

        //EXAMPLE # 2
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
    
}
//reverseString("hello");   //function call



                            //QUESTION # 7

function findDiff(arr) {
    var max = arr[0];
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return max - min;
}    
console.log(findDiff([24,22,23,22,24]));    // function call



                            //QUESTION # 8
                            
function timeConvert(num){
    var hour = parseInt(num / 60);
    var min = num % 60;
    return hour + ":" + min;
}
console.log(timeConvert(120));    //function call



                            //QUESTION # 9

function findStr(str, long) {
    var counter = 0;
    for(var i=0; i <= long.length - str.length; i++) {
        if(long.slice(i, i+ str.length) === str) {
            counter++;
        }
    }
    return counter;
}
console.log(findStr("ha", "abcde"));   //function call



                        //QUESTION # 10

var selfDividingNumbers = function(left, right) {
    var selfDiv = [], result;
    
    for(left; left < right +1; left++) {
        for(var i=0; i<left.toString().length; i++) {
            if(left % left.toString().charAt(i) === 0 && left.toString().charAt(i) !== 0 ) {
                result = true;
            }
            else {
                result = false;
                break;
            }
                
        }
        if(result == true)
            selfDiv.push(left);
    }
    
    return selfDiv;
};
console.log(selfDividingNumbers(1,12));   //function call



                            //QUESTION # 11

function moveZeros(nums) {
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
}
console.log(moveZeros([0,1,0,3,12]));

//EXAMPLE 2

function moveZeros(nums) {
    var result = [];
    var counter = 0;
    for (var i =0; i< nums.length; i++) {
        if (nums[i] === 0 ) {
            counter++;
        } else {
            result.push(nums[i]);
        }
    }
    while (counter > 0) {
        result.push(0);
        counter--;
    }
    return result;
}
//console.log(moveZeros([1,2,0,0,2,312,33,0,0]));
 
                            //QUESTION # 12
                            
function average(arr) {
    if (arr.length == 0) {
        return "The input array is empty";
    }
    var sum =0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(average([2,6]));
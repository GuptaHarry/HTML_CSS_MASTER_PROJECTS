let n = prompt("enter the request");
let todo = [];
while(true){
    if(n=="LIST"){
        for(let i=0;i<todo.length;i++){
            console.log(i , todo[i]);
        }
    }
    else if (n=="ADD"){
        let x = prompt("enter the task to add");
        todo.push(x);
        console.log("task added");
    }
    else if (n == "DELETE"){
        let idx = prompt("enter the index to deleted");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("quitting the app");
        break;

    }

    n= prompt("enter the reequest");
}



// Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [ 1,2,3,4,5,6,2,3] 
let x = 2

for(let i = 0 ; i<arr.length;i++){
    if(arr[i] == x){
        arr.splice(i,1);
    }
}

console.log(arr);


// . Write a JS program to find the no of digits in a number

let num = 287152;
let count=0;
while(num>=0){
  x = num;
    x%=10;
  num /=10;
  count++;
}
console.log(count);
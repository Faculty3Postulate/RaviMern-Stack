/*
Events--any minute activity performed in the browser by the user
Eventhandlers---eventhandlers are used to handle events


Arrays===is one of the object
Arrays---used to store a multiple value in a variable
      --zero based indexing

      Array and its methods and properties
      properties---length
      funtions/Methods==push()==>used to add one more element in array
                      ==pop()
                      ==unshift
                      ==shift
                      ==concat
                      ==slice
                      ==reverse
*/

// const abc=()=>{
//     console.log(" i have been looged")
// }

x = [1, 2, 2, 3, 4, "sathish", [1, 2, 3, 4]];
// console.log(x.length)
// console.log(typeof(x))
// console.log(x)

// console.log(x)
// console.log(x.pop())
// console.log(x)

// x.unshift(7)
// console.log(x)
// x.shift()
// console.log(x)
// y=[3,4,5,6]
// let z=x.concat(y)
// console.log(x.push("kishore"))
// console.log(x)
// console.log(z)
// x=z.slice(1,3)
// console.log(x)
// console.log(z.slice(1,3))
// console.log(z.reverse())
console.log(x);
for (var rtin in x) {
  if (rtin % 2 == 0) {
    console.log(rtin);
  }
}

// for(var i=0;i<x.length;i++){
//     if(x[i]%2==0){
//         console.log(x[i])
//     }
// }

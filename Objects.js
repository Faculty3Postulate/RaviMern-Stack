/*
Objects--key value pair
      --key =name of an property
      --value==value of the property

      object has property and a method
       dot opertor and passing name of the key in the object name
       property---physical character
       method--functionality
       how to cal the method====use rounded brackets
*/
// let sathish=["sathish","kumar",25,"BE"]

// console.log(sathish[3])

// let sathish = {
//   fName: "sathish",
//   lName: "kumar",
//   age: 25,
//   degree: "BE",
//   marks:[95,93,67,88,100],

//   sayHi: function () {
//     console.log("welcome");
//   },
//   fullname: function () {
//     console.log(this.fName + " " + this.lName);
//   },
// };

// console.log(sathish["fName"]);
// console.log(sathish.fName);
// sathish.sayHi();
// sathish.fullname();
// sathish.average();
// sathish.isPass();

//object Constructors==blueprint or template
function Student(fullName,batchNo){
this.fullName=fullName,
this.batchNo=batchNo

this.sayHi=function(){
    console.log("welcome")
}


}
//real world object
let sath=new Student("Sathish Kumar",34)
let ravi=new Student("Ravi",56)

console.log(sath)
console.log(ravi)

let array=[sath,ravi]
console.log(array)



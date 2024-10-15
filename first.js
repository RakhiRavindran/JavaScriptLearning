console.log("to print in console");
let str = "forOf loop";
for (const v of str) {
    console.log(v);
}

// fr in loop is for object and arrays
/* for loop variable is for assign value, and  we can print the keys.
if want to print the values use objectName[key] */
let student=
{
    fName : "Rakhi",
    age : 32,
    isKnowJS :true
};
for (const key in student) {
    //if (Object.prototype.hasOwnProperty.call(student, key)) {
      //  const ele = object[key];
        console.log("key=",key ," value=",student[key]);
    //}
}
console.log(typeof "forof loop");//value
let specialStr =`this is special str`;

console.log(typeof str)// Key
//template literal are string defined by `` and we can ise placeholder ${expression}

let op= `The age of ${student.fName} is ${student.age}`;
console.log(op);
console.log(op.slice(4,12));
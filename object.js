//Objects

let person = {
  name: "John",
  age: 30,
  occupation: "Engineer",
};

// console.log('person:', person.age)//person: 30
// console.log('person:', person.name)//person: john
// console.log('person:', person["occupation"])//person: Engineer

let obj = {
  name: "nilesh",
  place: "indore",
  count: 0,
};

// to  access name  console.log(obj.name)
// to  change the  name property of obj       obj.name = 'taksh'
// to add new key in obj direct go to obj and add new key or use  -> obj.myNewkey = 'hello gm'.

// obj.name = "taksh";
// obj.myNewkey = "hello gm";
// console.log(obj);

// major differ primitv & non primitive
// let count = 0;
// let obj2 = { age: 23  };

// let copy = { ...obj, count: obj.count + 1 };
// console.log("copy:", copy);

let arr = ["nil"];

let copy = [...arr, "shiv"];
console.log("copy:", copy);

let areas = []; // to store areas of circles
let area = 0;
for (let i = 0; i < circles.length; i++) {
  area = Math.floor(Math.PI * circles[i] * circles[i]);
  areas.push(area);
}
console.log(areas);

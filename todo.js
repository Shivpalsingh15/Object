// let arr = [
//   { msg: "eat", mykey: "1" },
//   { msg: "repeat", mykey: "2" },
//   { msg: "sleep", mykey: "3" },
// ];
// console.log(clicked(3));
// function clicked(id) {
//   console.log(id);
//   let output = arr.filter((el) => el.mykey != id);
//   return output;
//}

// let arr = ["cricket", "hockey", "football"];
// let output = arr.map((el) => <div>el</div>);
// console.log("output:", output);


// let circles = [10, 30, 50];

// let areas = []; // to store areas of circles
// let area = 0;
// for (let i = 0; i < circles.length; i++) {
//   area = Math.floor(Math.PI * circles[i] * circles[i]);
//   areas.push(area);
// }
// console.log(areas);
// console.log(circles.length)


// const data = ["title1", "title2", "title3"];
// let cards = data.map((item) => <card>{item}</card>);
// console.log('cards:', cards)

// const languages = ["JS", "Python", "Java"];
// const js = languages[0];
// const python = languages[1];
// console.log('python:', python)
// const java = languages[2];
// console.log('java:', java)
// console.log('js:', js)

//output
// js: JS;
// python: Python;
// java: Java;

const languages = ["JS", "Python", "Java"];
const [js, python, java] = languages;
console.log('java:', java)
console.log('python:', python)
console.log('js:', js)

let loading = false;
const data = loading ? <div>Loading...</div> : <div>Data</div>;
console.log('data:', data)
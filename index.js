const listItems = document.querySelectorAll("li");
console.log(listItems);
listItems.forEach(function (li) {
  li.firstElementChild.addEventListener("click", function (e) {
    // console.log(e.target)

    listItems.forEach((ll) => {
      ll.classList.remove("open");
      ll.firstElementChild.lastElementChild.setAttribute(
        "src",
        "./assets/images/icon-plus.svg"
      );
    });

    li.classList.toggle("open");
    // console.log(e.currentTarget)
    if (li.classList.contains("open")) {
      li.firstElementChild.lastElementChild.setAttribute(
        "src",
        "./assets/images/icon-minus.svg"
      );
    } else {
      li.firstElementChild.lastElementChild.setAttribute(
        "src",
        "./assets/images/icon-plus.svg"
      );
    }
  });
});

function forM(val) {}

const l = listItems[0];

console.log(l);

// l.classList.add("test", "test1", "test")
// l.classList.remove("open")

console.log(l.classList);

console.log(l.parentElement.previousElementSibling.firstElementChild);

//traversing the dom
//parent -> firstElementChild
// console.log(l.firstElementChild)
//parent -> lastElementChild
// console.log(l.lastElementChild)
//parent -> children[index]
// console.log(l.children)

//siblings
// previousSibling
// nextSibling
// console.log(l.firstElementChild.nextElementSibling)

//child to parent
// console.log(child.parentElement)

// const main = document.querySelector("main")
// const  h1 = document.querySelector("h1")

// function functionToTrigger(event){
// console.log(event)
// console.log(event.target)
// console.log(event.currentTarget)
// }

// // h1.addEventListener(type, functionToTrigger)
// main.addEventListener("click", functionToTrigger)

const scores = [
  60, 62, 81, 72, 75, 23, 12, 19, 25, 35, 38, 92, 20, 45, 50, 67, 98, 87, 23,
  86, 55, 45, 49, 82,
];

//filter
// const filter = scores.filter((value) => {
//   return value > 49;
// });
// console.log(filter)
//map
// const map = scores.map((val) => {
//   // return val > 49 ? 1 : 0;
//   if(val > 49){
//     return "passed";
//   }else {
//     return "failed";
//   }
// });
// console.log(map)


//find
// const find = scores.find((val)=>{
//   return val > 70
// })

// console.log(find)

// console.log({ scores, filter, map });
// const r = biggerThan49.length/scores.length *100
// console.log(r.toFixed(1) + "%")

//every
// const every = scores.every((val)=>{
//   return val >= 0;
// })
// console.log(every)

//some
// const some = scores.some((val)=>{
//   return val >= 600;
// })
// console.log(some)

//slice
// const slice = scores.slice(-5,-2)
// console.log(slice)

//join
// const join = scores.join(":")
// console.log(join)

// const timer = [4,51,32]
// console.log(timer.join(";"))

//split
// const name = "RastaXarm"
// console.log(name.split(""))

// const name2 = "14:32:45"
// console.log(name2.split(":"))

//push
//pop
//shift
//unshift
//includes

// [1,6,8] /// "1-6-8"
// [1,36,64]

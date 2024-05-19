import { Observable } from 'rxjs';

interface user {
  id: number;
  name: string;
}

const data: user[] = [
  { id: 1, name: "john" },
  { id: 2, name: "bob" },
  { id: 3, name: "may" },
  { id: 4, name: "flip" },
];

const number: number[] = [1, 2, 3, 4, 5];

//map
// const dataMap = data.map((data)=>data.id)
// console.log("-----map start-----")
// console.log(dataMap)
// console.log("-----map end-----")

//sort
// const dataSort = data.sort((a,b)=> b.id-a.id)
// console.log("-----sort start-----")
// console.log(dataSort)
// console.log("-----sort end-----")

//Reduce

// const numberReduce = number.reduce((acc,currentValue)=>{
//   acc+=currentValue
//   return acc
// },0)
// console.log("-----Reduce start-----")
// console.log(numberReduce)
// console.log("-----Reduce end-----")

//Filter
// const dataFilter = data.filter((data)=>data.id>2)
// console.log("-----Filter start-----")
// console.log(dataFilter)
// console.log("-----Filter end-----")

//Find
// const dataFind = data.find((data)=>data.id>2)
// console.log("-----Find start-----")
// console.log(dataFind)
// console.log("-----Find end-----")

//Some
// const dataSome = data.some((data)=>data.id>2)
// console.log("-----Some start-----")
// console.log(dataSome)
// console.log("-----Some end-----")

//splice
// data.splice(0,1,{id:6,name:"js"})
// console.log("-----splice start-----")
// console.log(data)
// console.log("-----splice end-----")

//slice
// const dataSlice=data.slice(2,4)
// console.log("-----slice start-----")
// console.log(dataSlice)
// console.log("-----slice end-----")

//chainFuction

// const chainData = data.filter((data)=>data.id>2).map((data)=>data.name).join(", ")
// console.log("-----chainFuction start-----")
// console.log(chainData)
// console.log("-----chainFuction end-----")


// //if else
// const exIfElse = ()=>{
//   const b = undefined
//   b? console.log(true):console.log(false)

// }

// exIfElse()




//promise function

// const task1 = () => {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve(console.log("task1"));
//     }, 1000);

//   });

// };

// const task2 = () => {
//   console.log("task2");
// };

// task1().then(() => task1().then(() =>task2()));

//

// const task1 = async ()=>{
//   return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//           resolve(console.log("task1"));
//         }, 1000);
// } )}

// const logTask = async () => {

//   await task1()
//   task2()
// };

// logTask();

// AllPromise
// const fetchData = async () => {
//   const urls = [
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/comments',
//     'https://jsonplaceholder.typicode.com/users'
//   ];

//   try {
//     const [posts, comments, users] = await Promise.all(urls.map(url => fetch(url).then(response => response.json())));

//     console.log('Posts:', posts);
//     console.log('Comments:', comments);
//     console.log('Users:', users);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };
// fetchData();


const promise = new Promise((resolve, reject) => {  
  resolve(1);
  
  // จะจบการทำงานที่ส่วนนี้
  // <---- end ---->
  resolve(2);
  resolve(3);
 });
 

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');

let subscription =observable.subscribe({
  
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  },
});
subscription.unsubscribe()



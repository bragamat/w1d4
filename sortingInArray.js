// var array = [10, 2, 5, 1, 9];
// console.log(array.sort(function(biggerNumber,smallerNumber){return biggerNumber - smallerNumber;}));


var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
];

var sorting = students.sort(function (a,b) {
   if(a.name > b.name){
    return 1;
   }
   if (a.name < b.name){
    return -1;
   }
   if(a.name === b.name){
    return 1;
   }
});

console.log(sorting);

function findWaldo(arr, found) {
var num = 0;
  arr.forEach(function lookForWal(index){
    num += 1;
    if (index === "Waldo") {
     found(num-1);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index: ", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

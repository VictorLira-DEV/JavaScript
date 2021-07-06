function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return;
  }
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

const tree = {
  name: "john",
  children: [
    {
      name: "Tim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Carla", children: [] },
        { name: "Victor", children: [] },
      ],
    },
  ],
};

printChildrenRecursive(tree);

//recusion is a function that calls itself
/*
function normalFunction(n){
    for(let i = n; i >= 0; i--){
        console.log(i)
    }
}

normalFunction(5)
*/
/*
function recursiveFunction(n) {
  if (n <= 0) {
    console.log("ok");
    return;
  }
  console.log(n);
  recursiveFunction(n - 1);
}
recursiveFunction(4);

/*
function sumRange(n){
    let total = 0
    for(let i = n; i > 0; i--){
        total += i
    }
    return total
}
*/

/*
function sumRangeRecursive(n, total = 0 ){
    if(n <= 0 ) {
        return total

    }else{
        return sumRangeRecursive(n - 1, total + n)
    }
}
*/

// PERCURSO DA FUNÇÃO
//sumRangeRecursive(3, 0)
//    sumRangeRecursive(2, 3)
//        sumRangeRecursive(1, 5)
//            sumRangeRecursive(0, 6)
//            return 6
//       return 6
//    return 6
//return 6

/*
function reduzir(n){
    if(n <= 0){
        return 0

    }else{
        return n + reduzir(n-1)
    }
}
*/

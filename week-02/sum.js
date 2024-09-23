// ary: number array
function sum(ary) {
  // TODO: sum all elements in ary
  let sum = 0;
  ary.forEach((element) => {
    sum += element;
  });
  return sum;
}

console.log(sum([1, 5, 3, 2])); // 11

// TODO: (optional) 挑戰題: 有幾種寫法？
// TODO: (optional) 挑戰題: 如果 `sum` 函式的 input 是 n
//然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？

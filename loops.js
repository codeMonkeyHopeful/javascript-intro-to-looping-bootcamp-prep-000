
function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return array;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(n);
    n = n - 1;
  }
  return 'done';
}

function incrementVariable() {
  i = i + 1;
}
 
function doWhileLoop(array) {
do {
  array.pop()
  incrementVariable();
} while (array.lenght > 0 && incrementVariable());
}
//cycle find all disappear
let a = [4, 3, 2, 7, 8, 2, 3, 1];
cycle(a);
console.log(a);
function cycle(a) {
  let i = 0;
  while (i < a.length) {
    correct = a[i] - 1;
    if (a[i] != a[correct]) {
      swap(a, i, correct);
    } else {
      i++;
    }
  }
}
function swap(a, i, correct) {
  let temp = a[i];
  a[i] = a[correct];
  a[correct] = temp;
}

ans = [];
for (let j = 0; j < a.length; j++) {
  if (a[j] != j + 1) {
    ans.push(j + 1);
  }
}
console.log(ans);

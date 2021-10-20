function fibo(a) {
  let first = 0;
  let second = 1;
  var nextnum;
  for (let i = 0; i < a; i++) {
    console.log(first);
    nextnum = first + second;
    first = second;
    second = nextnum;
  }
}

fibo(10);

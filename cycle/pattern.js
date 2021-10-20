function pattern(num) {
  for (let row = 0; row < num; row++) {
    for (j = 0; j < row; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
}
pattern(5);
console.log("");
console.log("sendond pattern goes here");
console.log("");
function pattern1(num) {
  for (let row = 0; row < num; row++) {
    for (j = 0; j < num; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
}
pattern1(5);

console.log("");
console.log("3rd pattern goes here");
console.log("");
function pattern2(num) {
  for (let row = num; row >= 0; row--) {
    for (j = row; j >= 0; j--) {
      process.stdout.write("*");
    }
    console.log("");
  }
}
pattern2(6);

console.log("");
console.log(" 4th sendond pattern goes here");
console.log("");
function pattern3(num) {
  for (let row = 0; row < 2 * num; row++) {
    var total = row > num ? 2 * num - row : row; // double karke row minus karne se ans milega
    // console.log(total);
    for (let col = 0; col < total; col++) {
      process.stdout.write("*");
    }

    console.log("");
  }
}
pattern3(5);

console.log("");
console.log(" 5th sendond pattern goes here");
console.log("");
function pattern4(num) {
  for (let row = 0; row < 2 * num; row++) {
    var total = row > num ? 2 * num - row : row; // double karke row minus karne se ans milega
    // console.log(total);
    var space = num - total;
    // console.log(space);
    // console.log(total);
    for (var s = 0; s < space; s++) {
      process.stdout.write(" ");
    }
    for (let col = 0; col < total; col++) {
      process.stdout.write("* ");
    }

    console.log("");
  }
}
pattern4(5);

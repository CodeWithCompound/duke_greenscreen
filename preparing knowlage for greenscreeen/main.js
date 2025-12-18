// greenscreen: also known as chroma key
// this effect removes a specific color from the video feed
// typically used to replace a background with another image or video

/*
 STEPS FOR ALGORYITHM: (generalized for any algorithm)
 1. Work Example out by hand
 2. Write down what you did
 3. Find patterns
 4. Check by hand
 5. Translate to code
 6. Test and debug
 7. Optimize if necessary
*/

var x = 3;
var y = 3 * 3;

for (var i = 0; i < y; i++) {
  if (i == 0) {
    console.log("starting the loop");
  }
  console.log(i);
  if (i == y - 1) {
    console.log("done with the loop iteration");
  }
}

console.log(y);
function sqare(n) {
  return n * n;
}
y = sqare(5);
console.log(y);
console.log(sqare(10));

function wod(size) {

var space = "";
var count = 1;

for (var i = 1; i <= size; i++) {
  for (var j = 1; j <= size; j++) {
    if ((i + j) % 2 == 0) {
      space += "#";
  } else {
    space += "&";
    }
 }
  space += "<br>"
}
document.write(space);
count++;
}
wod(9);

var value = 2;

work();
// <- 'undefined'
// <- undefined

function work () {
  console.log(typeof value);
  console.log(value);
  var value = 3;
}
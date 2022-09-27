const sentence = "hello there from lighthouse labs";
let delay = 0;
/*setTimeout(() => {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char)
  }, 2000);
}}, 100);*/

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char) +'/n';
  }, delay);
  delay += 50;
}
setTimeout(() => { console.log('');}, delay);
const sentence = "hello there from lighthouse labs";
const typewriter = function(sentence) {
  let timer = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer)
    timer += 50;
  }  
  let linebreak = () => console.log("\n")
  setTimeout(linebreak, 2000);
};

typewriter(sentence);


// worked on it with @cnguyen50
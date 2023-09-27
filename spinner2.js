const spinnerFrames = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

let delay = 100;

for (const frame of spinnerFrames) {
  setTimeout(() => {
    process.stdout.write(`\r${frame}   `);
  }, delay);
  
  delay += 200; // Increase the delay for the next frame
}



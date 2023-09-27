process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// // ... fill in the rest yourself ...


const spinnerFrames = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

let delay = 100;

for (const frame of spinnerFrames) {
  setTimeout(() => {
    process.stdout.write(`\r${frame}   `);
  }, delay);
  
  delay += 200; // Increase the delay for the next frame
}

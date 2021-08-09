
const command = process.argv[2];
const input = process.argv[3];
let movieArr = []
const app = () => {
    if (command === "add") {
        movieArr.push(input);
    }

    console.log(movieArr);
}
app(); 
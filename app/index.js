

const fs = require('fs')
const command = process.argv[2];
const input = process.argv[3];
const { add, list, del, update} = require('./utils');

const app = () => {
    let movieListArr
    try {
        movieListArr = JSON.parse(fs.readFileSync('./netflix.json'));
    } catch (error) {
        movieListArr = [];
    }


    if (command === 'add') {
        add(movieListArr, input);
    } else if (command === 'list') {
        list(movieListArr);
        // list all movies in JSON file
    } else if (command === 'del'){
        del(movieListArr, input[3]);

    } else if (command === 'update'){
        update(movieListArr, input[3], input);
    }
}

app(); 
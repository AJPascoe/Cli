const fs = require('fs');

exports.add = (movieListArr, input) => {
    let movieObj = {movie: input};
    movieListArr.push(movieObj);
    let stringyObj = JSON.stringify(movieListArr)
    fs.writeFileSync('./netflix.json', stringyObj)
}

exports.list = (movieListArr) => {
    console.log(movieListArr);
};

exports.del= (movieListArr, input)=>{
    let delInput;
    movieListArr.map((movie, index) => {
        if (movie.name === input) {
            delInput = index;
        }
    });
    if (delInput !== undefined) {
        movieListArr.splice(delInput, 1);
        let stringMovieList = JSON.stringify(movieListArr.flat(1));
        fs.writeFileSync('./netflix.json', stringMovieList);
        console.log(movieListArr)
    }
};

exports.update = (movieListArr, input, updateInput) => {
    let updateMovie;
    console.log(movieListArr)
    movieListArr.map((movie, index) => {
        if (movie.name === input) {
            updateMovie = index;
        }
    });
    if (updateMovie !== undefined) {
        movieListArr[updateMovie] = {name: updateInput};
        let stringMovieList = JSON.stringify(movieListArr);
        fs.writeFileSync('./netflix.json', stringMovieList);
        console.log(movieListArr)
    }
};
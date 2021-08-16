// require("dotenv").config();
// const mongoose = require("mongoose");

// mongoose.connect(
//     `mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
//    // `mongo://${process.env.DB_USER}:${process.env.DB_URL}:${process.env.DB_PORT}:${process.env.DB_NAME}`,
//     {useNewUrlParser: true, useUnifiedTopology: true},
// );

// const Cat = mongoose.model(
//     "Cat",
//     {
//         name: {type: String, required: true},
//         age: {type: Number},
//     }
// );

// const main = async ()=>{
//     const kitty = new Cat({name: "Fluffy", age: 2});
//     await kitty.save();
//     console.log(kitty);
  
//     // for(let name of ["Larry", "Curly", "Mo"]){
//     //   let c =  new Cat ({name});
//     //   await c.save();
//     //   console.log(c);
//     // }

//     const cats = await Cat.find({});
//     console.log(cats);

//     const updateCats = await Cat.updateOne({name: "Mo"}, {$set: {age: 4}});
//     console.log(updateCats);
//     console.log(await Cat.find({name: "Mo"}));

//     await Cat.deleteMany({name: "Mo"});
//     console.log(await Cat.find({name: "Mo"}));

//     process.exit();

// }

// main();
// // console.log(process.env);

const yargs = require("yargs/yargs");
const {hideBin} = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const mongoose = require("mongoose");
require("dotenv").config();

 mongoose.connect(
     `mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    // `mongo://${process.env.DB_USER}:${process.env.DB_URL}:${process.env.DB_PORT}:${process.env.DB_NAME}`,
     {useNewUrlParser: true, useUnifiedTopology: true},
 );
 const connection = mongoose.connection;
 
 connection.once("open", ()=>{
     console.log("Connected to mongo");
 });

const Cat = new mongoose.model(
     "Cat",
     {
         name: {type: String, required: true},
         age: {type: Number},
     }
 );
const main = async() => {

if (argv.add){
    try{
    const cat = new Cat({name: argv.name, age: argv.age});
    await cat.save();
    console.log(`Adding: ${argv.name}`);
    }catch (error){
        console.log(`Can't add ${argv.name}, already exists`)
    }
} else if (argv.edit) {
    console.Log(`Editing: ${argv.name}-> ${argv.newName}`);
}else if (argv.show) {
    const cats = await Cat.find({});
    console.log(`Showing: ${cats}`);
}else if (argv.remove) {
    console.log(`Removing: ${argv.name}`);
}
}
main();
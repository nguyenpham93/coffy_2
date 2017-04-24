const elas = require("../elastic/index");
const db = require("./getLocation"); 
// elas.createIndex("coffy", (err, stt) => {
//     if (err) console.log(err);
//     console.log(stt);
// });
const async = require("async");

// db.query("select * from coffy.location")
// .then(result => {
//     async.mapSeries(result, merge, (err , res) => {
//         console.log(res.length);
//     });
// });

// db.query("select * from coffy.image")
// .then(result => {
//     async.mapSeries(result, merge, (err , res) => {
//         console.log(res.length);
//     });
// });

// db.query("select * from coffy.district")
// .then(result => {
//     async.mapSeries(result, merge, (err , res) => {
//         console.log(res.length);
//     });
// });

// db.query("select * from coffy.type")
// .then(result => {
//     async.mapSeries(result, merge, (err , res) => {
//         console.log(res.length);
//     });
// });

// elas.deleteIndex("coffy",()=>{

// });

// elas.searchAll("coffy","district", (err,res)=>{
//     console.log(res);
// });

function merge(item, cb) {
    elas.insertDocument ("coffy", "type", item, (err,stt) => {
            console.log("Import succeed");
            cb(null,"success");
        });
}

	elas.search ( "coffy", "location", "trang dich vong", (err,resp)=>{
        console.log(resp);
    } )

// elas.deleteIndex("coffy",() => {

// });
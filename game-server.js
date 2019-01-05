const express = require('express') ;
const path = require('path') ;
const port = 8000 ;
const app = express() ;
// const hbs = require('hbs') ;

app.set('view engine', 'hbs') ;

app.use(express.json()) ;
app.use(express.urlencoded({extended: true})) ;

app.use('/', express.static(path.join(__dirname + '/public' ))) ;

const sql = require('sqlite3').verbose() ;


app.get('/', (req, res) => {
    res.sendFile('index.html') ;
}) ;

app.get('/game', (req, res) => {
    res.sendFile(__dirname + '/public/game.html') ;
}) ;

app.post('/game', (req, res)=> {
    let data = req.body ;
    console.log(data) ;
    
    let db = new sql.Database('./game_data.db' , (err)=> {
        if(err)
        console.log(err.message) ;
        console.log("Connected to the database") ;
    }) ;
    
    db.run('CREATE TABLE IF NOT EXISTS leadboards ( name varchar(25) NOT NULL ,country varchar(70) NOT NULL,score int NOT NULL) ;', (err)=>{
        if(err)
        console.log(err.message) ;
        console.log("Table created successfully") ;
    }) ;
    
    
    db.run(`INSERT INTO leadboards VALUES(?, ?, ?) ;`, [data.gname, data.gcountry, data.gscore], function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log(`A row has been inserted`);
    });
    db.close((err)=>{
        console.log(err) ;
    }) ;
    res.send('ok') ;
}) ;

app.get('/controls' , (req, res) => {
    res.sendFile(__dirname + '/public/instructions.html') ;
}) ;

// hbs.registerHelper('inc', function(index){
//     index++ ;
//     return index ;
// }) ;

app.get('/leadboards', (req, res) => {
    let db1 = new sql.Database('./game_data.db', (err)=> {
        if(err)
        console.log(err.message) ;
        console.log("Connected to the database for retreiving data") ;
    }) ;

    db1.run('CREATE TABLE IF NOT EXISTS leadboards ( name varchar(25) NOT NULL ,country varchar(70) NOT NULL,score int NOT NULL) ;', (err)=>{
        if(err)
        console.log(err.message) ;
        console.log("Table created successfully from get of /leadboard") ;
    }) ;

    var datas ;
    db1.all('SELECT * FROM leadboards ORDER BY score DESC ;', function(err, allRows) {
        
        if(err != null){
            console.log(err.message);
        }
        datas = JSON.stringify(allRows, null , 2) ;
        datas = JSON.parse(datas) ;
        console.log(datas) ;
        res.render('leadboards', {
            datas
        }) ;
    });        
    db1.close((err)=>{
        console.log(err) ;
    });
}) ;

    
app.listen(port, function () {
    console.log("Server started on http://localhost:" + port);
});
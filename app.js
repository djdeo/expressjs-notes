let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();


// View engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', function(req, res){
    res.render('index', {
        title: 'title from app.js'
    });
})

app.listen(3000, function(){
    console.log('Server started on port:3000...');
})
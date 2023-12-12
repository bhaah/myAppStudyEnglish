const express = require('express');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const store = new session.MemoryStore();
const path = require('path');



const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(expressLayouts);

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'veiws'));
app.use(session({
    secret: 'mysecret', // Change this to a unique secret
    resave: false,
    saveUninitialized: true,
    store : store,
    
    
}));

setTimeout(refreshConnection,Math.floor(Math.random() * 10000));
async function refreshConnection(){
  await fetch('https://backend-study-english.onrender.com/api/App/refreshConnection',{method:'POST'}).catch(error=>console.log(error));
  console.log('connection was refreshed by client side!!!');
  setTimeout(refreshConnection,Math.floor(Math.random() * 30000));
 // await fetch('https://mytodolistapp-fve8.onrender.com/').catch(console.log(error));
}

app.use('/', require('./routs/home'));


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

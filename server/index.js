const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()


const app = express()

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.json({messsage: "welcome to mentare"})
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server is running on port - ${PORT}`)
});

const db = require("./models/index")
const { init } = require("./models/role.model")
const Role = db.role;

const URI = process.env.URI;
db.mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Successfully contected to MongoDB")
    initial();
})
.catch(err=>{
    console.log("Connection error", error)
    process.exit()
})


function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "vendor"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'vendor' to roles collection");
        });
  
        new Role({
          name: "advertiser"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'advertiser' to roles collection");
        });
      }
    });
  }


  require('./routes/auth.routes')(app)
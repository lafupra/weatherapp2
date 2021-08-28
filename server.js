const express = require("express");

const app = express();


const router = require("./routes");
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.set("view engine", "hbs");
app.set("views","views");


app.use("/",router);

class name{
   constructor(name){
       this.name = name;
   }
        declare(){
            console.log(this.name)
        }
}




const NAME = new name("akash");


NAME.declare();


app.listen(3000)
const express = require("express");

const app = express();


const router = require("./routes");
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.set("view engine", "hbs");
app.set("views","views");


app.use("/",router);

app.listen(3000)


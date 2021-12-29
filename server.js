const express = require("express");
const port = process.env.PORT||3000;

const app = express();


const router = require("./routes");
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.set("view engine", "hbs");
app.set("views","views");


app.use("/",router);

app.listen(port)


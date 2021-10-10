
const axios = require("axios");
const express = require("express");


const app = express();
app.use(express.json());



exports.page = (req,res)=>{
    res.render("index")
}





exports.cityweather = (req,res) => {
    const city = req.body.city;
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=443a5ccfb03a71a8a44a319f673e19be&units=metric'

   


    if(city===""){
        res.render("index",{
            error : "please enter the city name"
        })
    }else{
        axios.get(url).then((response)=>{
    
            
            
            res.render("index",{
               temp :  "temp: "+response.data.main.temp,
                humidity : "humidity: "+response.data.main.humidity,
               pressure : "pressure: "+response.data.main.pressure,
               feels : "temp feels: "+response.data.main.feels_like,
               visibility :"visibility: "+ response.data.visibility,
               country   : "country: "+response.data.sys.country,
                 city   : "city: "+response.data.name,
              longitude  :  "longitude:  "+response.data.coord.lon,
               latitude : "lati: "+response.data.coord.lat,
               catch :  "wind speed : "+response.data.wind.speed,
               rain :  response.data.rain,
               weather : response.data.weather  
           })
            
        }).catch((err)=>{
            res.render("index",{
                erre : err
            })
        })
      }
    
   
}


exports.nyc = (req,res)=>{
    const url = "https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=RSH0FonzPyqmiU1ZpIzhIImnq613KwVI"

    axios.get(url).then((response)=>{
        res.render("index",{
            name : JSON.stringify(response)
        })
    }).catch((err)=>{
        res.send(err)
    })
}



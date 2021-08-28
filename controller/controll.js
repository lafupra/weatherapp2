
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

    class name{
        setname(name){
            this.name = name;
        }
            declare(){
                console.log(this.name)
            }
    }
    
    
    
    
    const NAME = new name();
    
    NAME.setname(city);
    NAME.declare();
    


    if(city===""){
        res.render("index",{
            error : "please enter the city name"
        })
    }else{
        axios.get(url).then((response)=>{
    
            
            console.log(response)
            res.render("index",{
               name : response.data.main.temp+" is temp in  celsius "+
               response.data.main.humidity+" is humidity  "+
               response.data.main.pressure+" is pressure "+
               response.data.main.feels_like+" feels "+
               response.data.visibility+" visibility "+
               response.data.sys.country+" country "+
               response.data.name+" is city "
    
    
    
    
                      
           })
            
        }).catch((err)=>{
            res.render("index",{
                name : err
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



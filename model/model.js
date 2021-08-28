let valid = if(city===""){
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

module.exports = valid
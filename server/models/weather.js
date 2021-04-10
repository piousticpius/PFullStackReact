const request=require('request-promise');
const API_KEY=["25fac32d70bede287a9474573d6b5a80"];

class weather{
    static retrieveByCity(city,callback)
    {
request({
url:'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+API_KEY+'&units=imperial',
json:true

}).then(function(res){
    callback(res);
}).catch(function(err){
    console.log(err);
    callback({error:'could not reach waether api'});
});
    }
}

module.exports=weather;
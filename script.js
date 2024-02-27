 function toshowweather(){

  var country = document.getElementById("cityname");
  var countryname = country.value;

return new Promise ((resolve, reject)=>{
    console.log(countryname);

    const apikey = "b82f495113770f253e882a7a774377da";
     const api = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
     const url = api + `&appid=${apikey}` + `&q=${countryname}`;

 fetch(url).then((data)=>{

    if(data.status != 200){ reject("invalid city");}
    else if(data.status == 404){

console.log("invalid city");

    }
    else {
   
    return data.json();
    }
}).then((apidata)=>{
    try{

    if(apidata != undefined){

resolve(weatherdatas(apidata));
    }}
    catch (err){
    

        console.log("invalid city name");
    }


}).catch((err)=>{
    reject(err);
    console.log(err);
});

})
 }

 async function weatherdatas(data){
  

var cityname = document.getElementById("elements");

console.log(data);

if(data != undefined){

document.querySelector(".cityname").innerHTML = `Cityname: ${data.name}`;
document.querySelector(".description").innerHTML = `Weather Description: ${data.weather[0].description}`;
document.querySelector(".latitude").innerHTML = `latitude: ${data.coord.lat}`;
document.querySelector(".logitude").innerHTML = `longitude: ${data.coord.lon}`;
document.querySelector(".wind").innerHTML = `wind: ${data.wind.speed}`;
document.querySelector(".humidity").innerHTML = `wind: ${data.main.humidity}`;
document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;


}

else {



    console.log("invalid dsate");
}


 };



    
  
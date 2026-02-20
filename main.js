async function getWeather(){
 const city=document.getElementById("cityInput").value.trim();
 const result=document.getElementById("weatherResult");
 result.textContent = "Hold on!";
 if(!city){result.textContent="Enter a city";return;}
 try{
  const res=await fetch(`https://wttr.in/${city}?format=j1`);
  const data=await res.json();
  const c=data.current_condition[0];
  result.innerHTML=`
   <p>Temperature: ${c.temp_C} °C</p>
   <p>Condition: ${c.weatherDesc[0].value}</p>
   <p>Wind: ${c.windspeedKmph} km/h</p>`;
 }catch{
  result.textContent="Weather unavailable";
 }
}
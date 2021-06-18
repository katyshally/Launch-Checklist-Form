// Write your JavaScript code here!
window.addEventListener("load", function () {
   const submitBtn = document.querySelector("#formSubmit");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel");
   let cargoMass = document.querySelector("input[name=cargoMass");
   let faultyItems = document.getElementById("faultyItems");
 
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(
     function (response) {
       response.json().then(function (json) {
         const pickNewPlanet = () => {
           const missionTarget = document.getElementById("missionTarget");
 
           let randomplanet = Math.floor(Math.random() * json.length);
           missionTarget.innerHTML = `
           <h2>Mission Destination</h2>
           <div id="targets">
            <ol>
              <li>Name: ${json[randomplanet].name}</li>
              <li>Diameter: ${json[randomplanet].diameter}</li>
              <li>Star: ${json[randomplanet].star}</li>
              <li>Distance from Earth: ${json[randomplanet].distance}</li>
              <li>Number of Moons: ${json[randomplanet].moons}</li>
           </ol>
           </div>
           <img src="${json[randomplanet].image}">
           <br> `;
            };
    
            
 
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

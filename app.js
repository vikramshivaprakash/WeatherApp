window.addEventListener('load',()=>{

    let long;
    let lat;
     let temperatureDescription =document.querySelector('.temperature-description');
     let temperatureDegree =document.querySelector('.temperature-degree');
     let locationTimezone =document.querySelector('.location-timezone');


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;



            const proxy = `https://cors-anywhere.herokuapp.com/`;
            const api = `http://api.weatherapi.com/v1/current.json?key=1ba4b5f1d5ff4163b3111910211404&q=${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                   const {temp_c, condition,icon} = data.current;
                   temperatureDegree.textContent =temp_c;
                   temperatureDescription.textContent =data.current.condition.text;
                   locationTimezone.textContent=data.location.tz_id;
                  // setIcons(icon,document.querySelector(".icon"));
                
   });

});

}
// function setIcons(icon,iconID){
//     const skycons = new Skycons({ color:"white"});
//     const currentIcon = icon.replace(/-/g,"_").toUpperCase();
//     skycons.play();
//     return skycons.set(iconID, Skycons[currentIcon]);
// }


    

});
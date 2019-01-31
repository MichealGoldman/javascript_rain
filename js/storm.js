function storm(){
    let audio = new Audio('audio/Light-rain-and-thunder-sounds.mp3');
    // let startRain = setInterval(rain(), 1)
    let startRain = rain(); 
    function rain()
    { 
        for (i = 0; i <= 48.455; i ++){
            audio.play(); 
            console.log(i);
        }
    };
}

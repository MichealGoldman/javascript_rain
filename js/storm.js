function storm(){
    let audio = new Audio('audio/Light-rain-and-thunder-sounds.mp3');

    function setMyInterval(callback, delay, repetitions)
    {
        let x = 0
        let intervalID = window.setInterval(function () {
            callback();
            if(++x === repetitions){
                window.clearInterval(intervalID);
            }
        }, delay);
    }
    audio.play(); 
    setMyInterval(function ()
    {
        var d = new Date();
        console.log(`play_music ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
        audio.play(); 
    },   5000, 108000);

}

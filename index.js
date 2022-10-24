var vedio_window = document.getElementById('video');
var vedio_element = document.createElement('video');

vedio_element.src = '/vedios/naruto ep1.mp4';
vedio_element.controls = true
vedio_window.appendChild(vedio_element);


let episodes = [
    {'episode': "Naruto episode 1",'cover': "./posters/ep1.jpg", filePath: "/vedios/naruto ep1.mp4"},
    {'episode': "Naruto episode 2", 'cover': "./posters/ep2.jpg", filePath: "/vedios/naruto ep2.mp4"},
    {'episode': "Naruto episode 3", 'cover': "./posters/ep3.jpg", filePath: "/vedios/naruto ep3.mp4"},
    {'episode': "Naruto episode 4", 'cover': "./posters/ep4.jpg", filePath: "/vedios/naruto ep4.mp4"},
    {'episode': "Naruto episode 5", 'cover': "./posters/ep5.jpg", filePath: "/vedios/naruto ep5.mp4"},
    {'episode': "Naruto episode 6", 'cover': "./posters/ep6.jpg", filePath: "/vedios/naruto ep6.mp4"},
    {'episode': "Naruto episode 7", 'cover': "./posters/ep7.jpg", filePath: "/vedios/naruto ep7.mp4"},
    {'episode': "Naruto episode 8", 'cover': "./posters/ep8.jpg", filePath: "/vedios/naruto ep8.mp4"},
    {'episode': "Naruto episode 9", 'cover': "./posters/ep9.jpg", filePath: "/vedios/naruto ep9.mp4"},
    {'episode': "Naruto episode 10", 'cover': "./posters/ep10.jpg", filePath: "/vedios/naruto ep10.mp4"}
]


// setting posters.
let poster = Array.from(document.getElementsByClassName('Vedios'));

poster.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = episodes[i].cover;
    element.getElementsByTagName('p')[0].innerText = episodes[i].episode;
})

// Max window
let max_window = document.getElementById('max');



max_window.addEventListener('click', ()=>{
    vedio_element.requestFullscreen()
})

// play / pause button 

let play_button = document.getElementById('masterPlay');

play_button.addEventListener('click', ()=>{
    if (vedio_element.paused || vedio_element.currentTime<=0) {
        play_button.classList.add('fa-circle-pause')
        play_button.classList.remove('fa-circle-play')
        vedio_element.play()
    }
    else{
        play_button.classList.remove('fa-circle-pause')
        play_button.classList.add('fa-circle-play')
        vedio_element.pause()
    }
})

// progress bar
let myProgressBar = document.getElementById('myProgressBar');

vedio_element.addEventListener('timeupdate', ()=> {
    console.log("timeUpdate");

    //Update SeekBar
    progress = parseInt((vedio_element.currentTime/vedio_element.duration)* 100)
    console.log(progress)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    vedio_element.currentTime = myProgressBar.value * vedio_element.duration/100;
})

// vedio index
vedio_index = 0

//forward
let forward = document.getElementById('forward')

forward.addEventListener('click', ()=>{
   if(vedio_index >= 12){
       vedio_index = 0;
   }
   else{
       vedio_index += 1;
   }

   vedio_element.src = `vedios/naruto ep${vedio_index + 1}.mp4`
   vedio_element.currentTime = 0
   vedio_element.play()
})

let backward = document.getElementById('previous')

backward.addEventListener('click', ()=>{
    if(vedio_index >= 12){
        vedio_index = 0;
    }
    else{
        vedio_index -= 1;
    }
 
    vedio_element.src = `vedios/naruto ep${vedio_index - 1}.mp4`
    vedio_element.currentTime = 0
    vedio_element.play()

 })


Array.from(document.getElementsByClassName("Vedios")).forEach((element)=>{
    element.addEventListener('click', (e)=> {

    
        songindex = parseInt(e.target.id);

        // The target event property returns the element that triggered the event.
        // The target property gets the element on which the event originally occurred, opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.
        console.log(e.target);

        // The src attribute specifies the URL of an external script file.
        vedio_element.src = `vedios/naruto ep${vedio_index + 1}.mp4`;

        vedio_element.currentTime = 0;

        vedio_element.play();
    })
})


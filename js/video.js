var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume")
	vol.innerHTML=(video.volume * 100 + "%");
	console.log("Play Video");
	console.log(video)
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	var vid = document.getElementById("myVideo");
	// vid.playbackRate *= .8;
  	console.log("Speed is " + (vid.playbackRate *= 0.8));
} 

function increaseSpeed() {
	var vid1= document.getElementById("myVideo");
	// vid.playbackRate *= 1.25;
	console.log("Speed is "+ (vid1.playbackRate *= 1.25));
} 

function skipAhead() {
	var vid2 = document.getElementById("myVideo");
	vid2.currentTime += 60;
	if (video.ended == true){
		video.play()
	}
	console.log("Current location is "+  video.currentTime);
} 

function mute() { 
	if (video.muted){
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Changing to Unmuted");
		video.muted = false;
		
	}
	else{
		document.getElementById("mute").innerHTML= "Muted";
		video.muted = true;
		console.log("Changed to Muted");
	}
}

function changeVolume() {
	var slider = document.getElementById("volumeSlider");
	video.volume = slider.value/100;
	console.log("Volume is " + slider.value);
	volume.innerHTML = slider.value + '%';
}
       
function gray() { 
	video.classList.add("grayscale")
	// gr_color = "grayscale(100%)";
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale")
	// multicolor_filter = document.body.style.filter = "grayscale(0%)";
	console.log("In color") 
}


// found the grayscale/color function info at https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_js_filter
// i found the mute button info at https://www.permadi.com/tutorial/jsInnerHTMLDOM/index.html
// this is what i used to figure out how to do the before and after for the play and pause buttons http://jsfiddle.net/WW4N6/681/ https://stackoverflow.com/questions/6668577/using-before-css-pseudo-element-to-add-image-to-modal
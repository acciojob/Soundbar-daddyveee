//your JS code here. If required.
const currentAudio = []
const buttons = document.querySelectorAll('.btn').forEach(button=>{
	button.addEventListener('click', function(){
		const audio = new Audio(this.dataset.sound);
		audio.play();
		currentAudio.push(audio)
		
	});

	const stop = document.querySelector('.stop')

	stop.addEventListener('click', function(){
		currentAudio.forEach(audio=>{
			audio.pause();
			audio.currentTime=0;
		});
		currentAudio=[]
	})
})
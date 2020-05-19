import IMask from 'imask'
import  './scss/style.scss'
import './js/contact-form';
import music from './music/keman.mp3'


const play = document.getElementById('play');
let auido = new Audio();
let isPlaying = true
auido.src = music

window.onload = () => {
	auido.pause();
	play.addEventListener('click', () => {
		if(isPlaying){
			auido.pause()
			isPlaying = false
			document.querySelector('#music-id').className = 'music-box music-not'
		}else {
			auido.play()
			isPlaying= true
			document.querySelector('#music-id').classList.remove('music-not')
		}
	})
}

navigator.getBattery().then(function(battery){
	const batteryBox = document.querySelector('.battery-content')
	function currentBatteryInfo(){
		const batteryte = battery.level*100
		batteryBox.style.width = `${batteryte}%`

		if(!battery.charging) {
			if(batteryte >= 65 ) {
				batteryBox.style.backgroundColor = 'green'
			}else if(batteryte >= 40) {
				batteryBox.style.backgroundColor = 'orange'
			}else if (batteryte <= 39) {
				batteryBox.style.backgroundColor = 'red'
			}
		}else {
			batteryBox.style.backgroundColor = 'green';
			batteryBox.innerHTML = '<ion-icon name="flash-outline"></ion-icon>'
		}
	}	
  currentBatteryInfo();
});
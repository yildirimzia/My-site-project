import IMask from 'imask'
const css = require('./scss/style.scss')
import './js/contact-form';
import music from './music/keman.mp3'


const play = document.getElementById('play');
let auido = new Audio();
let isPlaying = true
auido.src = music




window.onload = () => {
	auido.play();


	play.addEventListener('click', () => {
		if(isPlaying){
			auido.pause()
			console.log('true');
			isPlaying = false
			document.querySelector('#music-id').className = 'music-box music-not'
		}else {
			auido.play()
			console.log('false');
			isPlaying= true
			document.querySelector('#music-id').classList.remove('music-not')
		}
	})
}

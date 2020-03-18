const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart () {
		console.log('The timer has started');
	},
	onTick () {
		console.log('Tick!');
	},
	onComplete () {
		console.log('Timer complete!');
	}
});

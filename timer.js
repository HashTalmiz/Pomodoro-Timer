class Timer {
	constructor (durationInput, startButton, pauseButton, callbacks) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		this.durationInput.addEventListener('click', this.pause);
		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}
	get timeRemaining () {
		return parseFloat(durationInput.value);
	}
	set timeRemaining (time) {
		durationInput.value = time;
	}

	start = () => {
		if (this.onStart) this.onStart();

		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};

	tick = () => {
		if (this.timeRemaining > 0) {
			if (this.onTick) this.onTick();
			this.timeRemaining -= 1;
		}
		else {
			if (this.onComplete) this.onComplete();
			this.pause();
		}
	};
	pause = () => {
		clearInterval(this.interval);
	};
}

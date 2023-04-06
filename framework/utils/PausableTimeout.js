class PausableTimeout {
  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
    this.remaining = delay;

    this.resume();
  }

  resume() {
    this.running = true;
    this.started = new Date();
    this.id = setTimeout(() => {
      this.callback();
    }, this.remaining);
  }

  pause() {
    this.running = false;
    clearTimeout(this.id);
    this.remaining -= new Date() - this.started;
  }

  clear() {
    this.running = false;
    this.remaining = this.delay;
    clearTimeout(this.id);
  }

  getTimeLeft() {
    if (this.running) {
      this.pause();
      this.resume();
    }

    return this.remaining;
  }

  getStateRunning() {
    return this.running;
  }
}

export default PausableTimeout;

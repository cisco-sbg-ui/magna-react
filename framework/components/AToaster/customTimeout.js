class PausableTimeout {
  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
    this.remaining = delay;

    this.start();
  }

  start() {
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
    clearTimeout(this.id);
  }

  getTimeLeft() {
    if (this.running) {
      this.pause();
      this.start();
    }

    return this.remaining;
  }

  getStateRunning() {
    return this.running;
  }
}

export default PausableTimeout;

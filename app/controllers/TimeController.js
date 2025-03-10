export class ClockController {
  constructor() {
    this.updateClock()
    this.startClock()
  }
  async updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours < 10 ? Number("0" + hours) : hours;
    minutes = minutes < 10 ? Number("0" + minutes) : minutes;
    seconds = seconds < 10 ? Number("0" + seconds) : seconds;
    const timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").textContent = timeString;
  }
  startClock() {
    setInterval(this.updateClock.bind(this), 1000);
  }
}
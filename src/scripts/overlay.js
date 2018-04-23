class Overlay {
  constructor(map) {
    // CanvasOverlay.prototype = new google.maps.OverlayView();
    // this.overlay = new CanvasOverlay(map);
    this.overlay = new google.maps.OverlayView();
    this.overlay.draw = function() {};
    this.overlay.setMap(map);

    this.context = null;

    this.timer = this.timer.bind(this);
    this.addCircle = this.addCircle.bind(this);
  }

  addCanvas() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.width = "100%";
    canvas.height = "100%";
    console.log(this.overlay);
    this.overlay.getPanes().overlayLayer.appendChild(canvas);

    this.context = canvas.getContext("2d");

    this.timer();
  }

  timer() {
    this.addCircle();
    setTimeout(this.timer, 1000);
  }

  addCircle() {
    const x = 640 * Math.random();
    const y = 480 * Math.random();
    const r = 10;

    this.context.fillStyle = "rgba(255, 0, 0, 0.4)";
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, true);
    this.context.closePath();
    this.context.fill();
  }
}

// function CanvasOverlay(map) {
//   this.setMap(map);
// }

export default Overlay;

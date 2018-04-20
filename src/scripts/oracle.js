import Map from "./map.js";

class Oracle {
  constructor() {
    this.map = new Map();
    this.mode = "none";
    this.trainButton = document.getElementsByClassName("train")[0];
    this.airplaneButton = document.getElementsByClassName("airplane")[0];
    this.boatButton = document.getElementsByClassName("boat")[0];
  }

  initialize() {
    this.trainButton.addEventListener("click", () => {
      this.changeMode("train");
      this.map.setCenter(40.706648, -73.887235);
      this.map.setZoom(12);

      this.airplaneButton.classList.remove("airplane-active");
      this.airplaneButton.classList.add("airplane");

      this.boatButton.classList.remove("boat-active");
      this.boatButton.classList.add("boat");

      this.trainButton.classList.remove("train");
      this.trainButton.classList.add("train-active");
    });

    this.airplaneButton.addEventListener("click", () => {
      this.changeMode("airplane");
      this.map.setCenter(34.403065, -92.181998);
      this.map.setZoom(4);

      this.trainButton.classList.remove("train-active");
      this.trainButton.classList.add("train");

      this.boatButton.classList.remove("boat-active");
      this.boatButton.classList.add("boat");

      this.airplaneButton.classList.remove("airplane");
      this.airplaneButton.classList.add("airplane-active");
    });

    this.boatButton.addEventListener("click", () => {
      this.changeMode("boat");
      this.map.setCenter(34.403065, -92.181998);
      this.map.setZoom(4);

      this.trainButton.classList.remove("train-active");
      this.trainButton.classList.add("train");

      this.airplaneButton.classList.remove("airplane-active");
      this.airplaneButton.classList.add("airplane");

      this.boatButton.classList.remove("boat");
      this.boatButton.classList.add("boat-active");
    });
  }

  changeMode(mode) {
    this.mode = mode;
  }
}

export default Oracle;

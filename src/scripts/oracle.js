import Map from "./map.js";

class Oracle {
  constructor() {
    this.map = new Map();
    this.mode = "none";
  }

  changeMode(mode) {
    this.mode = mode;
  }
}

export default Oracle;

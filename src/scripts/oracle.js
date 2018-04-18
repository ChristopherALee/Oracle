import Map from "./map.js";

class Oracle {
  constructor() {
    this.map = new Map();
    this.mode = "MTA";
  }

  setCenter(lat, lng) {
    this.map.setCenter(new google.maps.LatLng(lat, lng));
  }
}

export default Oracle;

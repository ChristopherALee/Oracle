import Oracle from "./scripts/oracle.js";

window.initMap = () => {
  // Styles a map in night mode.
  const initialize = new Oracle();
  var map = initialize.map;

  const set = document.getElementsByClassName("set-center")[0];
  set.addEventListener("click", () => {
    initialize.map.setCenter(40.736648, -73.897235);
  });
};

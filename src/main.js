import Oracle from "./scripts/oracle.js";

window.initMap = () => {
  // Styles a map in night mode.
  const app = new Oracle();
  var map = app.map;
  var overlay = app.overlay;

  // Initializing buttons
  app.initialize();
};

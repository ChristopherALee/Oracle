import Oracle from "./scripts/oracle.js";

window.initMap = () => {
  // Styles a map in night mode.
  const app = new Oracle();
  var map = app.map;

  // Initializing buttons
  app.initialize();
};

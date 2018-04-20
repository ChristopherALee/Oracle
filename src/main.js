import Oracle from "./scripts/oracle.js";

window.initMap = () => {
  // Styles a map in night mode.
  const initialize = new Oracle();
  var map = initialize.map;

  // Initializing buttons
  const trainButton = document.getElementsByClassName("train")[0];
  const airplaneButton = document.getElementsByClassName("airplane")[0];
  const boatButton = document.getElementsByClassName("boat")[0];

  trainButton.addEventListener("click", () => {
    initialize.changeMode("train");
    initialize.map.setCenter(40.706648, -73.887235);
    initialize.map.setZoom(12);

    airplaneButton.classList.remove("airplane-active");
    airplaneButton.classList.add("airplane");

    boatButton.classList.remove("boat-active");
    boatButton.classList.add("boat");

    trainButton.classList.remove("train");
    trainButton.classList.add("train-active");
  });

  airplaneButton.addEventListener("click", () => {
    initialize.changeMode("airplane");
    initialize.map.setCenter(34.403065, -92.181998);
    initialize.map.setZoom(4);

    trainButton.classList.remove("train-active");
    trainButton.classList.add("train");

    boatButton.classList.remove("boat-active");
    boatButton.classList.add("boat");

    airplaneButton.classList.remove("airplane");
    airplaneButton.classList.add("airplane-active");
  });

  boatButton.addEventListener("click", () => {
    initialize.changeMode("boat");
    initialize.map.setCenter(34.403065, -92.181998);
    initialize.map.setZoom(4);

    trainButton.classList.remove("train-active");
    trainButton.classList.add("train");

    airplaneButton.classList.remove("airplane-active");
    airplaneButton.classList.add("airplane");

    boatButton.classList.remove("boat");
    boatButton.classList.add("boat-active");
  });
};

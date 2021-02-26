import ApiPokeiController from "./Controllers/ApiPokeiController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  //valuesController = new ValuesController();
  apiPokeiController = new ApiPokeiController();
}

window["app"] = new App();

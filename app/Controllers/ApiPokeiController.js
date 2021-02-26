import { apiPokeiService } from "../Services/ApiPokeiService.js";
import { ProxyState } from "../AppState.js"
//import { pokeiApi } from "../Services/AxiosService.js";

function _drawPokeiApi() {
    let pokei = ProxyState.apiPokei
    let template = ""
    pokei.forEach(p => template += `<li onclick="app.apiPokeiController.setActivePokei('${p.name}')"> ${p.name}</li>`)
    document.getElementById("api-pokei").innerHTML = template;
}

function _drawActivePoke() {
    if (ProxyState.activePokei) {
        document.getElementById("active-poke").innerHTML = ProxyState.activePokei.ActiveTemplate
    } else {
        document.getElementById("active-poke").innerHTML = ""
    }
}
export default class ApiPokeiController {

    constructor() {
        console.log("hello from the PokeiController");
        ProxyState.on("apiPokei", _drawPokeiApi)
        ProxyState.on("activePokei", _drawActivePoke)
    }


    setActivePokei(name) {
        console.log(name);
        apiPokeiService.setActivePokei(name)
    }
}
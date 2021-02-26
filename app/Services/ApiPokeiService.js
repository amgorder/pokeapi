import { ProxyState } from "../AppState.js";
import Poke from "../Models/Poke.js";
import { pokeiApi } from "./AxiosService.js";
class ApiPokeiService {

    constructor() {

        console.log("hello from the PokeiService");
        this.getApiPokei()
    }

    async getApiPokei() {
        try {
            const res = await pokeiApi.get("")
            console.log(res);
            ProxyState.apiPokei = res.data.results
        } catch (error) {
            console.error(error)
        }
    }

    async setActivePokei(name) {
        try {
            let res = await pokeiApi.get(name)
            console.log(res);
            ProxyState.activePokei = new Poke(res.data)
        } catch (error) {
            console.error(error)
        }
    }

}

export const apiPokeiService = new ApiPokeiService();
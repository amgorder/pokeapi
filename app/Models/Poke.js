
export default class Poke {
    constructor(data) {
        this.name = data.name
        this.img = data.img || data.sprites.front_default
    }



    get ActiveTemplate() {

        return /*html*/ `
    <div class="card">
                    <img class="card-img-top" src="holder.js/100x180/" alt="">
                    <div class="card-body">
                        <h4 class="card-title">Name:${this.name} </h4>
                        <img src="${this.img}">
                        <p class="card-text">Text</p>
                    </div>
                </div>
    
    `
    }
}
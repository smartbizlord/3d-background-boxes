export const Card = "mumu"

export class Cardio {
    constructor(arr) {
        this.data = arr;
        this.active = 1;
    }
    addCardOrg(card) {
        this.data = [...this.data, card];
        return this;
    }
    addCard(card) {
        this.data = [...this.data, ...card];
        return this;
    }
    setActive(index) {
        if(this.data == undefined || this.data == null || this.data == "" || index >= this.data.length + 1 || this.data < 1) {
            throw new Error("Cannot set Data that does not exist");
            return
        }else  {
            this.data = this.data
            this.active = index || this.active;
            return this;
        }
    }
    changeSrc(index, value) {
        if(this.data == undefined || this.data == null || this.data == "" || index >= this.data.length) {
            throw new Error("Cannot set Data that does not exist");
            return
        }else  {
            this.data[index].src = value || this.data[index].src;
            return this;
        }
    }
    changeAlt(index, value) {
        if(this.data == undefined || this.data == null || this.data == "" || index >= this.data.length) {
            throw new Error("Cannot set Data that does not exist");
            return
        }else  {
            this.data[index].alt = value || this.data[index].alt;
            return this;
        }
    }
}


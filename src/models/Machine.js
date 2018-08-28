
export default class Machine {
    constructor(reqData) {
        this.name = reqData.name
        this.description = reqData.description
        this.items = reqData.items
        this.currency = reqData.currency
        this.total = reqData.total
        
    }

    addCurrency(type) {
        if (this.currency[type]) {
            this.total -= this.currency[type]
        }
    }
}
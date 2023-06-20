import { makeObservable, observable, action } from "mobx";
import { IProduct } from "../interfaces/IProduct";

class CartStore {
    data: IProduct[] = [];

    constructor() {
        this.addCart = this.addCart.bind(this);
        makeObservable(this, {
            data: observable,
            addCart: action
        });
    }

    addCart(obj: IProduct) {
        this.data = [...this.data, obj];
    }
}

export default new CartStore();

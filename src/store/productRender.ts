import { makeObservable, observable, action } from "mobx";
import { IProduct } from "../interfaces/IProduct";

class CartStore {
    detail: IProduct[] = [];

    constructor() {
        this.renderProduct = this.renderProduct.bind(this);
        makeObservable(this, {
            detail: observable,
            renderProduct: action
        });
    }

    renderProduct(obj: IProduct) {
        this.detail = [obj];
    }
}

export default new CartStore();

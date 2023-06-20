import { makeObservable, observable, action } from "mobx";

interface ICart {
    img: string;
    id: number;
    name: string
    price: number;
    favorite: boolean;
    category: string;
}

class CartStore {
    detail: ICart[] = [];

    constructor() {
        this.renderProduct = this.renderProduct.bind(this);
        makeObservable(this, {
            detail: observable,
            renderProduct: action
        });
    }

    renderProduct(obj: ICart) {
        this.detail = [obj];
    }
}

export default new CartStore();

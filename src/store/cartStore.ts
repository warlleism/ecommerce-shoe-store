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
    data: ICart[] = [];

    constructor() {
        this.addCart = this.addCart.bind(this);
        makeObservable(this, {
            data: observable,
            addCart: action
        });
    }

    addCart(obj: ICart) {
        this.data = [...this.data, obj];
    }
}

export default new CartStore();

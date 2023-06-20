import { makeObservable, observable, action } from "mobx";
import { IProduct } from "../interfaces/IProduct";

class CartStore {
    data: IProduct[] = [];

    constructor() {
        this.addCart = this.addCart.bind(this);
        this.setQtd = this.setQtd.bind(this);
        makeObservable(this, {
            data: observable,
            addCart: action,
            setQtd: action,
        });
    }

    addCart(obj: IProduct) {
        this.data = [...this.data, obj];
        console.log(obj)
    }

    setQtd(id: number, simbol: string) {
        const operation = simbol === '+' ? 1 : -1;
        this.data = this.data.map((product) => {
            if (product.id === id) {
                const updatedQtd = product.qtd + operation;
                if (updatedQtd >= 1) {
                    return {
                        ...product,
                        price: product.price + (operation * product.fixprice),
                        qtd: updatedQtd
                    };
                }
            }
            return product;
        });
    }

}

export default new CartStore();


class Store {
    listProduct;
    constructor() {
        this.listProduct=[]
    }
    addProduct(newProduct){
        this.listProduct.push(newProduct)
    }
    finAll(){
        return this.listProduct;
    }
    remove(index){
        this.listProduct.splice(index,1)
    }
    edit(index, newProduct){
        this.listProduct[index] = newProduct;
    }
}


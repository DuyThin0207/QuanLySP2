let shop = new Store();

function main() {
    let sp1 = new Stoner(1, "THC", " 120 gram ", "350/g");
    let sp2 = new Stoner(2, "LSD", " 99 tab ", "600/tab");
    let sp3 = new Stoner(3, "MDMA", " 20 pill ", "500/pill");
    shop.addProduct(sp1);
    shop.addProduct(sp2);
    shop.addProduct(sp3);
    shop.remove(4)

    let storeProducts = shop.finAll();
    for (let i = 0; i < storeProducts.length; i++) {
        console.log(storeProducts[i]);
    }
}

main()

function showAll() {
    let listProduct = shop.finAll()
    let stringHtml = ``;
    for (let i = 0; i < listProduct.length; i++) {
        stringHtml += ` <tr>
            <td>${listProduct[i].num}</td>
            <td>${listProduct[i].product}</td>
            <td>${listProduct[i].quantity}</td>
            <td>${listProduct[i].price}</td>
            <td><button onclick="formEdit(${i})">Edit</button></td>
            <td><button onclick="removeProduct(${i})">Delete</button></td>
        </tr>
        `
    }
    console.log(stringHtml)
    document.getElementById("list-product").innerHTML = stringHtml;
}

showAll()

function showFormAdd() {
    document.getElementById("form-add").innerHTML = `
        <h4>Form Add</h4>
        <input type="number" id="num" placeholder="number of things">
        <br>
        <input type="text" id="product" placeholder="Product's name">
        <br>
        <input type="text" id="quantity" placeholder="The remaining amount">
        <br>
        <input type="text" id="price" placeholder="What price">
        <br>
        <button onclick="save()">Save</button>
`
}

function save() {
    let num = +document.getElementById("num").value
    let product = document.getElementById("product").value
    let quantity = document.getElementById("quantity").value
    let price = document.getElementById("price").value
    let newProduct = new Stoner(num, product, quantity, price)
    shop.addProduct(newProduct);
    showAll()
    document.getElementById("form-add").innerHTML='';
}

function removeProduct(index) {
    let checkRemove = confirm("Are you sure?")
    if (checkRemove) {
        shop.remove(index)
        showAll()
    }
}

function formEdit(index) {
    let lisProduct = shop.finAll()
    let product = lisProduct[index];
    document.getElementById("form-edit").innerHTML = `
    <h3>Form Edit</h3>
        <input type="number" id="numE" placeholder="number of things" value="${product.num}">
        <br>
        <input type="text" id="productE" placeholder="Product's name" value="${product.product}">
        <br>
        <input type="text" id="quantityE" placeholder="The remaining amount" value="${product.quantity}">
        <br>
        <input type="text" id="priceE" placeholder="What price" value="${product.price}">
        <br>
        <button onclick="saveEdit( ${index} )">Save</button>
    `
}

function saveEdit(index) {
    let num = +document.getElementById("numE").value;
    let product = document.getElementById("productE").value;
    let quantity = +document.getElementById("quantityE").value;
    let price = +document.getElementById("priceE").value;
    let newProduct = new Stoner(num, product, quantity, price);
    shop.edit(index, newProduct);
    showAll();
    document.getElementById("form-edit").innerHTML = '';
}
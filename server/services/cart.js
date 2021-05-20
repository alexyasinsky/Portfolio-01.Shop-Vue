function _search(arr, id) {
    return arr.find(item => item.id == id);
}

module.exports = {
    add(cart, item) {
        cart.content.push(item);
        cart.totalQuantity += 1;
        cart.totalPrice += item.price;
        return cart;
    },
    change(cart, id, quantity) { //quantity == 1/-1
        let find = _search(cart.content, id);
        find.quantity += quantity;
        cart.totalQuantity += quantity;
        if (quantity == 1) {
          cart.totalPrice += find.price;
        } else {
          cart.totalPrice -= find.price;
        }
        return cart;
    },
    delete(cart, id) {
        let find = _search(cart.content, id);
        cart.content.splice(cart.content.indexOf(find), 1);
        cart.totalQuantity -= 1;
        cart.totalPrice -= find.price;
        return cart;
    }
}

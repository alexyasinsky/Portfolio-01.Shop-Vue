function _search(arr, id) {
    return arr.find(item => item.id == id);
}

module.exports = {
    add(cart, item) {
        cart.content.push(item);
        return cart;
    },
    change(cart, id, quantity) { //quantity == 1/-1
        let find = _search(cart.content, id);
        find.quantity += quantity;
        return cart;
    },
    delete(cart, id) {
        let find = _search(cart.content, id);
        cart.content.splice(cart.content.indexOf(find), 1);
        return cart;
    }
}

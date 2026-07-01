function c(id, value) {
    let element = document.getElementById(id);
    let currentQty = parseInt(element.innerText) || 0;
    let newQty = currentQty + value;

    if (newQty < 0) {
        newQty = 0;
    }

    element.innerText = newQty;
}

function c(id, change) {
    let qtyElement = document.getElementById(id);
    let currentQty = parseInt(qtyElement.innerText);
    let newQty = currentQty + change;

    // منع الكمية من النزول عن 5 حبات (أقل من شد واحد)
    if (newQty < 5) {
        return; 
    }

    qtyElement.innerText = newQty;
}

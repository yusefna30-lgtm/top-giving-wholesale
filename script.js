function c(id, value) {
    let element = document.getElementById(id);
    let currentQty = parseInt(element.innerText) || 0;
    let newQty = currentQty + value;
    
    if (newQty < 0) {
        newQty = 0;
    }
    
    element.innerText = newQty;
}
function add(productName, quantityId, buttonElement) {
    // جلب كمية المنتج بناءً على الـ ID الممرر
    let qtyElement = document.getElementById(quantityId);
    if (!qtyElement) {
        console.error("خطأ: لم يتم العثور على عنصر الكمية بالـ ID المحدد:", quantityId);
        return;
    }
    
    let quantity = parseInt(qtyElement.innerText) || 0;
    
    // التحقق من أن الكمية أكبر من صفر قبل الإضافة
    if (quantity <= 0) {
        alert("يرجى تحديد كمية أكبر من الصفر أولاً.");
        return;
    }

    // هنا يمكنك ربط السلة (مثال بسيط لإظهار رسالة بالمنتج المضاف)
    alert("تمت إضافة الموديل: " + productName + " | الكمية: " + quantity);
    
    // يمكنك لاحقاً إضافة كود إرسال البيانات إلى سلة المشتريات أو الواتساب هنا
}

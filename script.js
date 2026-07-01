// 1. مصفوفة السلة لتخزين كافة المنتجات المضافة
let orderCart = [];

// 2. دالة التحكم بالكمية (+ و -) التي كانت لديك مسبقاً
function c(id, value) {
    let element = document.getElementById(id);
    if (!element) return;
    let currentQty = parseInt(element.innerText) || 0;
    let newQty = currentQty + value;

    if (newQty < 0) {
        newQty = 0;
    }

    element.innerText = newQty;
}

// 3. دالة إضافة المنتج إلى السلة عند الضغط على "إضافة للطلب"
function add(productName, quantityId, buttonElement) {
    let qtyElement = document.getElementById(quantityId);
    if (!qtyElement) return;

    let quantity = parseInt(qtyElement.innerText) || 0;

    if (quantity <= 0) {
        alert("يرجى تحديد الكمية أولاً قبل الإضافة.");
        return;
    }

    // التحقق إذا كان الموديل مضافاً مسبقاً لتحديث كميته، أو إضافته كجديد
    let existingProduct = orderCart.find(item => item.name === productName);
    
    if (existingProduct) {
        existingProduct.quantity = quantity; 
    } else {
        orderCart.push({
            name: productName,
            quantity: quantity
        });
    }

    // تغيير بصري مؤقت على الزر لتأكيد الحفظ في السلة
    let originalText = buttonElement.innerText;
    buttonElement.innerText = "✓ أُضيف للسلة";
    buttonElement.style.backgroundColor = "#27ae60"; 
    
    setTimeout(() => {
        buttonElement.innerText = originalText;
        buttonElement.style.backgroundColor = ""; 
    }, 1200);

    console.log("السلة الحالية:", orderCart);
}

// 4. دالة إرسال السلة كاملة إلى الواتساب
function sendOrderToWhatsApp() {
    if (orderCart.length === 0) {
        alert("سلتك فارغة حالياً، يرجى إضافة منتجات أولاً.");
        return;
    }

    let whatsappNumber = "966560564719";
    
    // بداية نص الرسالة
    let message = `مرحباً TOP GIVING،\nأود طلب المنتجات التالية (جملة):\n\n`;

    // تكرار المنتجات المضافة داخل السلة وصياغتها في الرسالة
    orderCart.forEach((item, index) => {
        message += `${index + 1}. 🔹 الموديل: ${item.name}\n📦 الكمية: ${item.quantity} رزمة/باقة\n\n`;
    });

    message += `شكراً لكم.`;

    // ترميز الرسالة وفتح الرابط
    let encodedMessage = encodeURIComponent(message);
    let whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

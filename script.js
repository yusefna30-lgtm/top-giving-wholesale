// 1. مصفوفة السلة لتخزين كافة المنتجات المضافة
let orderCart = [];

// 2. دالة التحكم بالكمية (+ و -) 
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

// 3. دالة إضافة المنتج إلى السلة وتحديث العداد
function add(productName, quantityId, buttonElement) {
    let qtyElement = document.getElementById(quantityId);
    if (!qtyElement) return;

    let quantity = parseInt(qtyElement.innerText) || 0;

    if (quantity <= 0) {
        alert("يرجى تحديد الكمية أولاً قبل الإضافة.");
        return;
    }

    let existingProduct = orderCart.find(item => item.name === productName);
    
    if (existingProduct) {
        existingProduct.quantity = quantity; 
    } else {
        orderCart.push({
            name: productName,
            quantity: quantity
        });
    }

    // تأثير بصري مؤقت على زر الإضافة
    let originalText = buttonElement.innerText;
    buttonElement.innerText = "✓ أُضيف للسلة";
    buttonElement.style.backgroundColor = "#27ae60"; 
    
    setTimeout(() => {
        buttonElement.innerText = originalText;
        buttonElement.style.backgroundColor = ""; 
    }, 1200);

    // تحديث واجهة السلة المرئية
    updateCartUI();
}

// 4. دالة تحديث الأرقام والعدادات في واجهة السلة
function updateCartUI() {
    let cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        // حساب إجمالي عدد الباقات المضافة
        let totalItems = orderCart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.innerText = totalItems;
    }
}

// 5. دالة تصفير وإفراغ السلة بالكامل
function clearCart() {
    if (orderCart.length === 0) {
        alert("السلة فارغة بالفعل.");
        return;
    }
    
    if (confirm("هل أنت متأكد من رغبتك في إفراغ وتصفير السلة؟")) {
        orderCart = [];
        updateCartUI();
        alert("تم تصفير السلة بنجاح.");
    }
}

// 6. دالة إرسال السلة كاملة إلى الواتساب
function sendOrderToWhatsApp() {
    if (orderCart.length === 0) {
        alert("سلتك فارغة حالياً، يرجى إضافة منتجات أولاً.");
        return;
    }

    let whatsappNumber = "966560564719";
    
    let message = `مرحباً TOP GIVING،\nأود طلب المنتجات التالية (جملة):\n\n`;

    orderCart.forEach((item, index) => {
        message += `${index + 1}. 🔹 الموديل: ${item.name}\n📦 الكمية: ${item.quantity} رزمة/باقة\n\n`;
    });

    message += `شكراً لكم.`;

    let encodedMessage = encodeURIComponent(message);
    let whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

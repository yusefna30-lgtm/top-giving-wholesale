function add(productName, quantityId, buttonElement) {
    // 1. جلب عنصر الكمية
    let qtyElement = document.getElementById(quantityId);
    if (!qtyElement) return;

    let quantity = parseInt(qtyElement.innerText) || 0;

    // 2. التحقق من وجود كمية
    if (quantity <= 0) {
        alert("يرجى تحديد الكمية أولاً قبل الإضافة.");
        return;
    }

    // 3. رقم الواتساب المعتمد لاستقبال الطلبات
    let whatsappNumber = "966560564719"; 
    
    // 4. صياغة الرسالة التلقائية لطلبات الجملة
    let message = `مرحباً TOP GIVING،\nأود طلب المنتج التالي (جملة):\n\n🔹 الموديل: ${productName}\n📦 الكمية: ${quantity} رزمة / باقة`;

    // ترميز النص ليتوافق مع الروابط
    let encodedMessage = encodeURIComponent(message);

    // 5. فتح رابط الواتساب مباشرة
    let whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

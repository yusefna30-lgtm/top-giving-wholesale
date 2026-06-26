         function filterProducts(cat) {
            document.querySelectorAll('.card').forEach(c => { c.classList.remove('show'); if(c.classList.contains(cat)) c.classList.add('show'); });
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.getElementById('tab-' + cat).classList.add('active');
        }
        function v(id, path, el) { let img = document.getElementById(id); if(img) img.src = path; let dots = el.parentElement.querySelectorAll('.dot'); dots.forEach(d => d.classList.remove('active')); el.classList.add('active'); }
        function c(id, val) { let el = document.getElementById(id); if(!el) return; let curr = parseInt(el.innerText); let min = (id.includes('qsh')) ? 20 : (id.includes('qsea') ? 12 : 16); if (curr + val >= min) el.innerText = curr + val; }
        
        let order = [];
        function add(name, qtyId, btn) { let qty = parseInt(document.getElementById(qtyId).innerText); order.push({ name: name, qty: qty }); document.getElementById('cart-bar').style.display = 'block'; updateTotal(); btn.innerText = "تمت ✅"; setTimeout(() => btn.innerText = "إضافة", 1500); }
        function updateTotal() { let total = order.reduce((sum, i) => sum + i.qty, 0); document.getElementById('cart-info').innerText = `الإجمالي: ${total} حبة`; }
        function clearCart() { order = []; document.getElementById('cart-bar').style.display = 'none'; }
        function send() { if(order.length === 0) return; let msg = "📦 *طلب جديد من TOP GIVING* 📦\n\n"; order.forEach(i => { msg += `• *${i.name}*: ${i.qty} حبة\n`; }); window.open(`https://wa.me/966560564719?text=${encodeURIComponent(msg)}`, '_blank'); }
    


const lo = document.getElementById("login")
const cont = document.getElementById("container")
const regi = document.getElementById("register-box")

const emai = document.getElementById("email")
const pass = document.getElementById("password")
const reg = document.getElementById("register-btn")

const logi = document.getElementById("sign");
logi.addEventListener("click", function(e) {
    e.preventDefault(); 
    cont.style.display = "none";
    regi.style.display = "block";
});

const backt = document.getElementById("go-login");
backt.addEventListener("click", function(e) {
    e.preventDefault(); 
    cont.style.display = "block";
    regi.style.display = "none";
});


lo.addEventListener("click",function(e){
    const emailInput = document.getElementById("email");
    const passInput =document.getElementById("password")
    emailInput.classList.remove('error')
    emailInput.textContent ="";

    if (emailInput.value.trim()===""){
        e.preventDefault();
        emailInput.classList.add('error')
        const errorMessage = document.createElement('div');
        errorMessage.textContent = "Please Enter Your Full Name";
        errorMessage.style.position = "absolute";
        errorMessage.style.backgroundColor = "red";
        errorMessage.style.color = "white";
        errorMessage.style.padding = "5px";
        errorMessage.style.borderRadius = "5px";
        errorMessage.style.top = `${emailInput.offsetTop - 40}px`;
        errorMessage.style.left = `${emailInput.offsetLeft}px`;
        errorMessage.style.zIndex = "1000";
        emailInput.parentNode.appendChild(errorMessage);

        setTimeout(() => {
            errorMessage.remove();
        }, 3000); 
    }
})


lo.addEventListener("click",function(e){
    const emailInput = document.getElementById("email");
    const passInput =document.getElementById("password")
    emailInput.classList.remove('error')
    emailInput.textContent ="";

    if (passInput.value.trim()===""){
        e.preventDefault();
        passInput.classList.add('error')
        const errorMessage = document.createElement('div');
        errorMessage.textContent = "Please Enter Your Password";
        errorMessage.style.position = "absolute";
        errorMessage.style.backgroundColor = "red";
        errorMessage.style.color = "white";
        errorMessage.style.padding = "5px";
        errorMessage.style.borderRadius = "5px";
        errorMessage.style.top = `${passInput.offsetTop - 40}px`;
        errorMessage.style.left = `${passInput.offsetLeft}px`;
        errorMessage.style.zIndex = "1000";
        passInput.parentNode.appendChild(errorMessage);

        setTimeout(() => {
            errorMessage.remove();
        }, 3000); 
    }
})


reg.addEventListener("click",function(e){
    const regnas = document.getElementById("regna");

    regnas.classList.remove('error')
    regnas.textContent ="";

    if (regnas.value.trim()===""){
        e.preventDefault();
        regnas.classList.add('error')
        const errorMessage = document.createElement('div');
        errorMessage.textContent = "Please Enter Your Full Name";
        errorMessage.style.position = "absolute";
        errorMessage.style.backgroundColor = "red";
        errorMessage.style.color = "white";
        errorMessage.style.padding = "5px";
        errorMessage.style.borderRadius = "5px";
        errorMessage.style.top = `${regnas.offsetTop - 40}px`;
        errorMessage.style.left = `${regnas.offsetLeft}px`;
        errorMessage.style.zIndex = "1000";
        regnas.parentNode.appendChild(errorMessage);

        setTimeout(() => {
            errorMessage.remove();
        }, 3000); 
    }
})

reg.addEventListener("click",function(e){
    const regE = document.getElementById("reg-email");

    regE.classList.remove('error')
    regE.textContent ="";

    if (regE.value.trim()===""){
        e.preventDefault();
        regE.classList.add('error')
        const errorMessage = document.createElement('div');
        errorMessage.textContent = "Please Enter Your Email";
        errorMessage.style.position = "absolute";
        errorMessage.style.backgroundColor = "red";
        errorMessage.style.color = "white";
        errorMessage.style.padding = "5px";
        errorMessage.style.borderRadius = "5px";
        errorMessage.style.top = `${regE.offsetTop - 40}px`;
        errorMessage.style.left = `${regE.offsetLeft}px`;
        errorMessage.style.zIndex = "1000";
        regE.parentNode.appendChild(errorMessage);

        setTimeout(() => {
            errorMessage.remove();
        }, 3000); 
    }
})

reg.addEventListener("click",function(e){
    const regP = document.getElementById("reg-password");

    regP.classList.remove('error')
    regP.textContent ="";

    if (regP.value.trim()===""){
        e.preventDefault();
        regP.classList.add('error')
        const errorMessage = document.createElement('div');
        errorMessage.textContent = "Please Set Your Password";
        errorMessage.style.position = "absolute";
        errorMessage.style.backgroundColor = "red";
        errorMessage.style.color = "white";
        errorMessage.style.padding = "5px";
        errorMessage.style.borderRadius = "5px";
        errorMessage.style.top = `${regP.offsetTop - 40}px`;
        errorMessage.style.left = `${regP.offsetLeft}px`;
        errorMessage.style.zIndex = "1000";
        regP.parentNode.appendChild(errorMessage);

        setTimeout(() => {
            errorMessage.remove();
        }, 3000); 
    }
})

reg.addEventListener("click",function(e){
    const regPass = document.getElementById("reg-confirm-password");

    regPass.classList.remove('error')
    regPass.textContent ="";

    if (regPass.value.trim()===""){
        e.preventDefault();
        regPass.classList.add('error')
        const errorMessage = document.createElement('div');
        errorMessage.textContent = "This Field Can't be Empty";
        errorMessage.style.position = "absolute";
        errorMessage.style.backgroundColor = "red";
        errorMessage.style.color = "white";
        errorMessage.style.padding = "5px";
        errorMessage.style.borderRadius = "5px";
        errorMessage.style.top = `${regPass.offsetTop - 40}px`;
        errorMessage.style.left = `${regPass.offsetLeft}px`;
        errorMessage.style.zIndex = "1000";
        regPass.parentNode.appendChild(errorMessage);

        setTimeout(() => {
            errorMessage.remove();
        }, 3000); 
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const cartRows = document.querySelectorAll('table tbody tr');
  
    function formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    }
  
    function updateTotals() {
      let total = 0;
  
      cartRows.forEach(row => {
        const priceText = row.querySelector('.product-price')?.textContent?.replace('$', '') || '0';
        const price = parseFloat(priceText);
        const qtyInput = row.querySelector('.quantity-amount');
        const quantity = parseInt(qtyInput.value) || 1;
  
        const subtotal = price * quantity;
        const totalCell = row.querySelector('.product-total');
        totalCell.textContent = formatCurrency(subtotal);
  
        total += subtotal;
      });
  
      // Update subtotal and total in summary section
      const summarySubtotal = document.querySelectorAll('.text-black strong');
      if (summarySubtotal.length >= 2) {
        summarySubtotal[0].textContent = formatCurrency(total); // Subtotal
        summarySubtotal[1].textContent = formatCurrency(total); // Total
      }
    }
  
    // Handle quantity increase/decrease buttons
    document.querySelectorAll('.increase').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = btn.closest('.quantity-container').querySelector('.quantity-amount');
        input.value = parseInt(input.value) + 1;
        updateTotals();
      });
    });
  
    document.querySelectorAll('.decrease').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = btn.closest('.quantity-container').querySelector('.quantity-amount');
        const newVal = Math.max(1, parseInt(input.value) - 1);
        input.value = newVal;
        updateTotals();
      });
    });
  
    // Handle manual input
    document.querySelectorAll('.quantity-amount').forEach(input => {
      input.addEventListener('input', () => {
        input.value = input.value.replace(/[^0-9]/g, '');
        if (!input.value || parseInt(input.value) < 1) input.value = 1;
        updateTotals();
      });
    });
  
    // Handle item remove
    document.querySelectorAll('.product-remove a').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const row = btn.closest('tr');
        row.remove();
        updateTotals();
      });
    });
  
    // Initial calculation
    updateTotals();
  });
  

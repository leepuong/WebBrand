const plusBtn1 = document.querySelector(".qty-count--add1");
const minusBtn1 = document.querySelector(".qty-count--minus1");
const numInput1 = document.querySelector(".product-qty1");
const plusBtn2 = document.querySelector(".qty-count--add2");
const minusBtn2 = document.querySelector(".qty-count--minus2");
const numInput2 = document.querySelector(".product-qty2");

// Lấy element subtotal
const subTotalElement = document.querySelector(".subTotal h3");

// Giá của từng sản phẩm (lấy từ HTML)
const productPrices = {
    product1: 15, // Archaeologist - $15
    product2: 15  // Corpse Collector - $15
};

// Hàm tính và cập nhật subtotal
function updateSubTotal() {
    const qty1 = parseInt(numInput1.innerText);
    const qty2 = parseInt(numInput2.innerText);
    
    const total1 = qty1 * productPrices.product1;
    const total2 = qty2 * productPrices.product2;
    
    const subTotal = total1 + total2;
    
    // Cập nhật giá trị hiển thị
    subTotalElement.innerText = subTotal + "$";
}

function qtyFunction(plusBtn0, minusBtn0, numInput0){

    let numberCouter = 1;
    plusBtn0.addEventListener("click", ()=> {
        numberCouter++;
        numberCouter = (numberCouter < 10) ? "0" + numberCouter: numberCouter;
      numInput0.innerText = numberCouter;
      // Cập nhật subtotal khi tăng số lượng
      updateSubTotal();
      });
    
      minusBtn0.addEventListener("click", ()=> {
        if(numberCouter>1){numberCouter--;
        numberCouter = (numberCouter < 10) ? "0" + numberCouter: numberCouter;
      numInput0.innerText = numberCouter;
      // Cập nhật subtotal khi giảm số lượng
      updateSubTotal();
      }
      });
}

qtyFunction(plusBtn1, minusBtn1, numInput1);

qtyFunction(plusBtn2, minusBtn2, numInput2);

// Khởi tạo subtotal ban đầu
updateSubTotal();

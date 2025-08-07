const plusBtn1 = document.querySelector(".qty-count--add1");
const minusBtn1 = document.querySelector(".qty-count--minus1");
const numInput1 = document.querySelector(".product-qty1");
const plusBtn2 = document.querySelector(".qty-count--add2");
const minusBtn2 = document.querySelector(".qty-count--minus2");
const numInput2 = document.querySelector(".product-qty2");

function qtyFunction(plusBtn0, minusBtn0, numInput0){

    let numberCouter = 1;
    plusBtn0.addEventListener("click", ()=> {
        numberCouter++;
        numberCouter = (numberCouter < 10) ? "0" + numberCouter: numberCouter;
      numInput0.innerText = numberCouter;
      });
    
      minusBtn0.addEventListener("click", ()=> {
        if(numberCouter>1){numberCouter--;
        numberCouter = (numberCouter < 10) ? "0" + numberCouter: numberCouter;
      numInput0.innerText = numberCouter;}
      });
}

qtyFunction(plusBtn1, minusBtn1, numInput1);

qtyFunction(plusBtn2, minusBtn2, numInput2);

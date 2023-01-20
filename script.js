const product = {
  plainBurger: {
    name: "plainBurger",
    price: 10000,
    kkal: 500,
    count: 0,
    get Summ() {
      return this.price * this.count;
    },
    get kkalSumm() {
      return this.kkal * this.count;
    }
  },
  freshBurger: {
    name: "freshBurger",
    price: 20500,
    kkal: 600,
    count: 0,
    get Summ() {
      return this.price * this.count;
    },
    get kkalSumm() {
      return this.kkal * this.count;
    }
  },
  freshCombo: {
    name:"freshCombo",
    price: 31900,
    kkal: 800,
    count: 0,
    get Summ() {
      return this.price * this.count;
    },
    get kkalSumm() {
      return this.kkal * this.count;

    }
  }

}

const btn = document.querySelectorAll(".main__product-btn");
     

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    plusOrminus(this)
  })

}

function plusOrminus(el) {
  const parent = el.closest(".main__product"),
    num = parent.querySelector(".main__product-num"),
    price = parent.querySelector(".main__product-price span"),
    kkal = parent.querySelector(".main__product-kcall span"),
    attribute = el.getAttribute("data-symbol"),
    parentId = parent.getAttribute("id"),
    iconkakor = document.querySelector(".iconkakor");
    
    iconkakor.style = 'background-color: red;'
   

  if (attribute == "+") {
    product[parentId].count++;
    iconkakor.innerHTML++
  } else if (attribute == "-" && product[parentId].count > 0) {
    product[parentId].count--;
    iconkakor.innerHTML--
  }
  num.innerHTML = product[parentId].count
  price.innerHTML = product[parentId].Summ
  kkal.innerHTML = product[parentId].kkalSumm
  if (num.innerHTML == 0) {
    num.innerHTML = "ORDER"
  }
}

const lvl = document.querySelector(".header__timer-extra")

window.onload = ()=> {
  number()

}

function number() {
  lvl.innerHTML++
  if (lvl.innerHTML < 50) {
    setTimeout(() => {
      number()
    }, 100);
  }else if (lvl.innerHTML < 100) {
    setTimeout(() => {
      number()
    }, 150);
  }

}



const close = document.querySelector(".view__close"),
      view = document.querySelector(".view"),
      pages = document.querySelectorAll(".main__product-info");
      viewImg = document.querySelector('.view img');
     pages.forEach(page => {
       page.addEventListener('click',()=>{
         view.classList.add("active")
         let img = page.querySelector('img')
         viewImg.src = img.src
         
      })
     });
      close.addEventListener("click", ()=>{
        view.classList.remove("active")
      })


      const korzinka = document.querySelector(".header__timer-page"),
            lvlsapn = document.querySelector(".span_lvl");
            
      

     


      const addCart = document.querySelector(".addCart"),
      receipt = document.querySelector(".receipt"),
      receiptWindow = document.querySelector(".receipt__window"),
      receiptWindowOut = document.querySelector(".receipt__window-out"),
      receiptWindowOutTwoo = document.querySelector(".receipt__window-out-twoo");


      
      korzinka.addEventListener("click", ()=>{
        lvlsapn.style = 'display:none;'
        receipt.classList.add("active")
        receipt.style = 'display:flex;'
        setTimeout(() => {
          receipt.style.opacity = '1'
          receiptWindow.style = 'top:15%;' 
        }, 500);

        let totalSumm = 0
        let totalKall = 0
        let text = ""

        text+= " <h1>KORZINKA : </h1>"
        const objValue = Object.values(product).filter(num => num.count)
        for (let i = 0; i < objValue.length; i++) {
          text += `<div class="product">
                     
                      <div class="product__names">  ${objValue[i].name}  ${objValue[i].count} TA</div>
                      
                
                   </div>`;
                   
                   
        }

        let total = 
        `<div class="total">
       <h2 class="harid">SIZ HARID QILGAN MAHSULOTLAR</h2>
        </div>`
        receiptWindowOut.innerHTML = text + total;
    
        
              
      })



      addCart.addEventListener("click", ()=>{
        receipt.classList.add("active")
        receipt.style = 'display:flex;'
        setTimeout(() => {
          receipt.style.opacity = '1'
          receiptWindow.style = 'top:15%;' 
        }, 500);
        let totalSumm = 0
        let totalKall = 0
        let text = ""
        text+= "<h1>Receipt : </h1>"
        const objValue = Object.values(product).filter(num => num.count)
        for (let i = 0; i < objValue.length; i++) {
          text += `<div class="product">
                      <span>${i+1}</span>
                      <div class="product__name">${objValue[i].name}</div>
                      <div class="product__count">${objValue[i].count} x ${objValue[i].price} =</div>
                      <div class="product__price"> ${objValue[i].Summ}</div>
                   </div>`;
                   totalSumm+=objValue[i].Summ
                   totalKall+=objValue[i].kkalSumm
          
        }

        let total = 
        `<div class="total">
Total Summ : ${totalSumm}so'm
Total Kkal : ${totalKall}kkal
<h2 class="harid">Haridingiz uchun tashakkur</h2>
        </div>`
        receiptWindowOut.innerHTML = text + total


      })



      const receiptWindowBtn = document.querySelector(".receipt__window-btn");


      receiptWindowBtn.addEventListener("click", ()=>{
        receipt.style = 'display:none;'
        
      })

      
      const productNames = document.querySelectorAll(".product__names"),
      del = document.querySelectorAll(".delete");
      del.addEventListener('click',()=>{
        
      })
      

          

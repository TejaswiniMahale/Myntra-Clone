var wishListItems = JSON.parse(localStorage.getItem("wishListData")) || []



function showWishList(wishListItems) {
  document.querySelector("#maindiv").innerHTML = ""
  wishListItems.map(function(elem)
  {
    var maindiv=document.createElement("div")
    var priceDiv=document.createElement("div")
    priceDiv.setAttribute("class","priceDiv")
    var div1=document.createElement("div")
    div1.setAttribute("class","priceDiv")
    var div2=document.createElement("div")
    div2.setAttribute("id","infoDiv")
    var image=document.createElement("img")
    image.setAttribute("src",elem.img)
    
    var brand=document.createElement("p")
    brand.innerText=elem.brand
    brand.style.fontWeight="bold"

    var name=document.createElement("p")
    name.innerText=elem.name

    var price = document.createElement("p")
    price.innerText ="Rs."+elem.price
    price.style.fontWeight="bold"

    var strikeprice = document.createElement("p")
    strikeprice.innerText = "Rs."+elem.strikeprice
    strikeprice.style.textDecoration="line-through"
    
    var discount=document.createElement("p")
    discount.innerText="("+elem.discount+"% OFF)"
    discount.style.color="#de938e"
   
   div1.append(price,strikeprice,discount)
   div2.append(brand,name,div1)
   maindiv.append(image,div2)
   document.querySelector("#maindiv").append(maindiv)
  })
    
  }
  document.getElementById("total").textContent="TOTAL ITEMS : "+wishListItems.length;
  showWishList(wishListItems)
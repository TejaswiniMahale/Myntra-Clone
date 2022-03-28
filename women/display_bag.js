var addtobag = JSON.parse(localStorage.getItem("addtobagData")) || []
var wishListItems = JSON.parse(localStorage.getItem("wishListData")) || []
var bagItems = JSON.parse(localStorage.getItem("bagData")) || []


console.log(addtobag)
function addtobagList(addtobag) {
  document.querySelector("#info").innerHTML="";
  addtobag.map(function(elem)
  {
    var maindiv=document.createElement("div")
    var priceDiv=document.createElement("div")
    priceDiv.setAttribute("class","priceDiv")
    var div1=document.createElement("div")
    div1.setAttribute("id","div1")
    var imgDiv=document.createElement("div")
    imgDiv.setAttribute("class","imgdiv")
    var textdiv=document.createElement("div")
    textdiv.setAttribute("class","textdiv")
    var buttonDiv=document.createElement("div")
    
    var image=document.createElement("img")
    image.setAttribute("src",elem.img)

    var image1=document.createElement("img")
    image1.setAttribute("src",elem.img1)
    
    var image2=document.createElement("img")
    image2.setAttribute("src",elem.img2)

    var image3=document.createElement("img")
    image3.setAttribute("src",elem.img3)

    var image4=document.createElement("img")
    image4.setAttribute("src",elem.img4)

    var image5=document.createElement("img")
    image5.setAttribute("src",elem.img5)
    
    var description=document.createElement("h1")
    description.setAttribute("class","description")
    description.innerText=elem.description

    var detail=document.createElement("p");
     detail.innerText=elem.detail
     detail.setAttribute("id","clr")

    var Size=document.createElement("p")
    Size.setAttribute("class","size")
    Size.innerText="Size & Fit"+elem.Size
    
    var MaterialCare=document.createElement("p")
    MaterialCare.innerText="Material & care"+elem.MaterialCare

    var speccification=document.createElement("p")
    speccification.innerText=elem.speccification.SleeveLength;
    var speccification1=document.createElement("p")
    speccification1.innerText=elem.speccification.Shape;
    var speccification2=document.createElement("p")
    speccification2.innerText=elem.speccification.Neck;
    var speccification3=document.createElement("p")
    speccification3.innerText=elem.speccification.PrintPatternType;
    var speccification4=document.createElement("p")
    speccification4.innerText=elem.speccification.DesignStyling
    var speccification5=document.createElement("p")
    speccification5.innerText=elem.speccification.Ornamentation
    var speccification6=document.createElement("p")
    speccification6.innerText=elem.speccification.Length
    var speccification7=document.createElement("p")
    speccification7.innerText=elem.speccification.Hemline
    var speccification8=document.createElement("p")
    speccification8.innerText=elem.speccification.ColourFamily
    
    var bestoffers=document.createElement("p")
    bestoffers.innerText=elem.bestoffers
    bestoffers.setAttribute("id","best")
    

    var brand=document.createElement("h1")
    brand.innerText=elem.brand
    brand.setAttribute("class","brand")
    brand.style.fontWeight="bold"

    var name=document.createElement("p");
    name.innerText=elem.name;
    var price = document.createElement("h2")
    price.innerText ="Rs."+elem.price

    var strikeprice = document.createElement("p")
    strikeprice.innerText = "Rs." + elem.strikeprice
    strikeprice.style.textDecoration="line-through"
    
    var discount=document.createElement("p")
    discount.innerText="(" + elem.discount + "% OFF)" 
    discount.style.color="#de938e"

    //------------------------------
    var line4=document.createElement("p")
    line4.setAttribute("class","line4")
    line4.innerText="inclusive of all taxes"

    var line5=document.createElement("p")
    line5.setAttribute("class","line5")
    line5.innerText="Select Size : S M L XL XXL"

   var line6=document.createElement("p")
   line6.setAttribute("class","line6")
   line6.innerText="DELIVERY OPTIONS"

   var input1=document.createElement("input")
   input1.setAttribute("class","input1")
   input1.placeholder="ENTER A PIN CODE"

   var line7=document.createElement("p")
   line7.innerText="Please enter PIN code to check delivery time & Pay on Delivery Availability"

   var line8=document.createElement("div")
   line8.setAttribute("class","line8")
   line8.innerText="100% Original Products Pay on delivery might be available Easy 30 days returns and exchanges Try & Buy might be available"
   
   var line9=document.createElement("h1")
   line9.setAttribute("class","line9")
   line9.innerText="Best Offers";

   var line10=document.createElement("h1")
   line10.setAttribute("class","line10")
   line10.innerText="PRODUCT DETAILS "


   //---------------------------------------------

    var addBagButton=document.createElement("button")
    addBagButton.setAttribute("id","addbtn")
    addBagButton.innerText="ADD TO BAG";
    addBagButton.addEventListener("click", function () {
      //bag(elem);
      addToCart(elem);
    });

    var wishlistButton=document.createElement("button")
    wishlistButton.setAttribute("id","wishbtn")
    wishlistButton.innerText="WISHLIST"
    wishlistButton.addEventListener("click", function () {
    wishList(elem);
  });
  
  
  var infodiv=document.createElement("div")

  infodiv.append(line10,detail,speccification,speccification1,speccification2,speccification3,speccification4,speccification5,speccification6,speccification7,speccification8)
   imgDiv.append(image,image1,image2,image3,image4,image5,) 
   div1.append(price,strikeprice,discount)
   buttonDiv.append(line4,line5,addBagButton,wishlistButton,line6,input1,line7,line8,line9,bestoffers)
   textdiv.append(brand,description,div1,buttonDiv,infodiv)
   maindiv.append(imgDiv,textdiv)
   document.querySelector("#info").append(maindiv)
  })
    
  }
  addtobagList(addtobag)


  //----------------add-to-wishlis-items--------------------//
  function wishList(elem) {
    
    var object1 = {
      img:elem.img,
      name: elem.name,
      brand: elem.brand,
      price:elem.price,
      strikeprice:elem.strikeprice,
      discount:elem.discount
    };
    wishListItems.push(object1);
    localStorage.setItem("wishListData", JSON.stringify(wishListItems));
  }


  //-----------------------------add-to-bag-items----------------------//
  // function bag(elem) {
    
  //   var object2 = {
  //     img:elem.img,
  //     name: elem.name,
  //     brand: elem.brand,
  //     price:elem.price,
  //     strikeprice:elem.strikeprice,
  //     discount:elem.discount
  //   };
  //   bagItems.push(object2);
  //   localStorage.setItem("bagData", JSON.stringify(bagItems));
  // }

  function addToCart(elem){
    elem.quntity=1;
    bagItems.push(elem);
    localStorage.setItem("bagData",JSON.stringify(bagItems))
}
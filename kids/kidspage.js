 //Display Upper filter value----------------------------------


function getSelectValue (){
    var ageValue = document.getElementById("dropdownAgeFilter").value;
    console.log(ageValue);


    var bundlesValue = document.getElementById("dropdownBundlesFilter").value;
    console.log(bundlesValue);

    var countryValue = document.getElementById("dropdownCountryFilter").value;
    console.log(countryValue);
}  

//Display product data----------------------------------------------------

var kidsData = JSON.parse(localStorage.getItem("kidsD")) || [];
// console.log(kidsData);
displaykidsData(kidsData);

function displaykidsData(kidsData){
    document.querySelector("#productDiv").innerHTML = ""

    kidsData.map(function (elem) {
    var pDiv = document.createElement("div");
    pDiv.setAttribute("class", "pDiv");

    //create img-----------------------------------------
    var img = document.createElement("img");
    img.setAttribute("src", elem.image);


    //create brand---------------------------------------
    var brand = document.createElement("p");
    brand.textContent = elem.brand;
    brand.style.fontWeight = "bold";


    //create category-----------------------------------
    var category = document.createElement("p");
    category.textContent = elem.category;
    
    //create prices-------------------------------------    
    var priceDiv = document.createElement("div");
    var price = document.createElement("p");
        price.textContent = elem.price;
        price.style.fontWeight = "bold";

        var strikedoffprice = document.createElement("p");
        strikedoffprice.textContent = elem.strikeoffprice;
        strikedoffprice.style.textDecoration = "line-through";
        strikedoffprice.style.color = "grey";
        

        var off = document.createElement("p");
        off.textContent = "("+elem.off+")";
        off.style.color ="red";

        priceDiv.append(price, strikedoffprice, off);
        priceDiv.setAttribute("class", "innerDiv");
        

        // add to cart btn---------------------------------------

        var cart = document.createElement("button");
        cart.innerText = "Add to cart";
        cart.addEventListener("click", function () {
        addToCart(elem);
        });


        // appending the data--------------------------------------
        
        pDiv.append(img, brand, category, priceDiv, cart);
        document.querySelector("#productDiv").append(pDiv);
})
};

// addtocart function-----------------------------------------------------

function addToCart(elem) {
        // console.log(elem);
        // elem.quantity = 1;
        kidsData.push(elem);
        // console.log(kidsCart);
        localStorage.setItem('kidsItems', JSON.stringify(kidsData));
    }



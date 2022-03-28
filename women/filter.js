//-------------sort-price-filter---------

function sorting()
{
  var prices = document.querySelector("#sortby").value;
  console.log(prices)
  if(prices=="hightolow")
  {
    allWomenDeta.sort(function (a,b) {
      return Number(b.price) - Number(a.price);
    });
    //console.log("ok")
    displayDataWomen(allWomenDeta)
  }
  if(prices=="lowtohigh")
  {
   allWomenDeta.sort(function (a,b) {
   return Number(a.price) - Number(b.price);
 })
 displayDataWomen(allWomenDeta)
  }
}

//--------------category-filter-------------

function kurta() {
  var value1 = document.querySelector("#kurta").checked;
  console.log(value1);
  if (value1 == true) {
    var kurta_item = allWomenDeta.filter(function (elem, index) {
      return elem.type == "kurta";
    });
    displayDataWomen(kurta_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function kurta() {
  var value1 = document.querySelector("#kurta").checked;
  console.log(value1);
  if (value1 == true) {
    var kurta_item = allWomenDeta.filter(function (elem, index) {
      return elem.type == "kurta";
    });
    displayDataWomen(kurta_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function dress() {
  var value2 = document.querySelector("#dress").checked;
  console.log(value2);
  if (value2 == true) {
    var dress_item = allWomenDeta.filter(function (elem, index) {
      return elem.type == "dress";
    });
    displayDataWomen(dress_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function footwear() {
  var value3 = document.querySelector("#footwear").checked;
  console.log(value3);
  if (value3 == true) {
    var footwear_item = allWomenDeta.filter(function (elem, index) {
      return elem.type == "footwear";
    });
    displayDataWomen(footwear_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function saree() {
  var value4 = document.querySelector("#saree").checked;
  console.log(value4);
  if (value4 == true) {
    var saree_item = allWomenDeta.filter(function (elem, index) {
      return elem.type == "saree";
    });
    displayDataWomen(saree_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function watch() {
  var value5 = document.querySelector("#watch").checked;
  console.log(value5);
  if (value5 == true) {
    var watch_item = allWomenDeta.filter(function (elem, index) {
      return elem.type == "watch";
    });
    displayDataWomen(watch_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function jeans() {
  var value6 = document.querySelector("#jeans").checked;
  console.log(value6);
  if (value6 == true) {
    var jeans_item = allWomenDeta.filter(function (elem, index) {
      return elem.type == "jeans";
    });
    displayDataWomen(jeans_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function makeup() {
  var value7 = document.querySelector("#makeup").checked;
  console.log(value7);
  if (value7 == true) {
    var makeup_item = allWomenDeta.filter(function (elem, index) {
      return elem.type == "makeup";
    });
    displayDataWomen(makeup_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function electronics() {
  var value8 = document.querySelector("#electronics").checked;
  console.log(value8);
  if (value8 == true) {
    var elec_item = allWomenDeta.filter(function (elem, index) {
      return elem.type == "electronics";
    });
    displayDataWomen(elec_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}
//------------categories-end----------//

//------------brand-filter-start----------//

function libas() {
  var value1 = document.querySelector("#libas").checked;
  console.log(value1);
  if (value1 == true) {
    var libas_item = allWomenDeta.filter(function (elem, index) {
      return elem.brand == "Libas";
    });
    displayDataWomen(libas_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function biba() {
  var value2 = document.querySelector("#biba").checked;
  console.log(value2);
  if (value2 == true) {
    var biba_item = allWomenDeta.filter(function (elem, index) {
      return elem.brand == "Biba";
    });
    displayDataWomen(biba_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function nike() {
  var value1 = document.querySelector("#nike").checked;
  console.log(value1);
  if (value1 == true) {
    var nike_item = allWomenDeta.filter(function (elem, index) {
      return elem.brand == "Nike";
    });
    displayDataWomen(nike_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function lakme() {
  var value4 = document.querySelector("#lakme").checked;
  console.log(value4);
  if (value4 == true) {
    var lakme_item = allWomenDeta.filter(function (elem, index) {
      return elem.brand == "Lakme";
    });
    displayDataWomen(lakme_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function kalini() {
  var value5 = document.querySelector("#kalini").checked;
  console.log(value5);
  if (value5 == true) {
    var kalini_item = allWomenDeta.filter(function (elem, index) {
      return elem.brand == "Kalini";
    });
    displayDataWomen(kalini_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function fastrack() {
  var value6 = document.querySelector("#fastrack").checked;
  console.log(value6);
  if (value6 == true) {
    var fastrack_item = allWomenDeta.filter(function (elem, index) {
      return elem.brand == "Fastrack";
    });
    displayDataWomen(fastrack_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function philips() {
  var value7 = document.querySelector("#philips").checked;
  console.log(value7);
  if (value7 == true) {
    var philips_item = allWomenDeta.filter(function (elem, index) {
      return elem.brand == "philips";
    });
    displayDataWomen(philips_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function daniel_clein() {
  var value8 = document.querySelector("#daniel_clein").checked;
  console.log(value8);
  if (value8 == true) {
    var daniel_item = allWomenDeta.filter(function (elem, index) {
      return elem.brand == "Daniel Klein";
    });
    displayDataWomen(daniel_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function puma() {
  var value9 = document.querySelector("#puma").checked;
  console.log(value9);
  if (value9 == true) {
    var puma_item = allWomenDeta.filter(function (elem, index) {
      return elem.brand == "Puma";
    });
    displayDataWomen(puma_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function apple() {
  var value10 = document.querySelector("#apple").checked;
  console.log(value10);
  if (value10 == true) {
    var apple_item = allWomenDeta.filter(function (elem, index) {
      return elem.brand == "Apple";
    });
    displayDataWomen(apple_item);
  } else {
    displayDataWomen(allWomenDeta)
  }
}
//-----------------brand-filter-end-----------//

//-----------------price-between-filter-start------------//

function Rs74toRs3181() {
  var Rs = document.querySelector("#Rs74toRs3181").checked;
  if (Rs == true) {
    var Rs74toRs3181 = allWomenDeta.filter(function (elem) {
      if (elem.price > 74 && elem.price <= 1199) {
        return elem.price;
      }
    });
    displayDataWomen(Rs74toRs3181);
  } else {
    displayDataWomen(allWomenDeta)
  }
}


function  Rs1199toRs2098(){
  var Rs = document.querySelector("#Rs1199toRs2098").checked;
  if (Rs == true) {
    var Rs1199toRs2098 = allWomenDeta.filter(function (elem) {
      if (elem.price > 1199 && elem.price <= 2098) {
        return elem.price;
      }
    });
    displayDataWomen(Rs1199toRs2098);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function  Rs2098toRs3119(){
  var Rs = document.querySelector("#Rs2098toRs3119").checked;
  if (Rs == true) {
    var  Rs2098toRs3119= allWomenDeta.filter(function (elem) {
      if (elem.price > 2098 && elem.price <= 3119) {
        return elem.price;
      }
    });
    displayDataWomen(Rs2098toRs3119);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function  Rs3119toRsabove(){
  var Rs = document.querySelector("#Rs3119toRsabove").checked;
  if (Rs == true) {
    var  Rs3119toRsabove= allWomenDeta.filter(function (elem) {
      if (elem.price > 3119) {
        return elem.price;
      }
    });
    displayDataWomen(Rs3119toRsabove);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

//----------price-filter-end--------------//

//---------discount-filter-start-----------//

function above10(){
  var above10 = document.querySelector("#above10").checked;
  if (above10 == true) {
    var above10 = allWomenDeta.filter(function (elem) {
      if (elem.discount >= 10) {
        return elem.discount;
      }
    });
    displayDataWomen(above10);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function above30(){
  var above30 = document.querySelector("#above30").checked;
  if (above30 == true) {
    var above30 = allWomenDeta.filter(function (elem) {
      if (elem.discount >= 30) {
        return elem.discount;
      }
    });
    displayDataWomen(above30);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function above50(){
  var above50 = document.querySelector("#above50").checked;
  if (above50 == true) {
    var above50 = allWomenDeta.filter(function (elem) {
      if (elem.discount >= 50) {
        return elem.discount;
      }
    });
    displayDataWomen(above50);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function above60(){
  var above60 = document.querySelector("#above60").checked;
  if (above60 == true) {
    var above60 = allWomenDeta.filter(function (elem) {
      if (elem.discount >= 60) {
        return elem.discount;
      }
    });
    displayDataWomen(above60);
  } else {
    displayDataWomen(allWomenDeta)
  }
}

function above70(){
  var above70 = document.querySelector("#above70").checked;
  if (above70 == true) {
    var above70 = allWomenDeta.filter(function (elem) {
      if (elem.discount >= 70) {
        return elem.discount;
      }
    });
    displayDataWomen(above70);
  } else {
    displayDataWomen(allWomenDeta)
  }
}



 
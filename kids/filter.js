//----------gender filter--------------//
// function boys() {
//   var value1 = document.querySelector("#boys").checked;
//   console.log(value1);
//   if (value1 == true) {
//     var libas_item = kidsData.filter(function (elem, index) {
//       return elem.gender == "boys";
//     });
//     displaykidsData(libas_item);
//   } else {
//     displaykidsData(kidsData)
//   }
// };

// function girls() {
//   var value2 = document.querySelector("#girls").checked;
//   console.log(value2);
//   if (value2 == true) {
//     var biba_item = kidsData.filter(function (elem, index) {
//       return elem.gender == "girls";
//     });
//     displaykidsData(biba_item);
//   } else {
//     displaykidsData(kidsData)
//   }
// };



//--------------category-filter-------------

function kurta() {
    var value1 = document.querySelector("#kurta").checked;
    console.log(value1);
    if (value1 == true) {
      var kurta_item = kidsData.filter(function (elem, index) {
        return elem.category == "kurta";
      });
      displaykidsData(kurta_item);
    } else {
      displaykidsData(kidsData)
    }
  };
  
  
  function dresses() {
    var value2 = document.querySelector("#dresses").checked;
    console.log(value2);
    if (value2 == true) {
      var dress_item = kidsData.filter(function (elem, index) {
        return elem.category == "dresses";
      });
      displaykidsData(dress_item);
    } else {
      displayDataWomen(kidsData)
    }
  };
  
  function sherwani() {
    var value3 = document.querySelector("#sherwani").checked;
    console.log(value3);
    if (value3 == true) {
      var footwear_item = kidsData.filter(function (elem, index) {
        return elem.category == "sherwani";
      });
      displaykidsData(footwear_item);
    } else {
      displaykidsData(kidsData)
    }
  };
  
  function shirt() {
    var value4 = document.querySelector("#shirt").checked;
    console.log(value4);
    if (value4 == true) {
      var saree_item = kidsData.filter(function (elem, index) {
        return elem.category == "shirt";
      });
      displaykidsData(saree_item);
    } else {
      displaykidsData(kidsData)
    }
  };
  
  function coords() {
    var value5 = document.querySelector("#co-ords").checked;
    console.log(value5);
    if (value5 == true) {
      var watch_item = kidsData.filter(function (elem, index) {
        return elem.category == "co-ords";
      });
      displaykidsData(watch_item);
    } else {
      displaykidsData(kidsData)
    }
  };
  

  
  //------------brand-filter----------//
  
  function VASTRAMAY() {
    var value1 = document.querySelector("#VASTRAMAY").checked;
    console.log(value1);
    if (value1 == true) {
      var libas_item = kidsData.filter(function (elem, index) {
        return elem.brand == "VASTRAMAY";
      });
      displaykidsData(libas_item);
    } else {
      displaykidsData(kidsData)
    }
  };
  
  function Jbn() {
    var value2 = document.querySelector("#Jbn").checked;
    console.log(value2);
    if (value2 == true) {
      var biba_item = kidsData.filter(function (elem, index) {
        return elem.brand == "JBN Creation";
      });
      displaykidsData(biba_item);
    } else {
      displaykidsData(kidsData)
    }
  };
  
  function BownBee() {
    var value1 = document.querySelector("#BownBee").checked;
    console.log(value1);
    if (value1 == true) {
      var nike_item = kidsData.filter(function (elem, index) {
        return elem.brand == "BownBee";
      });
      displaykidsData(nike_item);
    } else {
      displaykidsData(kidsData)
    }
  };
  
  
  //-----------------pricefilter------------//
  
  function Rs0toRs500() {
    var Rs = document.querySelector("#Rs0toRs500").checked;
    if (Rs == true) {
      var a = kidsData.filter(function (elem) {
        if (elem.price <= 500) {
          return elem.price;
        }
      });
      displaykidsData(a);
    } else {
      displaykidsData(kidsData)
    }
  };
  
  
  function  Rs501toRs1000(){
    var Rs = document.querySelector("#Rs501toRs1000").checked;
    if (Rs == true) {
      var Rs1199toRs2098 = kidsData.filter(function (elem) {
        if (elem.price > 500 && elem.price <= 1000) {
          return elem.price;
        }
      });
      displaykidsData(Rs1199toRs2098);
    } else {
      displaykidsData(kidsData)
    }
  };
  
  function  Rs1001toRs1500(){
    var Rs = document.querySelector("#Rs1001toRs1500").checked;
    if (Rs == true) {
      var  Rs2098toRs3119= kidsData.filter(function (elem) {
        if (elem.price > 1000 && elem.price <= 1500) {
          return elem.price;
        }
      });
      displaykidsData(Rs2098toRs3119);
    } else {
      displaykidsData(kidsData)
    }
  };
  
  function  Rs1501toRsabove(){
    var Rs = document.querySelector("#Rs1501toRsabove").checked;
    if (Rs == true) {
      var  Rs3119toRsabove= kidsData.filter(function (elem) {
        if (elem.price > 1500) {
          return elem.price;
        }
      });
      displaykidsData(Rs3119toRsabove);
    } else {
      displaykidsData(kidsData)
    }
  };
  
  //----------color filter--------------//
  function red() {
    var value1 = document.querySelector("#red").checked;
    console.log(value1);
    if (value1 == true) {
      var libas_item = kidsData.filter(function (elem, index) {
        return elem.colour == "red";
      });
      displaykidsData(libas_item);
    } else {
      displaykidsData(kidsData)
    }
  };
  
  function black() {
    var value2 = document.querySelector("#black").checked;
    console.log(value2);
    if (value2 == true) {
      var biba_item = kidsData.filter(function (elem, index) {
        return elem.colour == "black";
      });
      displaykidsData(biba_item);
    } else {
      displaykidsData(kidsData)
    }
  };
  
  function white() {
    var value1 = document.querySelector("#white").checked;
    console.log(value1);
    if (value1 == true) {
      var nike_item = kidsData.filter(function (elem, index) {
        return elem.colour == "white";
      });
      displaykidsData(nike_item);
    } else {
      displaykidsData(kidsData)
    }
  };
  //---------discount-filter-----------//
  
  
  function off1(){
    var above50 = document.querySelector("#50%OFF").checked;
    if (above50 == true) {
      var above50 = kidsData.filter(function (elem) {
        if (elem.off = 50) {
          return elem.off;
        }
      });
      displaykidsData(above50);
    } else {
      displaykidsData(kidsData)
    }
  };
  
  function off(){
    var above60 = document.querySelector("#55%OFF").checked;
    if (above60 == true) {
      var above60 = kidsData.filter(function (elem) {
        if (elem.off = 55) {
          return elem.off;
        }
      });
      displaykidsData(above60);
    } else {
      displaykidsData(kidsData)
    }
  };

  //-------------sort-price-filter---------

function sortby()
{
  var prices = document.querySelector("#sortby").value;
  console.log(prices)
  if(prices=="hightolow")
  {
    kidsData.sort(function (a,b) {
      return Number(b.price) - Number(a.price);
    });
    displaykidsData(kidsData)
  }
  if(prices=="lowtohigh")
  {
    kidsData.sort(function (a,b) {
  return Number(a.price) - Number(b.price);
})
displaykidsData(kidsData)
  }
}
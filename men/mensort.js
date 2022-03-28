function sorting()
{
  var prices = document.querySelector("#sortby").value;
  console.log(prices)
  if(prices=="hightolow")
  {
    allMenDeta.sort(function (a,b) {
      return Number(b.price) - Number(a.price);
    });
    displayDataMen(allMenDeta)
  }
  if(prices=="lowtohigh")
  {
   allMenDeta.sort(function (a,b) {
   return Number(a.price) - Number(b.price);
 })
 displayDataMen(allMenDeta)
  }
}

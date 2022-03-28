


function openwindow(){

document.getElementById("paymentDiv").innerHTML="";

var head=document.createElement("h3")
head.innerText="CREDIT/DEBIT CARD"
var cardnum=document.createElement("input")
cardnum.setAttribute("placeholder","Card Number")

var cardname=document.createElement("input")
cardname.setAttribute("placeholder","Name on Card ")
var cvvDiv=document.createElement("div")
cvvDiv.setAttribute("id","cvvDiv")
var carddate=document.createElement("input")
carddate.setAttribute("placeholder","(MM/YY)")

var cardcvv=document.createElement("input")
cardcvv.setAttribute("placeholder","CVV")
var ancor=document.createElement("a")
ancor.setAttribute("href","otp2.html")
var paynow=document.createElement("div")
ancor.append(paynow)
paynow.setAttribute("id","pay")
paynow.innerText="PAY NOW"
cvvDiv.append(carddate,cardcvv)
document.getElementById("paymentDiv").append(head,cardnum,cardname,cvvDiv,ancor)

}
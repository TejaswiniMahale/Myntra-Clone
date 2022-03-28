dealsData = [{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/20/8131f534-7d4a-4316-aaec-2e7f61e304081645367689519-Unique-Casual-Wear.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/20/3e44bec2-c681-4ab2-b88e-684d458bb8321645367689499-Dresses.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/20/72a30a8d-7ad8-452e-a200-ac8feb9bc4411645367689468-Home-Decor.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/20/6e9fc2c7-b329-4a32-85f1-383d8bdb64151645367689479-Formal-Shoes.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/20/80063cc4-68f0-4414-be14-037408be1f521645367689508-Best-Of-Accessories.jpg"
},
];

dealsData.map(function (el, i, arr) {

var box = document.createElement("div");
var img = document.createElement("img")
img.setAttribute("src", el.img)

box.append(img);
document.querySelector("#dealsDiv").append(box);
});

bigDeals = [{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/6e0a9fa0-9e8d-4c29-9250-995c9f1ba9331605363273176-Home---U.S.-Polo-Assn..jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/5544cd64-d95b-461d-802a-8025fdfeb3331605363272844-Home---Nike.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg"
},
];

bigDeals.map(function (el, i, arr) {

var box = document.createElement("div");
var img = document.createElement("img")
img.setAttribute("src", el.img)

box.append(img);
document.querySelector("#bigdealsDiv").append(box);
});
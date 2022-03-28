
 dealsData = [{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/dc16c7a7-fe43-428a-ab75-afa08f64bd031645111000948-Vero_Moda-_Only.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/d9e6e7b9-81de-4014-9e40-6be1f44ce6b81645111001186-Zivame-_M-S.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/2b6c95cd-fb8f-4410-939a-fe2fb07d9e941645111000979-W_-_Biba.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/932aaa5b-6792-455f-946d-d906b516176d1645111000964-Vishudh_-_Libas.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/19/6e6954c6-0604-4495-bd1b-264bafed11371645265206731-unnamed--35-.jpg"
},
];

dealsData.map(function (el, i, arr) {

var box = document.createElement("div");
var img = document.createElement("img")
img.setAttribute("src", el.img)

box.append(img);
document.querySelector("#dealsDiv").append(box);
});

bigDeals = [
    {
    img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/fa2750b0-2b34-4943-bef7-619d32ce9bb81645110051520-Best_of_Dresses.png"
   },
   {
    img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/3d656b83-4bd3-41d1-8077-67f68d1040481645110051530-Best_of_International_Brands_.png"
   },
   {
    img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/19/5d3ed7fe-2408-4c1d-a020-02bae81b3fd51645265817300-unnamed--6-.png"
   },
   {
    img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/15/15ad910c-e045-44d0-b1c7-4816859f90351644914952116-Myntra_Unique_Ethnic_Styles.png"
   },
   {
    img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/66a26d61-4b40-4028-a4ef-277a627f8bd91645110053754-SugarGarnier_-_Min_20-40_off_.jpg"
   },
];

bigDeals.map(function (el, i, arr) {

var box = document.createElement("div");
var img = document.createElement("img")
img.setAttribute("src", el.img)

box.append(img);
document.querySelector("#bigdealsDiv").append(box);
});

catagoryData = [
    {
        img1:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/f15b53b3-055d-42eb-b8f7-7a5a3b2ccf9e1645091289585-Biba.jpg"
    },
    {
        img1:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/d58d014f-e558-47c8-9850-a1a784766fd21645091289675-Marks_-_Spencer_1.jpg"
    },
    {
        img1:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/c32f13fb-b11f-493d-99b7-ccd6573f8c221645091289701-ONLY.jpg"
    },
    {
        img1:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/e3b072a6-c92e-4c62-90c8-59aaa5ca5fd51645091289780-Vero_Moda.jpg"
    },
    {
        img1:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/f613caa7-c022-4df9-a4c8-eaa6adf63d6e1645091289790-W.jpg"
    },

];

catagoryData.map(function (el, i, arr) {

var box = document.createElement("div");
var img1 = document.createElement("img")
img1.setAttribute("src", el.img1)

box.append(img1);
document.querySelector("#categoryDiv").append(box);
});

brandData = [
    {
        img1:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/c2ebdc76-63fd-457c-9e5d-4b604409e3321645091808215-H-M.jpg"
    },
    {
        img1:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/a1f76c21-58ea-4183-8a8f-d87eabd11ff81645091808025-_20.jpg"
    },
    {
        img1:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/c6c7862e-b018-4eae-bab6-41cb216b91691645091808167-_39.jpg"
    },
    {
        img1:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/c34b893d-576a-415b-be28-60f6c97bcc821645091808151-_37.jpg"
    },
    {
        img1:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/8ca811ce-f00e-499e-b082-610eea5e74201645091807945-_8.jpg"
    },
];

brandData.map(function (el, i, arr) {

var box = document.createElement("div");
var img1 = document.createElement("img")
img1.setAttribute("src", el.img1)

box.append(img1);
document.querySelector("#brandDiv").append(box);
});

luxeData = [
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/4b15e1b6-1685-4de9-973b-6b58899198591645090228520-QL_Homepage_KurtaSets_.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/39b41c00-da17-4adf-b34a-f84e0669c9c61645090228631-QL_women_Watches.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/54bad9cd-cee1-41c7-9410-103332225e881645090228604-QL_women_Makeup.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/8c4d4202-193a-4104-82a8-4cdf1ad580481645090228527-QL_Homepage_Sarees_.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/004b66cb-33e7-4b14-9dc4-d524d9823abe1645090228597-QL_women_Jeans.jpg"
    },
];

luxeData.map(function (el, i, arr) {

var box = document.createElement("div");
var img = document.createElement("img")
img.setAttribute("src", el.img)

box.append(img);
document.querySelector("#luxeDiv").append(box);
});

trendData = [
     {
         img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/727341ac-b6e2-4bb3-8744-e944fc7c23541645179553484-Clearance_DK_WP_02.jpg "
     },
    {
        img:" https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/d55285e2-20de-4b58-a5ab-85fc0077db3d1645179553492-Clearance_DK_WP_03.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/0ff09190-42b6-492e-9177-277b7207d8601645179553499-Clearance_DK_WP_04.jpg "
    },
    {
        img:" https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/9db51d55-b6ed-41ef-80e6-7f0c30c7113e1645179553507-Clearance_DK_WP_05.jpg"
    },
    {
        img:" https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/639bf70e-a851-402e-9517-33057d863cb71645179553514-Clearance_DK_WP_06.jpg"
    },
    {
        img:" https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/fdd305c9-5b84-49c8-8f00-19808aee9afb1645179553521-Clearance_DK_WP_07.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/929154ee-3701-490d-b4ff-17f397efa29d1645179553529-Clearance_DK_WP_08.jpg "
    },
    {
        img:" https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/7ec920a9-13bf-4520-9747-5839bf61491c1645179553536-Clearance_DK_WP_09.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/b22abd86-34e5-4b87-80e6-48f4882244101645179553544-Clearance_DK_WP_10.jpg "
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/f4ba3e2d-de76-4aa1-9416-1d2d43cddff91645179553551-Clearance_DK_WP_11.jpg "
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/a4a56393-ecc1-4c54-a248-5776ace5d2361645179553558-Clearance_DK_WP_12.jpg"
    },
    {
        img:" https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/3369ef3b-1e3f-4760-88a9-11f60d9ae91f1645179553567-Clearance_DK_WP_13.jpg"
    },
    {
        img:" https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/52078a40-4af4-4ffc-a1cc-ad0f98d1d1dd1645179553575-Clearance_DK_WP_14.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/099baeeb-00d3-43ca-bbc7-e8dfb61294271645179553583-Clearance_DK_WP_15.jpg "
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/c05ad1ec-9565-482e-affe-abd404dc93791645179553591-Clearance_DK_WP_16.jpg "
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/c831a890-b0cc-4bfd-b69c-ea55df4079fc1645179553598-Clearance_DK_WP_17.jpg "
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/f38e56fc-40ad-40cf-bb8e-5bca7513addd1645179553608-Clearance_DK_WP_18.jpg "
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/eb5165a9-e2ba-44b4-a8fc-4e65f7c810d11645179553615-Clearance_DK_WP_19.jpg"
    },
    {
        img:" https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/2b91891b-c4a2-459e-a732-15bc1e957b5a1645179553623-Clearance_DK_WP_20.jpg"
    },
    {
        img:" https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/272cf1e6-f113-4472-8f3c-ed89edf423801645179553630-Clearance_DK_WP_21.jpg"
    },
    {
        img:" https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/49831934-67f4-433b-8ce0-502e9935cf391645179553637-Clearance_DK_WP_22.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/3a40c4a1-178e-4d75-bc90-5a34836dc3401645179553644-Clearance_DK_WP_23.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/67701ddc-0961-4fa0-9d67-595b83e166d71645179553664-Clearance_DK_WP_24.jpg"
    },
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/7ace65de-81bd-4623-ac3d-06e47f4f74721645179553672-Clearance_DK_WP_25.jpg"
    },
    {
        img:" https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/bf4a3606-2981-436b-9c70-83e866cec21d1645179553689-Clearance_DK_WP_27.jpg"
    },
   {
       img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/cc9c25fc-5ea1-44d1-8728-25235eeb603b1645179553696-Clearance_DK_WP_28.jpg"
   },
   {
       img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/445bd154-91ab-41fe-a765-69d63c990f681645179553705-Clearance_DK_WP_29.jpg"
   }

];

trendData.map(function (el, i, arr) {

var box = document.createElement("div");
var img = document.createElement("img")
img.setAttribute("src", el.img)

box.append(img);
document.querySelector("#trendDiv").append(box);
});



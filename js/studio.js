

studioData = [
    {
        pimg:"https://static.toiimg.com/photo/msid-80933483/80933483.jpg?157288",
        userid:"Genelia123",
        follow:"follow",
        img: "https://www.bollywoodhungama.com/wp-content/uploads/2021/07/Genelia-Deshmukh-ups-the-fashion-ante-as-she-pairs-off-leather-pants-with-formal-shirt.jpeg"
    },
    {
        pimg:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/3/fdb0263d-0d15-4642-abfb-b855c69e395b1635913009059-7C763B42-C4C2-4410-8970-51711D78C915.jpeg",
        userid:"Genelia123",
        follow:"follow",
        img: "https://www.bollywoodhungama.com/wp-content/uploads/2021/07/Genelia-Deshmukh-ups-the-fashion-ante-as-she-pairs-off-leather-pants-with-formal-shirt.jpeg"
    },
    {
        pimg:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/3/fdb0263d-0d15-4642-abfb-b855c69e395b1635913009059-7C763B42-C4C2-4410-8970-51711D78C915.jpeg",
        userid:"Genelia123",
        follow:"follow",
        img: "https://www.bollywoodhungama.com/wp-content/uploads/2021/07/Genelia-Deshmukh-ups-the-fashion-ante-as-she-pairs-off-leather-pants-with-formal-shirt.jpeg"
    },
    {
        pimg:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/3/fdb0263d-0d15-4642-abfb-b855c69e395b1635913009059-7C763B42-C4C2-4410-8970-51711D78C915.jpeg",
        userid:"Genelia123",
        follow:"follow",
        img: "https://www.bollywoodhungama.com/wp-content/uploads/2021/07/Genelia-Deshmukh-ups-the-fashion-ante-as-she-pairs-off-leather-pants-with-formal-shirt.jpeg"
    },
    {
        pimg:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/3/fdb0263d-0d15-4642-abfb-b855c69e395b1635913009059-7C763B42-C4C2-4410-8970-51711D78C915.jpeg",
        userid:"Genelia123",
        follow:"follow",
        img: "https://www.bollywoodhungama.com/wp-content/uploads/2021/07/Genelia-Deshmukh-ups-the-fashion-ante-as-she-pairs-off-leather-pants-with-formal-shirt.jpeg"
    },
    {
        pimg:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/3/fdb0263d-0d15-4642-abfb-b855c69e395b1635913009059-7C763B42-C4C2-4410-8970-51711D78C915.jpeg",
        userid:"Genelia123",
        follow:"follow",
        img: "https://www.bollywoodhungama.com/wp-content/uploads/2021/07/Genelia-Deshmukh-ups-the-fashion-ante-as-she-pairs-off-leather-pants-with-formal-shirt.jpeg"
    },
    {
        pimg:"https://assets.myntassets.com/f_auto,q_100,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2021/11/3/fdb0263d-0d15-4642-abfb-b855c69e395b1635913009059-7C763B42-C4C2-4410-8970-51711D78C915.jpeg",
        userid:"Genelia123",
        follow:"follow",
        img: "https://www.bollywoodhungama.com/wp-content/uploads/2021/07/Genelia-Deshmukh-ups-the-fashion-ante-as-she-pairs-off-leather-pants-with-formal-shirt.jpeg"
    },
    ];
    
    
    
    studioData.map(function (el, i,arr) 
    {
    var box = document.createElement("div");
    box.setAttribute("id","mainbox")
    var navbar= document.createElement("div");
    navbar.setAttribute("id","postnav")
    dpbox=document.createElement("div")
    dpbox.setAttribute("id","dpbox")
    var dpimg = document.createElement("img");
    dpimg.setAttribute("id","dp")
    dpimg.setAttribute("src", el.pimg);
    var id= document.createElement("h4")
    id.innerText=el.userid;
    id.setAttribute("id","id")
    var follow= document.createElement("p")
    follow.innerText=el.follow
    follow.setAttribute("id","follow")
    var img = document.createElement("img");
    img.setAttribute("src", el.img);
    dpbox.append(dpimg)
    navbar.append(dpbox,id,follow)
    box.append(navbar,img);
    document.querySelector("#postDiv").append(box);
    });
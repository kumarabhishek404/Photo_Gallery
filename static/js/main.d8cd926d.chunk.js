(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,a,t){},18:function(e,a,t){e.exports=t(32)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var m=t(0),i=t.n(m),n=t(15),l=t.n(n),c=(t(23),t(1)),r=t(2),s=t(17);t(24);var g=function(){var e=Object(m.useState)(!1),a=Object(s.a)(e,2),t=a[0],n=a[1],l=function(){return n(!1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"navbar-container"},i.a.createElement(c.b,{to:"/",className:"navbar-logo",onClick:l},"HOME ",i.a.createElement("i",{class:"fas fa-home"})),i.a.createElement("div",{className:"menu-icon",onClick:function(){return n(!t)}},i.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),i.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(c.b,{to:"/",className:"nav-links",onClick:l},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(c.b,{to:"/gallery",className:"nav-links",onClick:l},"Gallery")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(c.b,{to:"/contact",className:"nav-links",onClick:l},"Contact")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(c.b,{to:"/about",className:"nav-links",onClick:l},"About Us"))))))};t(14);var o=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"card_item"},i.a.createElement(c.b,{className:"card_item_link",to:e.path},i.a.createElement("figure",{className:"card_item_pic-wrap","data-category":e.person?e.person:"Family"},i.a.createElement("img",{src:"https://instagram.fdel5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/101946340_898951753907047_7814903735976015049_n.jpg?_nc_ht=instagram.fdel5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=qyy41W-fnU4AX-NHCsH&oh=5d4c7e586c3c56d6a3fed544a1ea6343&oe=5F985EB4",alt:"Home Image",className:"card_item_img"})),i.a.createElement("div",{className:"card_item_info"}))))};var p=function(e){return console.log(e),i.a.createElement("div",{className:"card"},i.a.createElement("h1",null,e.greet?e.greet:""),i.a.createElement("h1",null,e.heading),i.a.createElement("div",{className:"card_links"},i.a.createElement("div",{className:"card_links_box"},i.a.createElement(c.b,{to:"/papa",className:"links"},"Papa"),i.a.createElement(c.b,{to:"/mummy",className:"links"},"Mummy"),i.a.createElement(c.b,{to:"/sister",className:"links"},"Sister"),i.a.createElement(c.b,{to:"/bhai",className:"links"},"Bhai"),i.a.createElement(c.b,{to:"me",className:"links"},"Abhishek"))),i.a.createElement("div",{className:"card_container"},i.a.createElement("div",{className:"card_wrapper"},i.a.createElement("ul",{className:"card_items"},i.a.createElement(o,{path:e.root?e.root.papa:"/",src:e.src.image1,text:"Papa is my love ",person:e.relation?e.relation.father:""}),i.a.createElement(o,{path:e.root?e.root.mummy:"/",src:e.src.image2,person:e.relation?e.relation.mother:""})),i.a.createElement("ul",{className:"card_items"},i.a.createElement(o,{path:e.root?e.root.sister:"/",src:e.src.image3,text:"Papa is my love ",person:e.relation?e.relation.smallSister:""}),i.a.createElement(o,{path:e.root?e.root.bhai:"/",src:e.src.image4,text:"Papa is my love ",person:e.relation?e.relation.brother:""}),i.a.createElement(o,{path:e.root?e.root.me:"/",src:e.src.image5,text:"Papa is my love ",person:e.relation?e.relation.me:""})),i.a.createElement("ul",{className:"card_items"},i.a.createElement(o,{path:"/",src:e.src.image6,text:"Papa is my love "}),i.a.createElement(o,{path:"/",src:e.src.image7,text:"Papa is my love "}),i.a.createElement(o,{path:"/",src:e.src.image8,text:"Papa is my love "})),i.a.createElement("ul",{className:"card_items"},i.a.createElement(o,{path:"/",src:e.src.image9,text:"Papa is my love "}),i.a.createElement(o,{path:"/",src:e.src.image10,text:"Papa is my love "})))))},u={father:"Father",mother:"Mother",brother:"Brother",bigSister:"Sister",smallSister:"Sister",me:"Me"},E={image1:"/images/Papa/img1.jpg",image2:"/images/Mummy/img1.jpg",image3:"/images/Sister/img1.jpg",image4:"/images/Bhai/img1.jpg",image5:"/images/Abhishek/img5.jpg",image6:"/images/Kittu-Rishabh/img1.jpg",image7:"/images/Kittu-Rishabh/img6.jpg",image8:"/images/Kittu-Rishabh/img3.jpg",image9:"/images/Kittu-Rishabh/img8.jpg",image10:"/images/Abhishek/img10.jpg"},h={papa:"/papa",mummy:"/mummy",sister:"/sister",bhai:"/bhai",me:"/me",home:"/home"};var b=function(){return Object(m.useEffect)((function(){window.scrollTo(0,0)}),[]),i.a.createElement("div",null,i.a.createElement(p,{src:E,relation:u,root:h,greet:"Hello, Guys",heading:"Come into my family gallery"}))},d=(t(30),t(31),["btn_primary","btn_outline"]),f=["btn_medium","btn_large"];var v=function(e){var a=e.type,t=e.onClick,m=e.buttonStyle,n=e.buttonSize,l=e.children,r=d.includes(m)?m:d[1],s=f.includes(n)?n:f[0];return i.a.createElement("div",null,i.a.createElement(c.b,null,i.a.createElement("button",{className:"btn ".concat(r," ").concat(s),onClick:t,type:a},l)))};var j=function(){return i.a.createElement("div",{className:"footer_container"},i.a.createElement("section",{className:"contact_container"},i.a.createElement("div",{className:"contact_heading"},i.a.createElement("h2",null,"Join this portal for travel in a family photo gallery")),i.a.createElement("div",{className:"contact_form"},i.a.createElement("form",null,i.a.createElement("input",{type:"text",placeholder:"Your Email"}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",placeholder:"Your Username"}),i.a.createElement("br",null),i.a.createElement(v,{buttonStyle:"",buttonSize:"btn_medium"},"Join")))),i.a.createElement("section",null,i.a.createElement("div",{className:"social"},i.a.createElement("div",{className:"social_logo"},"HOME ",i.a.createElement("i",{className:"fas fa-home"})),i.a.createElement("div",{className:"websites_rights"},"HOME ",i.a.createElement("i",{className:"far fa-copyright"})," 2020"),i.a.createElement("div",{className:"social_media"},i.a.createElement("div",{className:"social_media_icons"},i.a.createElement(c.b,{className:"social_media_icon",to:"https://www.facebook.com",target:"_blank","aria-label":"Facebook"},i.a.createElement("i",{className:"fab fa-facebook-f"})),i.a.createElement(c.b,{className:"social_media_icon",to:"https://www.instagram.com",target:"_blank","aria-label":"Intagram"},i.a.createElement("i",{className:"fab fa-instagram"})),i.a.createElement(c.b,{className:"social_media_icon",to:"https://www.whatsapp.com",target:"_blank","aria-label":"Whatsapp"},i.a.createElement("i",{className:"fab fa-whatsapp"})),i.a.createElement(c.b,{className:"social_media_icon",to:"https://www.linkedin",target:"_blank","aria-label":"Linkedin"},i.a.createElement("i",{className:"fab fa-linkedin"})))))),i.a.createElement("section",null,i.a.createElement("div",{className:"about_container"},i.a.createElement("div",{className:"address"},i.a.createElement("p",null,"Village-",i.a.createElement("span",null,"Balipur")),i.a.createElement("p",null,"Post-",i.a.createElement("span",null,"Shakroli")),i.a.createElement("p",null,"Tehsil-",i.a.createElement("span",null,"Jalesar")),i.a.createElement("p",null,"District-",i.a.createElement("span",null,"Etah"))),i.a.createElement("div",{className:"contacts"},i.a.createElement("p",null,"Mobile-",i.a.createElement("span",null,"+91-6397308499")),i.a.createElement("br",null),i.a.createElement("p",null,"Email-",i.a.createElement("span",null,"ak111edu000@gmail.com")),i.a.createElement("br",null),i.a.createElement("p",null,"Email-",i.a.createElement("span",null,"abhishek19@navgurukul.org")),i.a.createElement("br",null),i.a.createElement("p",null,"Website-",i.a.createElement("span",null,i.a.createElement("a",{href:"http://www.animadrive.in",target:"_blank"},"http://www.animadrive.in")))),i.a.createElement("div",{className:"quatation"},i.a.createElement("p",null,"\u201cFamily is not an important thing. It's everything.\u201d ",i.a.createElement("span",null,"\u2013 Michael J. Fox."))))))},N={image1:"/images/Abhishek/img1.jpg",image2:"/images/Abhishek/img2.jpg",image3:"/images/Abhishek/img3.jpg",image4:"/images/Abhishek/img4.jpg",image5:"/images/Abhishek/img5.jpg",image6:"/images/Abhishek/img6.jpg",image7:"/images/Abhishek/img7.jpg",image8:"/images/Abhishek/img8.jpg",image9:"/images/Abhishek/img9.jpg",image10:"/images/Abhishek/img10.jpg"};var _=function(){return Object(m.useEffect)((function(){window.scrollTo(0,0)}),[]),i.a.createElement("div",null,i.a.createElement(p,{src:N,heading:"Abhishek Kumar"}))},k={image1:"/images/Bhai/img1.jpg",image2:"/images/Bhai/img2.jpg",image3:"/images/Bhai/img3.jpg",image4:"/images/Bhai/img4.jpg",image5:"/images/Bhai/img5.jpg",image6:"/images/Bhai/img6.jpg",image7:"/images/Bhai/img7.jpg",image8:"/images/Bhai/img8.jpg",image9:"/images/Bhai/img9.jpg",image10:"/images/Bhai/img10.jpg"};var y=function(){return Object(m.useEffect)((function(){window.scrollTo(0,0)}),[]),i.a.createElement("div",null,i.a.createElement(p,{src:k,heading:"Vivek Singh"}))},w={image1:"/images/Papa/img1.jpg",image2:"/images/Papa/img2.jpeg",image3:"/images/Papa/img1.jpg",image4:"/images/Papa/img1.jpg",image5:"/images/Papa/img1.jpg",image6:"/images/Papa/img1.jpg",image7:"/images/Papa/img1.jpg",image8:"/images/Papa/img1.jpg",image9:"/images/Papa/img1.jpg",image10:"/images/Papa/img1.jpg"};var S=function(){return Object(m.useEffect)((function(){window.scrollTo(0,0)}),[]),i.a.createElement("div",null,i.a.createElement(p,{src:w,heading:"Papa Ji"}))},P={image1:"/images/Mummy/img1.jpg",image2:"/images/Mummy/img1.jpg",image3:"/images/Mummy/img1.jpg",image4:"/images/Mummy/img1.jpg",image5:"/images/Mummy/img1.jpg",image6:"/images/Mummy/img1.jpg",image7:"/images/Mummy/img1.jpg",image8:"/images/Mummy/img1.jpg",image9:"/images/Mummy/img1.jpg",image10:"/images/Mummy/img1.jpg"};var M=function(){return Object(m.useEffect)((function(){window.scrollTo(0,0)}),[]),i.a.createElement("div",null,i.a.createElement(p,{src:P,heading:"Mummy Ji"}))},A={image1:"/images/Sister/img1.jpg",image2:"/images/Sister/img1.jpg",image3:"/images/Sister/img1.jpg",image4:"/images/Sister/img1.jpg",image5:"/images/Sister/img1.jpg",image6:"/images/Sister/img1.jpg",image7:"/images/Sister/img1.jpg",image8:"/images/Sister/img1.jpg",image9:"/images/Sister/img1.jpg",image10:"/images/Sister/img1.jpg"};var x=function(){return Object(m.useEffect)((function(){window.scrollTo(0,0)}),[]),i.a.createElement("div",null,i.a.createElement(p,{src:A,heading:"Didi"}))};var B=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(c.a,null,i.a.createElement(g,null),i.a.createElement(r.c,null,i.a.createElement(r.a,{path:"/",component:b,exact:!0}),i.a.createElement(r.a,{path:"/gallery",component:b}),i.a.createElement(r.a,{path:"/about",component:b}),i.a.createElement(r.a,{path:"/contact",component:b}),i.a.createElement(r.a,{path:"/me",component:_}),i.a.createElement(r.a,{path:"/bhai",component:y}),i.a.createElement(r.a,{path:"/papa",component:S}),i.a.createElement(r.a,{path:"/mummy",component:M}),i.a.createElement(r.a,{path:"/sister",component:x})),i.a.createElement(j,null)))};l.a.render(i.a.createElement(B,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d8cd926d.chunk.js.map
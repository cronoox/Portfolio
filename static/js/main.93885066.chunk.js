(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"text":"I\'m a graduate student studying Master\'s in Computer Science at University of Texas at Dallas. Also I love Ramen and making applications."}]')},function(e){e.exports=JSON.parse('[{"heading":"Portfolio","time":"April 2020","about":"Developed a Portfolio website using React JS. I made this website as a side project while learning React. The website uses Bootstrap for styling and to make the website responsive for different platforms. Jquery is used for DOM tree traversal and manipulation, as well as some event handling, CSS animation, and AJAX. The text data is retrived asynchronously using AJAX calls.","link":"https://github.com/adityamathur97/Portfolio"},{"heading":"Stock Market Web Application","time":"November 2019","about":"Created a stock exchange web application that allows users to buy and sell stocks. Developed a scalable 3-tier responsive web application based on SOA principals. Also implemented backend RESTful APIs for stock trading. User profile management and Bank transactions were maintened by a MySQL database. Made asynchronous AJAX calls to Stock brokerage web services for fetching data. Also implemented distributed caching using Memcached.","link":"https://github.com/adityamathur97/StockMarketWebsite-master"},{"heading":"B+ Tree Indexing","time":"October 2019","about":"Wrote a C++ program to implement B+ tree indexing of records in a text file. The program reads the text file containing data and builds the index, treating the first n columns as the key, where n is specified by the user. The program reads block of data, manipulate it, write it back out as a block. The program uses long(8-byte) record address for pointers. The program supports following operations - create an index file, find a record by index, insert a new text record and list sequential records.","link":"https://github.com/adityamathur97/Bplus-Tree-Indexing"},{"heading":"Library Management System","time":"September 2019","about":"Designed a scaled-back library program that lets you add, change, search and delete books. GUI of the program was created using Swing widget toolkit. The program handles multiple copies of books in multiple formats. SQL injection is handled using prepared statements. Most of the constraints were set on database side. Certain validations or constraints are set on UI side like edition of a book can\'t have alphabet in it, author name doesn\'t accept numbers which is implemented using key press event capture. Also once ISBN is entered for a book it can\'t be changed. The only possible way is to remove and insert the ISBN again.","link":"https://github.com/adityamathur97/Library-Management-System"},{"heading":"Emotion & Gender Detection - Mini-Xception CNN Model","time":"May 2019","about":"Facial expressions have a higher importance than other factors like pose, speech, behavior etc since they are easily perceptible. In communicating with others humans, one can recognize emotions of another human with a considerable level of accuracy. Worked on improving the emotion detection from facial expression recognition using the latest Convolution Neural Network(CNN) architecture \u2013 Xception architecture. Using the Facial Expression Recognition (FER) dataset provided by a Kaggle challenge which consists of 48\xd748 pixel gray scale images of faces.","link":"#"},{"heading":"Emotion Detection - Comparision of SVM, CNN & ANN","time":"October 2018","about":"","link":"https://github.com/adityamathur97/Emotion-Detection-using-SVM-CNN-ANN"},{"heading":"Face Recognition Using OpenCV","time":"","about":"","link":"#"},{"heading":"MCDA Using Euclidean Distance Method","time":"","about":"","link":"#"}]')},function(e,a,t){e.exports=t(31)},,,,,,function(e,a,t){},,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/me.4ef62213.jpg"},function(e,a,t){e.exports=t.p+"static/media/software_engineers.392516ba.svg"},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/favicon.6e1267d9.ico"},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(8),o=t.n(r),c=(t(16),t(17),t(18),t(19),t(21),t(2)),s=t(3),l=t(6),m=t(5),d=t(4),u=(t(22),t(1)),h=t.n(u),p=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={firstLoad:!0},e.changeActive=e.changeActive.bind(Object(l.a)(e)),e}return Object(s.a)(t,[{key:"changeActive",value:function(e){h()(".myLinks").removeclassName("active"),h()(e).addclassName("active")}},{key:"render",value:function(){return i.a.createElement("div",{className:"myNavBar"},i.a.createElement("nav",{className:"myNavbarNav navbar navbar-expand-lg navbar-light"},i.a.createElement("span",{id:"myBrand",className:"navbar-brand",href:"#"},"Portfolio"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},i.a.createElement("ul",{className:"navbar-nav myNavBarUl"},i.a.createElement("li",{id:"myNavItemID",className:"nav-item myNavItem"},i.a.createElement("a",{className:"nav-link myNavLink",href:"#aboutMe"},"About")),i.a.createElement("li",{id:"myNavItemID",className:"nav-item myNavItem"},i.a.createElement("a",{className:"nav-link myNavLink",href:"#projectLink"},"Projects")),i.a.createElement("li",{id:"myNavItemID",className:"nav-item myNavItem"},i.a.createElement("a",{className:"nav-link myNavLink",href:"#"},"Skills")),i.a.createElement("li",{id:"myNavItemID",className:"nav-item myNavItem"},i.a.createElement("a",{className:"nav-link myNavLink",href:"#contactLink"},"Contact"))))))}}]),t}(i.a.Component),b=t(9),g=(t(23),t(24),function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=h()("#aboutMe").height()/8;h()("#aboutMe").css("margin-bottom",-1*e)}},{key:"render",value:function(){return i.a.createElement("div",{id:"aboutMe",className:"userImageDiv"},i.a.createElement("img",{className:"userImage",src:t(25),alt:"Aditya"}))}}]),n}(i.a.Component)),v=function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).loadAbout=function(){h()(b).each((function(){h()(".cardDesc").append(this.text)}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.loadAbout(),h()("#changeText").fadeOut(0,(function(){h()("#changeText").fadeIn(3500,(function(){h()("#changeText").fadeOut(3500)}))}));var e,a=["Aditya Mathur","A Developer"],t=1;setInterval((function(){h()("#changeText").fadeOut(3500,(function(){h()("#changeText").empty(),e=a[t%a.length],++t===a.length&&(t=0),h()("#changeText").append(e),h()("#changeText").fadeIn(3500)}))}),7e3)}},{key:"render",value:function(){return i.a.createElement("div",{className:"card mb-3 aboutCard shadow p-3 mb-5 bg-white rounded"},i.a.createElement("div",{className:"row no-gutters"},i.a.createElement("div",{className:"col-md-7 textDiv"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h1",{className:"card-title cardHeading"},"Hello Folks! I'm ",i.a.createElement("span",{id:"changeText"},"Aditya Mathur")),i.a.createElement("p",{className:"card-text cardDesc"}),i.a.createElement("button",{type:"button",className:"btn btn-lg contButton  shadow-sm"},"Resume ",i.a.createElement("i",{className:"fas fa-file-download"})))),i.a.createElement("div",{className:"col-md-5"},i.a.createElement("img",{src:t(26),className:"card-img aboutLogo",alt:"..."}))))}}]),n}(i.a.Component),f=(t(27),function(e){Object(m.a)(n,e);var a=Object(d.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"skyLineDiv"},i.a.createElement("p",{className:"foot"},"Made with ",i.a.createElement("img",{src:t(28),alt:"React Logo"})))}}]),n}(i.a.Component)),N=t(10),y=(t(29),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){h()(N).each((function(e,a){var t='<div class="projectDiv"><h2 class="projectTitle"><a class="projectTitleLink" target="_blank" href='+a.link+">"+a.heading+'</a></h2><p class="projectDate">'+a.time+'</p><p class="projectDesc">'+a.about+"</p></div>";h()("#projectContent").append(t)}))}},{key:"render",value:function(){return i.a.createElement("div",{id:"projectLink",className:"projectsContainer shadow p-3 mb-5 bg-white rounded"},i.a.createElement("i",{className:"fas fa-project-diagram clipIcon"}),i.a.createElement("h1",{className:"projectHeading"},"Projects"),i.a.createElement("div",{id:"projectContent"}))}}]),t}(i.a.Component)),k=(t(30),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"contactLink",className:"contactContainer shadow p-3 mb-5 bg-white rounded"},i.a.createElement("i",{className:"fas fa-phone clipIcon"}),i.a.createElement("h1",{className:"projectHeading"},"Get in touch"),i.a.createElement("div",{className:"allMedia"},i.a.createElement("div",{className:"mediaIconDiv"},i.a.createElement("a",{target:"_blank",href:"#"},i.a.createElement("i",{className:"fas fa-envelope media"}))),i.a.createElement("div",{className:"mediaIconDiv"},i.a.createElement("a",{target:"_blank",href:""},i.a.createElement("i",{className:"fab fa-linkedin media"}))),i.a.createElement("div",{className:"mediaIconDiv"},i.a.createElement("a",{target:"_blank",href:""},i.a.createElement("i",{className:"fab fa-github-square media"}))),i.a.createElement("div",{className:"mediaIconDiv"},i.a.createElement("a",{target:"_blank",href:""},i.a.createElement("i",{className:"fab fa-facebook media"}))),i.a.createElement("div",{className:"mediaIconDiv"},i.a.createElement("a",{target:"_blank",href:""},i.a.createElement("i",{className:"fab fa-twitter-square media"})))))}}]),t}(i.a.Component));var E=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",null,"Work In Progress!!!"),i.a.createElement("div",{className:"bodyContent"},i.a.createElement(p,null),i.a.createElement(g,null),i.a.createElement(v,null),i.a.createElement(y,null),i.a.createElement(k,null),i.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.93885066.chunk.js.map
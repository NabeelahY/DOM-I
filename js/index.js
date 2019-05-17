const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// NAV - BAR
let nav = document.querySelector('nav');

nav.children[0].innerText = siteContent.nav["nav-item-1"];
nav.children[1].innerText = siteContent.nav["nav-item-2"];
nav.children[2].innerText = siteContent.nav["nav-item-3"];
nav.children[3].innerText = siteContent.nav["nav-item-4"];
nav.children[4].innerText = siteContent.nav["nav-item-5"];
nav.children[5].innerText = siteContent.nav["nav-item-6"];

// CREATE NEW ELEMENTS

let blog = document.createElement('a');
blog.innerText = 'Blog';
nav.appendChild(blog);

let home = document.createElement('a');
home.innerText = 'Home';
nav.prepend(home);

// CHANGE NAV TEXT GREEN 
[...nav.children].map(e => e.setAttribute('style', 'color: green'));



// BANNER
let mainHeader = document.querySelector('div.cta-text > h1')
mainHeader.innerText = siteContent.cta.h1;

let mainBtn = document.querySelector('div.cta-text > button')

mainBtn.innerText = siteContent.cta.button;

let mainImg = document.getElementById("cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"])


// TOP-CONTENT
let topContentTitle = document.querySelectorAll('div.top-content > div > h4');

topContentTitle[0].innerText = siteContent["main-content"]["features-h4"];

topContentTitle[1].innerText = siteContent["main-content"]["about-h4"];

let topContent = [...document.querySelectorAll('div.top-content > div > p')];

topContent[0].innerText = siteContent["main-content"]["features-content"];

topContent[1].innerText = siteContent["main-content"]["about-content"];

//MIIDLE IMG

let middleImg = document.getElementById("middle-img");

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// BOTTOM CONTENT

let bottomContentTitle = document.querySelectorAll('div.bottom-content > div > h4');

bottomContentTitle[0].innerText = siteContent["main-content"]["services-h4"];

bottomContentTitle[1].innerText = siteContent["main-content"]["product-h4"];

bottomContentTitle[2].innerText = siteContent["main-content"]["vision-h4"];

let bottomContent = document.querySelectorAll('div.bottom-content > div > p');

bottomContent[0].innerText = siteContent["main-content"]["services-content"];

bottomContent[1].innerText = siteContent["main-content"]["product-content"];

bottomContent[2].innerText = siteContent["main-content"]["vision-content"];

// CONTACT

let contactTitle = document.querySelector('section.contact > h4');

contactTitle.innerText = siteContent["contact"]["contact-h4"];

let contactPar = document.querySelectorAll('section.contact > p');

contactPar[0].innerText = siteContent["contact"].address;
contactPar[1].innerText = siteContent["contact"].phone;
contactPar[2].innerText = siteContent["contact"].email;

// FOOTER

let footer = document.querySelector('footer > p');

footer.innerText = siteContent["footer"].copyright;

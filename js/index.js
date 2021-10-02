gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play reverse restart reverse",
    scroller: ".scrollContainer"
  });


/* Landing Section Animation */

gsap.from(".menu > div", {
    duration: 2,
    opacity: 0,     
    x: -30,
    ease: "Expo.easeInOut",
    stagger: 0.1,
});

let tl = gsap.timeline({scrollTrigger: {
    trigger: '.landing_sec',
    start: '49% center',
    end: '101% bottom',
}});

tl.to("#hr1", {
    duration: 2,
    opacity: 1,     
    width: "73vw",
    ease: "Expo.easeInOut",
    stagger: 0.1,
});

tl.from("#header1", {
    duration: 2,
    opacity: 0,     
    y: 30,
    ease: "Expo.easeInOut",
    stagger: 0.1,
    delay: -1
});

tl.to("#box1", {
    duration: 2.4,
    y: "-100%",
    ease: "Expo.easeInOut",
    delay: -2,
});

tl.from(".right_nav > div", {
    duration: 2,
    opacity: 0,     
    x: 30,
    ease: "Expo.easeInOut",
    delay: -2,
    stagger: 0.1,
});

tl.from(".landing_slogan", {
    duration: 2,
    opacity: 0,     
    y: 30,
    ease: "Expo.easeInOut",
    delay: -2.5,
    stagger: 0.1,
});

/* About Section Animation */

let tl2 = gsap.timeline({scrollTrigger: {
    trigger: '.about_sec',
    start: '5% bottom',
    end: '105% bottom',
}});

tl2.to("#hr2", {
    duration: 2,
    opacity: 1,     
    width: "73vw",
    ease: "Expo.easeInOut",
    stagger: 0.1,
});

tl2.from("#header2", {
    duration: 2,
    opacity: 0,     
    y: 30,
    ease: "Expo.easeInOut",
    delay: -1.5,
    stagger: 0.1,
});

tl2.to("#box2", {
    duration: 2.4,
    top: "100%",
    ease: "Expo.easeInOut",
    delay: -2,
});

tl2.from(".about_title", {
    duration: 2,
    opacity: 0,    
    x: -30,
    ease: "Expo.easeInOut",
    stagger: 0.1,
    delay:-2
});

tl2.from(".little_details", {
    duration: 2,
    delay: -2,
    opacity: 0,     
    y: 30,
    ease: "Expo.easeInOut",
    stagger: 0.1,
});

tl2.to("#expand", {
    duration: 2,
    opacity: 1,
    x: -30,  
    delay: -2,   
    ease: "Expo.easeInOut",
    stagger: 0.1,
});

/* Utility Expand & Collapse */

const clickMore = document.querySelector('#expand');
const clickLess = document.querySelector('#collapse');

clickMore.addEventListener('click', () => {

    gsap.to("#expand", {
        opacity: 0,
        display: "none",
        duration: 0.5
    });

    gsap.to("#collapse", {
        delay: 0.5,
        duration: 0.5,
        display: "block",
        opacity: 1,
        x: -30
    });
   
    gsap.to('.little_details', {
        y: -320,
        duration: 2,
        ease: "Expo.easeInOut",
    });
    gsap.to('.extended_details', {
        opacity:1,
        duration: 1.5,
        delay:1,
        ease: "Expo.easeInOut",
    });
    

});

clickLess.addEventListener('click', () => {

    gsap.to("#collapse", {
        opacity: 0,
        display: "none",
        duration: 0.5
    });
    gsap.to("#expand", {
        delay: 0.5,
        duration: 0.5,
        opacity: 1,
        display: "block",
    }); 

    gsap.to('.little_details', {
        y: 10,
        duration: 2,
        delay: 1,
        ease: "Expo.easeInOut",
    });
    gsap.to('.extended_details', {
        opacity:0,
        duration: 1.5,
        ease: "Expo.easeInOut",
    });

});

/* Project Section Animation */

let tl3 = gsap.timeline({scrollTrigger: {
    trigger: ".project_sec",
    start: "5% bottom", 
    end: '105% bottom',
}});

tl3.to("#hr3", {
    duration: 2,
    opacity: 1,     
    width: "73vw",
    ease: "Expo.easeInOut",
    stagger: 0.1,
});

tl3.from("#header3", {
    duration: 2,
    opacity: 0,     
    y: 30,
    ease: "Expo.easeInOut",
    delay: -1.5,
    stagger: 0.1,
});

tl3.to(".box_project", {
    duration: 2,
    left: "100%",
    ease: "Expo.easeInOut",
    delay: -2
});

tl3.to(".project_number", {
    duration: 2,
    x: 30,
    opacity:1,
    ease: "Expo.easeInOut",
    delay: -1
});

tl3.to(".project_name", {
    duration: 2,
    x: 30,
    opacity:1,
    ease: "Expo.easeInOut",
    delay: -2
}); 

/* Slideshow */

var imgArray = new Array();
imgArray[0]= "../img/aidiz.jpg";
imgArray[1] = "../img/anomaly.jpg";
imgArray[2] = "../img/aphrobity.jpg";

var titleArray = new Array();
titleArray[0] = "AIDIZ";
titleArray[1] = "ANOMALY";
titleArray[2] = "APHROBITY";

var numberArray = new Array();
numberArray[0] = "#01";
numberArray[1] = "#02";
numberArray[2] = "#03";

var slideNumber = 0;

const projectImg = document.querySelector('.project_img');
const projectTitle = document.querySelector('.project_name');
const projectNumber = document.querySelector('.project_number');

projectTitle.innerHTML = titleArray[slideNumber];
projectNumber.innerHTML = numberArray[slideNumber];
projectImg.style.setProperty("background-image", "url(" + imgArray[slideNumber] + ")");
projectImg.style.setProperty("background-size", "cover");

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

function slideTransition() {

    gsap.to(".box_project", {
        duration: 2,
        left: 0,
        ease: "Expo.easeInOut",
        
    });

    gsap.to(".box_project", {
        duration: 2,
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 2,
    });

    gsap.to(".project_number", {
        duration: 1.4,
        x: -30,
        opacity:0,
        ease: "Expo.easeInOut",
        
    });

    gsap.to(".project_number", {
        duration: 1.4,
        x: 30,
        opacity:1,
        ease: "Expo.easeInOut",
        delay: 3
    });

    gsap.to(".project_name", {
        duration: 1.4,
        x: -30,
        opacity:0,
        ease: "Expo.easeInOut",
    });

    gsap.to(".project_name", {
        duration: 1.4,
        x: 30,
        opacity:1,
        ease: "Expo.easeInOut",
        delay: 3
    }); 

    setTimeout(() => {
        projectTitle.innerHTML = titleArray[slideNumber];
        projectNumber.innerHTML = numberArray[slideNumber];
        projectImg.style.setProperty("background-image", "url(" + imgArray[slideNumber] + ")");

    }, 2000);

};

previous.addEventListener('click', () => {

    if (slideNumber > 0) {

        slideNumber--;
        slideTransition();
       
    } else {

        slideNumber = 2;
        slideTransition();
    }

});

next.addEventListener('click', () => {

    if (slideNumber < 2) {

        slideNumber++;
        slideTransition();

    } else {

        slideNumber = 0;
        slideTransition();
    }

});

/* Project Details Page */

const projectPage = document.querySelector('.project_img');
const projectDetailImg = document.querySelector('.project_detail_img');
const projectDetailLetter = document.querySelector("#header4");
const projectDetailDetails = document.querySelector('.project_detail_details');
const projectDetailPeople = document.querySelector('.project_detail_people');

function people(role, people) {

    const rol = document.createElement('p');
    rol.innerHTML = role;
    const pers = document.createElement('span');
    pers.innerHTML = people;
    rol.setAttribute("class", "role");
    rol.appendChild(pers);
    projectDetailPeople.appendChild(rol);

};

function vimeoLink(link) {

    document.querySelector('.vimeo').setAttribute("href", link);

}

var peopleArray = new Array(); 

var detailsArray = new Array();
detailsArray[0] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
detailsArray[1] = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.";
detailsArray[2] = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.";

projectPage.addEventListener('click', () => {
    
    gsap.to('.project_detail_page', {
        display: "block",
        top: "0%",
        duration: 2.4,
        ease: "Expo.easeInOut",
    });  

    gsap.to('body', {
        overflow: "hidden",
    });

    gsap.to("#hr4", {
        duration: 2,
        opacity: 1,     
        width: "73vw",
        ease: "Expo.easeInOut",
        delay: 1.7
    });

    gsap.from("#header4", {
        duration: 2,
        opacity: 0,     
        y: 30,
        ease: "Expo.easeInOut",
        delay: 1.7,
        stagger: 0.1,
    });

    projectDetailImg.style.setProperty("background-image", "url(" + imgArray[slideNumber] + ")");
    projectDetailImg.style.setProperty("background-size", "cover");
    projectDetailDetails.innerHTML = detailsArray[slideNumber];
    projectDetailLetter.innerHTML = "// " + titleArray[slideNumber].toLowerCase();
    
    if (titleArray[slideNumber] === "AIDIZ"){     

       peopleArray =  [
            people("conceived by: ", "Ion Taliouridis, Lefteris Vasilopoulos"),
            people("directed by: ", "Thanasis Tsimpinis"),
            people("choreographed by: ", "Ion Taliouridis"),
            people("photographed by: ", "Dimitris Mavromatis"),
            people("original music by: ", "Hydrama"),
            people("hair & mu by: ", "Manos Kamakaris"),
            people("with: ", "Lefteris Vasilopoulos, Stela Salamani, Ion Taliouridis, Fotini Tasiolamprou, Katerina Philotheou"),
        ];

        vimeoLink("https://vimeo.com/italiour");


    } else if (titleArray[slideNumber] === "ANOMALY"){ 

        peopleArray =  [
            people("conceived by: ", "Ion Taliouridis"),
            people("choreographed by: ", "Ion Taliouridis, Katerina Philotheou"),
            people("original music by: ", "Hydrama"),
            people("lightning by: ", "Ion Taliouridis"),
            people("hair & mu by: ", "Manos Kamakaris"),
            people("with: ", "Elli Dikaiakou, Aristotelis Felix, Iliana Sakaloglou, Ion Taliouridis, Katerina Philotheou"),
        ];

        vimeoLink("https://vimeo.com/italiour");


    } else if (titleArray[slideNumber] === "APHROBITY") {

        peopleArray = [
            people("conceived by: ", "Ion Taliouridis"),
            people("original music by: ", "Hydrama"),
            people("with: ", "Ion Taliouridis"),
        
        ];

        vimeoLink("https://vimeo.com/italiour");

    }
        

});

const close = document.querySelector('.close');

close.addEventListener('click', () => {

    gsap.to('#hr4', {
        width: "0%",
        duration: 1.5,
        ease: "Expo.easeInOut"
    });

    gsap.to('.project_detail_page', {
        display: "none",
        top: "-100%",
        duration: 2.4,
        ease: "Expo.easeInOut",
        delay: 0.5
    });

    gsap.to('body', {
        overflow: "scroll",
    });  

    setTimeout(() => {
        
        for(var i=0; i < peopleArray.length; i++) {

            const e = document.querySelector('.role');
            projectDetailPeople.removeChild(e);
    
        } 

    }, 2000);

});

/* Contact Page Animation */

let tl4 = gsap.timeline({scrollTrigger: {
    trigger: ".contact_sec",
    start: "5% bottom", 
    end: '100.5% bottom',
}});

tl4.to("#hr5", {
    duration: 2,
    opacity: 1,     
    width: "73vw",
    ease: "Expo.easeInOut",
    stagger: 0.1,
});

tl4.from("#header5", {
    duration: 2,
    opacity: 0,     
    y: 30,
    ease: "Expo.easeInOut",
    delay: -1.5,
    stagger: 0.1,
});

tl4.to(".contact_box", {
    duration: 2,
    right: "100%",
    ease: "Expo.easeInOut",
    delay: -2
    
});

tl4.from('.contact_slogan', {

    duration: 2,
    opacity: 0,     
    x: -30,
    ease: "Expo.easeInOut",
    delay: -1.5,
    stagger: 0.1,

});

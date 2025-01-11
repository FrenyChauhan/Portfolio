
// toggle button for menu-icon//

let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});


//to show blue when button has been clicked//

const navLinks=document.querySelectorAll(".navbar a");

navLinks.forEach(link=>{
    link.addEventListener("click",function(){
        navLinks.forEach(nav=> nav.classList.remove("active"));
            this.classList.add("active");
    });
    });

    // const sections=document.querySelectorAll("section");

    // const observer= new IntersectionObserver(entries=>{
    //     entries.forEach(entry=>{
    //         if(entry.isIntersecting){
    //             navLinks.forEach(link=>link.classList.remove("active"));
            
    
    //         const id=entry.target.id;
    //         const activeLink=document.querySelector(`.navbar a[href="#${id}"]`);
    //         if(activeLink){
    //             activeLink.classList.add("active");
    //         }
    //     }
    //     });
    
    // },{
    //     root:null,
    //     threshold:0.6,
    // });

//sticky navbar

// let header=document.querySelector("header");
// header.classList.toggle("sticky",window.scrollY>100);

// menuIcon.classList.remove("bx-x");
// navbar.classList.remove("active");





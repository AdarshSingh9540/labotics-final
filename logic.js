// function updatesignuptosignout() {
//   const newText2 = sessionStorage.getItem('link');
//   if (newText2) {
//     document.querySelector('.linkout').innerHTML = newText2;
//   }
// }
 
// updatesignuptosignout();

// function updatesignouttosignup() {
//   const newText3 = sessionStorage.getItem('signout');
//   if (newText3) {
//     document.querySelector('.linkout').innerHTML = newText3;
//   }
// }
 
// updatesignouttosignup();




document.addEventListener("DOMContentLoaded", function () {
        const elementheroimage = document.querySelector(".tu");
       elementheroimage.classList.add("zoom-in");
});
// document.addEventListener("scroll",function(){
//     const chestt = document.querySelector(".chesttext")
//     chestt.classList.add("fade-in-left")
//     const chesti = document.querySelector(".chestimage")
//     chesti.classList.add("fade-in-right")
    
    
// })
// document.addEventListener("scroll",function(){
//     const chestt2 = document.querySelector(".chesttext2")
//     chestt2.classList.add("fade-in-right")
//     const chesti2 = document.querySelector(".chestimage2")
//     chesti2.classList.add("fade-in-left")
// })
// document.addEventListener("scroll",function(){
//     const chestt3 = document.querySelector(".chesttext3")
//     chestt3.classList.add("fade-in-left")
//     const chesti3 = document.querySelector(".chestimage3")
//     chesti3.classList.add("fade-in-right")
// })

function handleFadeIn(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-left");
        observer.unobserve(entry.target); 
      }
    });
  }
  

  const observer = new IntersectionObserver(handleFadeIn, {
    threshold: 0.2, 
  });
  
 
  const elementsToAnimate = document.querySelectorAll(".left");
  

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
  
  function handleFadeIn2(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-right"); 
        observer.unobserve(entry.target); 
      }
    });
  }
  
  
  const observer2 = new IntersectionObserver(handleFadeIn2, {
    threshold: 0.2, 
  });
  

  const elementsToAnimate2 = document.querySelectorAll(".right");
  
 
  elementsToAnimate2.forEach((element) => {
    observer2.observe(element);
  });
  
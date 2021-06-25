//here we're selection our modal class
const modal = document.querySelector(".modal");
//here we're selecting all our gallery imgs
const previews = document.querySelectorAll(".gallery img");
//here we're selecting the picture with full resolution
const original = document.querySelector(".full-img");
//here we're selecting our p tag
const caption = document.querySelector(".caption");

// taking all our preview pictures which we have as a const using a
// query selector for .gallery and img
// for each preview img we will run an arrow function
// we are looping over each item and we set a listener for a click
// after catching the click it will run a new function
// this new function will add a class called open
// as soon as the class open is assigned the properties in CSS will kick in
previews.forEach((preview) => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        // adding some dynamic change to img and text values
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./full/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

// to close we are not going to add an "X" mark. we are doing the opposite
//  we will add an event listener to a mouse event to identify the target of
// of the click,if the target is not the img it will remove the class open 
// from the img and automatically it will automatically close the full size
// img
modal.addEventListener("click", (e) =>{
    if (e.target.classList.contains("modal")){
        modal.classList.remove("open");
    }
});
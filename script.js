document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.txt-animate');
    const text = ' to showcase the best of his skills.';
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
        } else {
            textElement.textContent = '';
            index = 0;
        }
    }

    setInterval(type, 150); 
});
let locadress="index.html";
let expbtn =document.querySelector(".exp-btn");
expbtn.addEventListener("click", ()=>{
    let section2 = document.getElementById("section-2");
    
    if (section2) {
      section2.scrollIntoView({
        behavior: "smooth", 
      });
    }
});


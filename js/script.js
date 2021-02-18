   
   import{formTemplate}from "./formTemplate.js"

    let form = document.querySelector('#form')
    form.innerHTML = formTemplate;
    let input = document.querySelector(".input");
    let button = document.querySelector(".button");
    button.disabled = true;
    // input.addEventListener("change", stateHandle);
    // function stateHandle() {
    //   if (document.querySelector(".input").value === "") { 
    //       button.disabled = true;  
    //       } else {
    //           button.disabled = false;  
    //       }
// }

let descriptionHandicap = document.querySelector('textarea');
descriptionHandicap.style.display = "none";
let statusHandicap = document.getElementById('status');
statusHandicap.addEventListener("change", (event) => {
  if (event.target.value === "O") {
    descriptionHandicap.style.display = "block";
  } else {
    descriptionHandicap.style.display = "none";
  }
  
})


 
            

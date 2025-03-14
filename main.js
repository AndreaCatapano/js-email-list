let emailList = [];
const urlAPI = "https://flynn.boolean.careers/exercises/api/random/mail";
const parentElement = document.querySelector(".list-container");
const buttonElement = document.getElementById("button-new-element");


callApi10Times(emailList);



buttonElement.addEventListener("click", function ()  {
    destroyElementInArray(emailList);
    callApi10Times(emailList);
});



// <li class="list-group-item">An item</li>


function renderHTML(parent, childArray) {
parent.innerHTML = "";
  for (let i = 0; i < childArray.length; i++) {
    let element = childArray[i];
    let childElement = createHTML(element);
    parent.appendChild(childElement);
    }
}

function createHTML(member) {
    let element = document.createElement("li");
    element.classList.add("list-group-item");
  
    element.innerHTML =`<p>${member}</p>`;

   return element
  }

  function callApi10Times (array){
    for (let i = 0; i < 10; i++) {
        axios.get(urlAPI)
            .then(response => {
                array[i] = response.data.response;
    
                if (array.length === 10){
                    renderHTML(parentElement, array);
                }
            })
            .catch(error => console.error(error));
    }
  }


  function destroyElementInArray  (array){
     for (let i = 0; i < array.length; i++){
        array.pop;
     }
  }

  console.log("ciao")
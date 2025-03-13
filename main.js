const emailList = [];
const urlAPI = "https://flynn.boolean.careers/exercises/api/random/mail";
const parentElement = document.querySelector(".list-container")

for (let i = 0; i < 10; i++) {
    axios.get(urlAPI)
        .then(response => {
            emailList[i] = response.data.response;

            if (emailList.length === 10){
                renderHTML(parentElement, emailList)
            }
        })
        .catch(error => console.error(error));
}

console.log(emailList)


// <li class="list-group-item">An item</li>


function renderHTML(parent, childArray) {
  for (let i = 0; i < childArray.length; i++) {
    let element = childArray[i];
    let childElement = createHTML(element)
    parent.appendChild(childElement);
    }
}

function createHTML(member) {
    let element = document.createElement("li");
    element.classList.add("list-group-item")
  
    element.innerHTML =`<p>${member}</p>`

   return element
  }
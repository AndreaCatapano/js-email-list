const emailList = [];
const urlAPI = "https://flynn.boolean.careers/exercises/api/random/mail";

axios.get(urlAPI)
.then( response => { 
    console.log("api aperta")
    const email = response.data.response;
    emailList.push(email)
})
.catch(error => console.error(error));

console.log(emailList)

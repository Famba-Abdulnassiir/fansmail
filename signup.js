function signup_user(){

const email_address = document.getElementById("email_add");
const  first_name = document.getElementById("first_name");
const  last_name = document.getElementById("last_name");
const  password = document.getElementById("password");

    const url ="https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signup";
   

    const new_user = {
        "email_address": email_address.value,
        "first_name": first_name.value,
        "last_name": last_name.value,
        "password": password.value
};

fetch(url, {
    method: "POST",
    headers:{
        "Content-Type":"application/json",
    },
    //mode:"no-cors",
    body: JSON.stringify(new_user),
        "email_address": email_add.value,
        "first_name": first_name.value,
        "last_name": last_name.value,
        "password": password.value
    
})
    .then((response) => response.json())
    .then((data) => {
            if (data.status === 400) {
            document.getElementById("response").style.display ="block";
            document.getElementById("response").style.color ="red";
            document.getElementById("response").innerHTML = data.error;
            ;
        }
        else if (data.status === 201){
            document.getElementById("response").style.display = "block";
            document.getElementById("response").style.color = "green"
            document.getElementById("response").innerHTML = "signed up Successfuly"

        }
    
}).catch(error => { console.log("error",error)});
}

// const login = document.getElementById('loginbtn');

// login.addEventlistner('click', function(e)
// {
//     e.preventDefault();
//  });
 function signin(){

    const email_address = document.getElementById("email_add");
    const  password = document.getElementById("password");
    
    
   const url ="https://epicmail-sentongo-v2.herokuapp.com/api/v2/auth/signin";
       
    
        const signin_user = {
            "email_address": email_add.value,
            "password": password.value,
      
    };
    
    fetch(url, {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        
        body: JSON.stringify(signin_user),
            "email_address": email_address.value,
            "password": password.value,
            
        
    })
        .then((response) => response.json())
        .then((data) => {
                if (data.status !== 200) {
                document.getElementById("response").style.display ="block";
                document.getElementById("response").style.color ="red";
                document.getElementById("response").innerHTML = data.error;
                
            }
            else if (data.status === 200){
                document.getElementById("response").style.display = "block";
                document.getElementById("response").style.color = "green"
                document.getElementById("response").innerHTML = "signed in Successfuly"
                window.location.replace("dashboard.html");
    
            }
        
    }).catch(error => { console.log("error",error)});
    }
    
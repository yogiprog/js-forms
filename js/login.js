function login() {
    var password = document.getElementById("password");
    var username = document.getElementById("username");

    if(username.value==="abcd" && password.value==="123"){
        window.location.replace('personalDetails.html');
        console.log("login");
    }else{
    alert("incorrect login")
        console.log("incorrect login");
    }
   console.log(httpGetAsync("http://localhost:8080/metadata/form"));
}

function httpGetAsync(theUrl, callback)
{
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8080/metadata/form");
    request.send();
    request.onload=()=>{
        console.log(request);
        if(request.status===200){
            console.log(JSON.parse(request.response));
        }else{
            console.log(request.status);
        }
    }
}



    




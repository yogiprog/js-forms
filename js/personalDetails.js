var firstName ;
var lastName ;
var gender


function setFirstName(){
    firstName = document.getElementById("firstname").value; 
}
function setFirstName(){
    lastName = document.getElementById("lastName").value;
}

var toggle_mailing_address = false; // default is
function sameMailingAddress(){
    if(toggle_mailing_address)
        toggle_mailing_address= false;
     else
        toggle_mailing_address = true
    document.getElementById('mailing_address').style.display = toggle_mailing_address ? "inline" : "none";
}

function isValidDate()
{
    var s = document.getElementById('dob');
    console.log(">>>>>>>>"+s.value)
    if ( ! /^\d\d\/\d\d\/\d\d\d\d$/.test(s) ) {
        return false;
    }
    const parts = s.split('/').map((p) => parseInt(p, 10));
    parts[0] -= 1;
    const d = new Date(parts[2], parts[0], parts[1]);
    return d.getMonth() === parts[0] && d.getDate() === parts[1] && d.getFullYear() === parts[2];

};

function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output_image');
      output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}

var radios = document.getElementsByName('genderS');
function setGender(){
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          // do whatever you want with the checked radio
          console.log(radios[i].value);
      
          // only one radio can be logically checked, don't check the rest
          break;
        }
      }
}

function resetFrom(){
    setGender();
    if(isValidDate())
    console.log(">>>>>true");
    else
    console.log(">>>>>false")
}

function validateEmail(email) {
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("email validate" + re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
}

function submit(){
    console.log(">>>>>>>>>>>>submit");
}
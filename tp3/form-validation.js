
window.onload = function () {   

  var prenom = document.getElementById("inputfirstname").value;
   var lprenom = document.getElementById("inputfirstname").value.length;
  var nom = document.getElementById("inputfamilyname").value;
   var lnom = document.getElementById("inputfamilyname").value.length;
  var mail = document.getElementById("inputEmail4").value;
   var lmail = document.getElementById("inputEmail4").value.length;
  var date = document.getElementById("inputdateofbirth").value;
   var ldate = document.getElementById("inputdateofbirth").value.length;
  var Adresse = document.getElementById("inputAddress").value;
   var lAdresse = document.getElementById("inputAddress").value.length;
  var cité  = document.getElementById("inputCity").value
   var lcité  = document.getElementById("inputCity").value.length;
  var etat  = document.getElementById("inputState").value; 
   var letat  = document.getElementById("inputState").value.length;

  var inputdateofbirth = date.now;
  let inputdateofbirth = new Date(2021, 11, 22); 
  let inputdateofbirthTimestamp = inputdateofbirth.getTime();
  let nowTimestamp = Date.now();

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

            if (lnom == 0 && lprenom == 0 && lAdresse == 0 && lmail == 0 && ldate == 0  && lcité == 0 && letat == 0 ) {  
              var myModal = new bootstrap.Modal(document.getElementById('myModal'));
              myModal.show();
            }
   }
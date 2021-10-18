function validation() {
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const dateDeNaissance = document.getElementById("dateDeNaissance").value;
  const adress = document.getElementById("adress").value;
  const mail = document.getElementById("mail").value;
  console.log('nom', nom);

  document.getElementById("error").innerHTML = "";

  if (nom.length < 5) {
      document.getElementById("error").innerHTML = "La saisie du nom est obligatoire <br>";
  }
  if (prenom.length < 5) {
      document.getElementById("error").innerHTML += "La saisie du prenom est obligatoire<br>";
  }
  if (dateDeNaissance.length < 5) {
      document.getElementById("error").innerHTML += "La saisie de la date de naissance est obligatoire <br>";
  }
  if (mail.length < 5) {
      document.getElementById("error").innerHTML += "La saisie du mail est obligatoire <br>";
  }
  if (adress.length < 5) {
      document.getElementById("error").innerHTML += "La saisie d'adresse est obligatoire <br>";
  }

  if (document.getElementById("error").innerHTML == "") { document.getElementById("result").innerHTML = "Bienvenue " + document.querySelector("#nom").value; }

}

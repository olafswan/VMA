document.getElementById("calcul").addEventListener("click", function () {
  let distance = document.getElementById("distance"),
    pourcentage = document.getElementById("pourcentage"),
    VMA = document.getElementById("VMA"),
    resultat = document.querySelector('input[name="resultat"]');

  if (distance.value != 0 && VMA.value != 0 && pourcentage.value != 0) {
    let reponse =
      distance.value /
      (((VMA.value * 1000) / 3600) * (pourcentage.value / 100));
    if (reponse < 59) {
      reponse = `${Math.round(reponse)}s`;
    } else if (reponse < 3599) {
      let sec = Math.round(reponse % 60);
      let min = Math.round((reponse - sec) / 60);
      reponse = `${min}min ${sec}s`;
    } else {
      let hours = (reponse - (reponse % 3600)) / 3600;
      let sec = Math.round((reponse % 3600) % 60);
      let min = Math.round(((reponse % 3600) - sec) / 60);
      reponse = `${hours}h ${min}min ${sec}s`;
    }

    resultat.value = reponse;
  } else {
    resultat.value = "remplir tous les champs";
  }

  document.getElementById("hideDiv").style.display = "block";
});

/**
if (distance.value != Nan && VMA.value != Nan && pourcentage.value != Nan) {
    resultat.value =
    distance.value / (((VMA.value * 1000) / 3600) * (pourcentage.value / 100));

} else {
    resultat.value =
    "données invalides";
}

/**
 * 

document.getElementById("calcul").addEventListener("click", function () {
  let distance = document.getElementById("distance"),
    pourcentage = document.getElementById("pourcentage"),
    VMA = document.getElementById("VMA"),
    resultat = document.querySelector('input[name="resultat"]');
  resultat.value =
    distance.value / (((VMA.value * 1000) / 3600) * (pourcentage.value / 100));
});


 */

/*
let reponse;
if (resultat < 59) {
    reponse = ‘${resultat}s‘;
} else {
    let sec = resultat % 60;
    let min = (resultat - sec) / 60;
    reponse = ‘${min}min ${sec}s‘
}
*/

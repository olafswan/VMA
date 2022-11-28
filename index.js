document.getElementById("calcul").addEventListener("click", function () {
  let VMA = document.getElementById("VMA"),
    distance = document.getElementById("distance"),
    pourcentage = document.getElementById("pourcentage"),
    resultat = document.querySelector('input[name="resultat"]');

  VMA = VMA.value;
  distance = distance.value;
  pourcentage = pourcentage.value;

  if (distance != 0 && VMA != 0 && pourcentage != 0) {
    let reponse = distance / (((VMA * 1000) / 3600) * (pourcentage / 100));
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
    resultat.value = "Données erronées (utilisez un . comme séparateur décimal)";
  }

  document.getElementById("hideDiv").style.display = "block";
});

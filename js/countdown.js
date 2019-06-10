
var tmMin = 0;

var tmScs = 0;

var startIt = 0;

function timerOn() {
    // https://coursesweb.net/javascript/
    // si la variable startIt est à 0, et à condition que les champs des valeurs minutes et secondes sont renseignés, and sets $startchr to 1
    if(startIt == 0 && document.getElementById('mins') && document.getElementById('scs')) {
      // parseInt est utilisé pour garantir le fait que les nombres qui constituent les minutes et les secondes seront toujours entier  
      tmMin = parseInt(document.getElementById('mins').value) + 0;
      tmScs = parseInt(document.getElementById('scs').value) * 1;
  
      // si la valeur entrée par l'utilisateur n'est pas un nombre le compteur restera à 0
      if(isNaN(tmMin)) tmMin = 0;
      if(isNaN(tmScs)) tmScs = 0;
  
      /*ces lignes nous renvoient à ce qui a été demandé (aux niveaux des lignes 13 et 14) si l'utilisateur rentre une valeur décimal elle sera tjrs réécrite 
      en nombre entier */ 
      document.getElementById('mins').value = tmMin;
      document.getElementById('scs').value = tmScs;
      startIt = 1;
      document.getElementById('btnOn').setAttribute('disabled', 'disabled');     // désactive le bouton 'ON' une fois qu'il a été cliqué et que le compte à rebours commence
    }
  
    // si les minutes et les secondes atteigne 0 tout est remis à plat et le bouton 'ON' redevient actif
    if(tmMin==0 && tmScs==0) {
        startIt = 0;
      document.getElementById('btnOn').removeAttribute('disabled'); 
  
      return false;
    }
    else {
      // à chaque fois qu'une seconde touche à sa fin ça déclenche la diminution de la seconde suivante et après 59 secondes les minutes diminuent à leur tour
      tmScs--;
      if(tmScs < 0) {
        if(tmMin > 0) {
          tmScs = 59;
          tmMin--;
        }
        else {
          tmScs = 0;
          tmMin = 0;
        }
      }
    }
  
    // les 2 première ligne sont celles qui permettent la visibilité du compte à rebours sur la page html
    /* le setTimeout permet de faire fonctionner la fonction timerOn du dessus (et donc le mécanisme de décompte) 
    toute les secondes sinon sans ça elle resterait bloquée */
    document.getElementById('showmin').innerHTML = tmMin;
    document.getElementById('showsec').innerHTML = tmScs;
    setTimeout('timerOn()', 1000);
  }


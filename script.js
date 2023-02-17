/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let clicks = 0;

function addOneToClicks() {
  clicks += 1;
  document.getElementById("btn__state").innerText = `${clicks}`;
  console.log(clicks);
}

document
  .getElementById("btn__element")
  .addEventListener("click", addOneToClicks);

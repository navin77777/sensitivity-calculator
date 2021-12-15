const next0 = document.getElementById("next0");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");
const next5 = document.getElementById("next5");
const next6 = document.getElementById("next6");
const next7 = document.getElementById("next7");

const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");
const back3 = document.getElementById("back3");
const back4 = document.getElementById("back4");
const back5 = document.getElementById("back5");
const back6 = document.getElementById("back6");

const ratingOne = document.getElementById("rating1");
const ratingTwo = document.getElementById("rating2");
const ratingThree = document.getElementById("rating3");
const ratingFour = document.getElementById("rating4");
const ratingFive = document.getElementById("rating5");

const sym1 = document.getElementById("sym1");
const sym2 = document.getElementById("sym2");
const sym3 = document.getElementById("sym3");

const frequency1 = document.getElementById("f1");
const frequency2 = document.getElementById("f2");
const frequency3 = document.getElementById("f3");

const time1 = document.getElementById("g1");
const time2 = document.getElementById("g2");
const time3 = document.getElementById("g3");
const time4 = document.getElementById("g4");

const dcOne = document.getElementById("dc1");
const dcTwo = document.getElementById("dc2");
const dcThree = document.getElementById("dc3");
const dcFour = document.getElementById("dc4");
const dcFive = document.getElementById("dc5");

const painSym1 = document.getElementById("fe1");
const painSym2 = document.getElementById("fe2");
const painSym3 = document.getElementById("fe3");

const habit1 = document.getElementById("h1");
const habit2 = document.getElementById("h2");
const habit3 = document.getElementById("h3");
const habit4 = document.getElementById("h4");

function hideSlider() {
  progress.style.width = "0px";
}

next0.onclick = function () {
  form0.style.left = "-1500px";
  form1.style.left = "0px";
  progress.style.width = "90px";
};

next1.onclick = function () {
  if (ratingTwo.checked == true) {
    form1.style.left = "1500px";
    form2.style.left = "0px";
    progress.style.width = "180px";
  } else if (ratingThree.checked == true) {
    form1.style.left = "1500px";
    form2.style.left = "0px";
    progress.style.width = "180px";
  } else if (ratingFour.checked == true) {
    form1.style.left = "1500px";
    form2.style.left = "0px";
    progress.style.width = "180px";
  } else if (ratingFive.checked == true) {
    form1.style.left = "1500px";
    form2.style.left = "0px";
    progress.style.width = "180px";
  } else if (ratingOne.checked == true) {
    form1.style.left = "1500px";
    form2.style.left = "0px";
    progress.style.width = "180px";
  } else {
    alert("Please Select the option");
  }
};

next2.onclick = function () {
  if (sym1.checked == true) {
    form2.style.left = "1500px";
    form3.style.left = "0px";
    progress.style.width = "270px";
  } else if (sym2.checked == true) {
    form2.style.left = "1500px";
    form3.style.left = "0px";
    progress.style.width = "270px";
  } else if (sym3.checked == true) {
    form2.style.left = "1500px";
    form3.style.left = "0px";
    progress.style.width = "270px";
  } else {
    alert("Please select the options");
  }
};

back1.onclick = function () {
  form2.style.left = "1500px";
  form1.style.left = "0px";
  progress.style.width = "90px";
};

next3.onclick = function () {
  if (frequency1.checked == true) {
    form3.style.left = "-1500px";
    form4.style.left = "0px";
    progress.style.width = "360px";
  } else if (frequency2.checked == true) {
    form3.style.left = "-1500px";
    form4.style.left = "0px";
    progress.style.width = "360px";
  } else if (frequency3.checked == true) {
    form3.style.left = "-1500px";
    form4.style.left = "0px";
    progress.style.width = "360px";
  } else {
    alert("Please select the option");

    form3.style.left = "0px";
    form4.style.left = "-1500px";
    progress.style.width = "270px";
  }
};

back2.onclick = function () {
  form3.style.left = "-1500px";
  form2.style.left = "0px";
  progress.style.width = "180px";
};

next4.onclick = function () {
  if (time1.checked == true) {
    form4.style.left = "-1500px";
    form5.style.left = "0px";
    progress.style.width = "450px";
  } else if (time2.checked == true) {
    form4.style.left = "-1500px";
    form5.style.left = "0px";
    progress.style.width = "450px";
  } else if (time3.checked == true) {
    form4.style.left = "-1500px";
    form5.style.left = "0px";
    progress.style.width = "450px";
  } else if (time4.checked == true) {
    form4.style.left = "-1500px";
    form5.style.left = "0px";
    progress.style.width = "450px";
  } else {
    alert("please select the option");
  }
};

back3.onclick = function () {
  form4.style.left = "-1500px";
  form3.style.left = "0px";
  progress.style.width = "270px";
};

next5.onclick = function () {
  if (dcTwo.checked == true) {
    form5.style.left = "1500px";
    form6.style.left = "0px";
    progress.style.width = "540px";
  } else if (dcThree.checked == true) {
    form5.style.left = "1500px";
    form6.style.left = "0px";
    progress.style.width = "540px";
  } else if (dcFour.checked == true) {
    form5.style.left = "1500px";
    form6.style.left = "0px";
    progress.style.width = "540px";
  } else if (dcFive.checked == true) {
    form5.style.left = "1500px";
    form6.style.left = "0px";
    progress.style.width = "540px";
  } else if (dcOne.checked == true) {
    form5.style.left = "1500px";
    form6.style.left = "0px";
    progress.style.width = "540px";
  } else {
    alert("Please select the option");
  }
};

back4.onclick = function () {
  form5.style.left = "1500px";
  form4.style.left = "0px";
  progress.style.width = "360px";
};

next6.onclick = function () {
  if (painSym2.checked == true) {
    form6.style.left = "1500px";
    form7.style.left = "0px";
    progress.style.width = "630px";
  } else if (painSym3.checked == true) {
    form6.style.left = "1500px";
    form7.style.left = "0px";
    progress.style.width = "630px";
  } else if (painSym1.checked == true) {
    form6.style.left = "1500px";
    form7.style.left = "0px";
    progress.style.width = "630px";
  } else {
    alert("Please select the option");
  }
};

back5.onclick = function () {
  form6.style.left = "1500px";
  form5.style.left = "0px";
  progress.style.width = "450px";
};

back6.onclick = function () {
  form7.style.left = "1500px";
  form6.style.left = "0px";
  progress.style.width = "540px";
};

document.querySelector(".hideText").style.visibility = "hidden";
document.querySelector("#q7").style.visibility = "hidden";

function Calculate() {
  let result = 0;

  const ratingOne = document.getElementById("rating1");
  const ratingTwo = document.getElementById("rating2");
  const ratingThree = document.getElementById("rating3");
  const ratingFour = document.getElementById("rating4");
  const ratingFive = document.getElementById("rating5");

  const sym1 = document.getElementById("sym1");
  const sym2 = document.getElementById("sym2");
  const sym3 = document.getElementById("sym3");

  const frequency1 = document.getElementById("f1");
  const frequency2 = document.getElementById("f2");
  const frequency3 = document.getElementById("f3");

  const time1 = document.getElementById("g1");
  const time2 = document.getElementById("g2");
  const time3 = document.getElementById("g3");
  const time4 = document.getElementById("g4");

  const dcOne = document.getElementById("dc1");
  const dcTwo = document.getElementById("dc2");
  const dcThree = document.getElementById("dc3");
  const dcFour = document.getElementById("dc4");
  const dcFive = document.getElementById("dc5");

  const painSym1 = document.getElementById("fe1");
  const painSym2 = document.getElementById("fe2");
  const painSym3 = document.getElementById("fe3");

  const habit1 = document.getElementById("h1");
  const habit2 = document.getElementById("h2");
  const habit3 = document.getElementById("h3");
  const habit4 = document.getElementById("h4");

  if (ratingTwo.checked == true) {
    result = result + 0.5;
  } else if (ratingThree.checked == true) {
    result = result + 0.5;
  } else if (ratingFour.checked == true) {
    result = result + 1;
  } else if (ratingFive.checked == true) {
    result = result + 1;
  } else if (ratingOne.checked == true) {
    result = result + 0;
  } else {
    result = result + 20;
  }

  if (sym1.checked == true) {
    result = result + 1;
  } else if (sym2.checked == true) {
    result = result + 1;
  } else if (sym3.checked == true) {
    result = result + 0;
  } else {
    result = result + 20;
  }

  if (frequency1.checked == true) {
    result = result + 1;
  } else if (frequency2.checked == true) {
    result = result + 0;
  } else if (frequency3.checked == true) {
    result = result + 1;
  } else {
    result = result + 20;
  }

  if (time1.checked == true) {
    result = result + 1;
  } else if (time2.checked == true) {
    result = result + 0;
  } else if (time3.checked == true) {
    result = result + 1;
  } else if (time4.checked == true) {
    result = result + 1;
  } else {
    result = result + 20;
  }

  if (dcTwo.checked == true) {
    result = result + 0.5;
  } else if (dcThree.checked == true) {
    result = result + 0.5;
  } else if (dcFour.checked == true) {
    result = result + 1;
  } else if (dcFive.checked == true) {
    result = result + 1;
  } else if (dcOne.checked == true) {
    result = result + 0;
  } else {
    result = result + 20;
  }

  if (painSym2.checked == true) {
    result = result + 0.5;
  } else if (painSym3.checked == true) {
    result = result + 1;
  } else if (painSym1.checked == true) {
    result = result + 0;
  } else {
    result = result + 20;
  }

  if (habit1.checked == true) {
    result = result + 1;
  } else if (habit2.checked == true) {
    result = result + 1;
  } else if (habit3.checked == true) {
    result = result + 1;
  } else if (habit4.checked == true) {
    result = result + 0;
  } else {
    result = result + 20;
  }

  if (result <= 4) {
    document.querySelector(".modal-text").innerHTML =
      "<span style='color: #5225B5; font-size: 1.5rem; font-weight: 700'>Congratulations!</span> You do not have sensitive teeth. Continue your oral hygiene routine to avoid teeth sensitivity and other oral conditions.  <br />";
  } else if (result == 5.0 || result == 4.5 || result == 5.5) {
    document.querySelector(".modal-text").innerHTML =
      "<span style='color: #5225B5; font-size: 1.5rem; font-weight: 700'>Right now, </span> you do not have sensitive teeth, but may develop soon. To prevent this, use <span style='font-size: 1.5rem; font-weight: 700; color: #FF6F61'>Vantej</span> and say goodbye to sensitive teeth. ";
  } else if (result > 5 && result <= 10) {
    document.querySelector(".modal-text").innerHTML =
      " <span style='color: #5225B5; font-size: 1.5rem; font-weight: 700'> Ouch!</span>  You have sensitive teeth. You need to use <span style='font-size: 1.5rem; font-weight: 700; color: #FF6F61'> Vantej </span> to help reduce sensitivity. However, do consult a dentist for more recommendations.";
  } else {
    document.querySelector(".modal-text").innerHTML =
      "<span style='color:red'>Please answer all the questions.</span>";
  }
}

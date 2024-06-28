let inputOne = document.querySelector(".first");
let inputTwo = document.querySelector(".second");
let checkBtn = document.querySelector(".btn");
let showCard = document.querySelector(".show-card");

checkBtn.addEventListener("click", () => {
  let inputOneVal = inputOne.value;
  let inputTwoVal = inputTwo.value;
  //Remove spaces and convert to lowercase
  let str1 = inputOneVal.replace(/\s/g, "").toLowerCase();
  let str2 = inputTwoVal.replace(/\s/g, "").toLowerCase();
  let sortOne = str1.split("").sort().join("");
  let sortTwo = str2.split("").sort().join("");
  if (isNaN(inputOneVal) || isNaN(inputTwoVal)) {
    if (sortOne.length === 0 && sortTwo.length === 0) {
      showCard.style.display = "block";
      showCard.classList.add("error");
      showCard.textContent = "Fields are blank";
      window.setTimeout(function () {
        showCard.classList.remove("error");
        showCard.textContent = "";
      }, 4000);
      showCard.classList.remove("success");
    } else if (sortOne !== sortTwo) {
      showCard.style.display = "block";
      showCard.classList.add("error");
      showCard.textContent = "Not an anagram";
      window.setTimeout(function () {
        showCard.classList.remove("error");
        showCard.textContent = "";
      }, 4000);
      showCard.classList.remove("success");
    } else {
      showCard.style.display = "block";
      showCard.classList.add("success");
      showCard.textContent = "It's an anagram";
      window.setTimeout(function () {
        showCard.classList.remove("success");
        showCard.textContent = "";
      }, 4000);
      showCard.classList.remove("error");
    }
  } else {
    showCard.style.display = "block";
    showCard.classList.add("error");
    showCard.textContent = "Numbers are not allowed";
    window.setTimeout(function () {
      showCard.classList.remove("error");
      showCard.textContent = "";
    }, 4000);
    showCard.classList.remove("success");
  }
});

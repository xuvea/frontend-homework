const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

function handleInput() {
  if (parseInt(elem.value) >= 0) {
    var original = elem.value;
    var reversed = original.split("");
    reversed = reversed.reverse();
    reversed = reversed.join("");
    element = document.getElementById("response");

    if (original.valueOf() === reversed.valueOf()) {
      element.classList.remove("text-danger");
      element.classList.add("text-success");
      element.innerHTML = "Yes. This is a palidrome!";
    } else {
      element.classList.remove("text-success");
      element.classList.add("text-danger");
      element.innerHTML = "No. Try Again.";
    }
  } else {
    element.classList.remove("text-danger");
    element.classList.remove("text-success");
    element.innerHTML = "Not a positive number, try again.";
  }
}

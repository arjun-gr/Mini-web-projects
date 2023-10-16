const txtarea = document.getElementById("textArea");

const totalChars = document.querySelector("#totalChars");

const remainChars = document.querySelector("#remainChars");

txtarea.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalChars.innerText = txtarea.value.length;

  remainChars.innerHTML =
    txtarea.getAttribute("maxlength") - txtarea.value.length;

  if (
    parseInt(totalChars.textContent) <
    txtarea.getAttribute("maxlength") / 1.5
  ) {
    txtarea.style.outline = "2px solid green";
  } else {
    txtarea.style.outline = "2px solid red";
  }
}

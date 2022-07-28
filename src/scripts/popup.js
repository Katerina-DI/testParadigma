modal = document.getElementById("popupRequestId");
console.log(modal);
// Get the button that opens the modal
btn = document.getElementById("btnPopup");
console.log(btn);
// Get the <span> element that closes the modal
span = document.getElementsByClassName("close")[0];
console.log(span);
// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

accepted = document.getElementById("popupRequestAcceptedId");

// Get the button that opens the modal
btnAccep = document.getElementById("btnRequest");

// Get the <span> element that closes the modal
spanAccep = document.getElementsByClassName("closeAccepted")[0];

// When the user clicks on the button, open the modal

btnAccep.onclick = function () {
  modalClose = document.getElementById("popupRequestId");
  if ((accepted.style.display = "block")) {
    modalClose.style.display = "none";
  }
};
// btnAccep.onclick = function modalClose() {
//   modal.style.display = "none";
// };

// When the user clicks on <span> (x), close the modal
spanAccep.onclick = function () {
  accepted.style.display = "none";
};

function checkPopup() {
  var checkbox = document.getElementById("popup");
  if (checkbox.checked != true) {
    alert("Обязательное условие");
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == accepted) {
    accepted.style.display = "none";
  }
};

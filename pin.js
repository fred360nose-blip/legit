let pin = "";
const correctPin = "111111";

const boxes = document.querySelectorAll(".pin-boxes div");
const buttons = document.querySelectorAll(".keypad button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (button.id === "delete") {
      pin = pin.slice(0, -1);
      updateBoxes();
      return;
    }

    if (!value || pin.length >= 6) return;

    pin += value;
    updateBoxes();

    if (pin.length === 6) {
      setTimeout(() => {
        if (pin === correctPin) {
          window.location.href = "home.html";
        } else {
          alert("Wrong PIN");
          pin = "";
          updateBoxes();
        }
      }, 200);
    }
  });
});

function updateBoxes() {
  boxes.forEach((box, index) => {
    box.innerText = pin[index] ? "•" : "";
  });
}

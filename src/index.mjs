import "./styles.css";

let input = "";

function updateDOM() {
  document.getElementById("app").innerHTML = `
    <h1>Welcome</h1>
  `;
}

const inputEventListener = document.getElementById("inputValue");
inputEventListener.addEventListener("input", (event) => {
  console.log(event.target);
  input = event.target.value;
  updateDOM();
});

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  updateDOM();
});

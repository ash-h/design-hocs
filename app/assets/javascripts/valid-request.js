

const items = document.getElementsByClassName("govuk-radios__input");
const button = document.getElementsByClassName("request-button")[0];

if (button) {
  button.addEventListener("click", (e) => {
    let path = "";
    e.preventDefault()
    for (let x of items) {
      if (x.checked) {
        console.log(x.value, x.getAttribute("data-url"));
        path = `${x.getAttribute("data-url")}`
        window.location.href = path;
      }
    }
  })
}
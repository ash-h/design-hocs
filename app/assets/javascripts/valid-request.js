

const items = document.getElementsByClassName("govuk-radios__input");
const button = document.getElementsByClassName("request-button")[0];
const backLink = document.getElementsByClassName('back-link')[0];

if(backLink) {
  backLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.history.back();
  })
}

if(button) {
  button.addEventListener("click", (e) => {
    let path = "";
    e.preventDefault()
    for (let x of items) {
      if (x.checked) {
        //console.log(x.value, x.getAttribute("data-url"));
        path = `${x.getAttribute("data-url")}`
        window.location.href = path;
      }
    }
  })
}
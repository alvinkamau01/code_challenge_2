let form = [];
document.addEventListener("DOMContentLoaded", () => {
  form = [
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      handleList(e.target.to_purchase.value);
    }),
  ];
});
let list = document.querySelector("#to_purchase");
function handleList(list) {
  let p = document.createElement("ul");
  let btn = document.createElement("button");
  let checkbox = document.createElement("input");
  let edit = document.createElement("button")
  checkbox.type = "checkBox"
  edit.type = "submit"
  p.textContent = `${list}`
  btn.textContent = "x"
  p.appendChild(btn)
  p.appendChild(checkbox)
  //p.appendChild(edit)
  document.querySelector("#container4").appendChild(p)
  btn.addEventListener("click", (e) => e.target.parentNode.remove())
  checkbox.addEventListener("click", (e) => {
    let passed = (e.target.parentNode.style.textDecoration = "line-through")
    if (e.target.checked) {
      return passed;
    } else {
      e.target.parentNode.style.textDecoration = "none";
    }
  })
  /*edit.addEventListener("click", (e) => {
    e.target.parentNode.replace()
  })
  */

}

var input = document.getElementById("input");
var list = document.getElementById("list");
function save() {
  if (input.value === "") {
    alert("you must write something ! ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = " ";
  savedata();
}
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("check");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", list.innerHTML);
}
function showdata()
{
    list.innerHTML=localStorage.getItem("data")
}
showdata()

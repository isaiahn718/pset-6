let elements = []
var add = document.getElementById("add_button");
var row = document.getElementsByClassName("row");
let priority_button = document.getElementsByClassName("priority_button");
let complete_button = document.getElementsByClassName("complete_button");
let remove_button = document.getElementsByClassName("remove_button");
let list_item = document.getElementsByClassName("to_do")

let element_prioritize;

window.onload = function() {
  document.getElementById("table").onmouseover = startup;
}

const create_item = function() {
  let input = document.getElementById("input_item").value;
  if (input === "") {

  }
   else {
       let to_do = {
           task: input,
           priority: false,
           complete: false,
           html_row: null,
           html_priority_button: null,
           html_text: null,
           html_remove_button: null
       }

       elements.push(to_do);
            let index = elements.indexOf(to_do);

            elements[index].htmlRow = document.createElement("tr");
            elements[index].htmlRow.setAttribute("class", "row");
            document.getElementById("table").append(elements[index].htmlRow);

            elements[index].htmlPriorityButton = document.createElement("td");
            elements[index].htmlPriorityButton.setAttribute("class", "priority_button");
            elements[index].htmlPriorityButton.innerHTML = "!";

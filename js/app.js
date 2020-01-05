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

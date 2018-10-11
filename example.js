var listItems = [];
var inputNewItem;
var ulList;

window.onload = function() {
  inputNewItem = document.getElementById("newItem");
  ulList = document.getElementById("myList");
};

function addItemClick() {
  if(inputNewItem.value.length > 0) {
    // Create a new list item
    var newListItem = document.createElement("li");
    newListItem.appendChild(document.createTextNode(inputNewItem.value));

    // Append it to myList
    ulList.appendChild(newListItem);
    listItems.push(inputNewItem.value);

    // Finally clear the text box and set focus to it
    inputNewItem.value = '';
    inputNewItem.focus();
  }

}

function saveList() {

}

function loadList() {

}